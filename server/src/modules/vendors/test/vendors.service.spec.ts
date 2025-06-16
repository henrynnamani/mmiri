import { BadRequestException, NotFoundException } from '@nestjs/common';
import { RegisterDto } from '@modules/auths/dto/auths.dto';
import * as SYS_MSG from '@modules/common/system-message';
import { hashPassword, verifyPassword } from '@modules/common/utils/auth';
import axios from 'axios';
import { VendorsService } from '../vendors.service';
import {
  mockLocationsService,
  mockVendorLocationService,
  mockVendorModelAction,
  testingModule,
} from './base.test';
import { Role } from '@modules/common/enums';
import { TestingModule } from '@nestjs/testing';

jest.mock('axios');
jest.mock('@modules/common/utils/auth');

describe('VendorsService', () => {
  let service: VendorsService;

  beforeEach(async () => {
    const module: TestingModule = await testingModule().compile();

    service = module.get<VendorsService>(VendorsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('registerVendor', () => {
    it('should register a new vendor successfully', async () => {
      const dto: RegisterDto = {
        email: 'vendor@example.com',
        password: 'password123',
        businessName: 'My Shop',
        bankCode: '001',
        accountNumber: '1234567890',
        role: Role.VENDOR,
        phoneNumber: '0987654321',
        chatId: 3832,
      };

      (hashPassword as jest.Mock).mockResolvedValue('hashedPassword');
      (axios.post as jest.Mock).mockResolvedValue({
        data: { data: { subaccount_code: 'SUB_123' } },
      });

      mockVendorModelAction.get.mockResolvedValueOnce(null); // no existing vendor
      mockVendorModelAction.create.mockResolvedValueOnce({});
      mockVendorModelAction.get.mockResolvedValueOnce({
        id: 'v1',
        email: dto.email,
      });

      const result = await service.registerVendor(dto);

      expect(result).toEqual({ id: 'v1', email: dto.email });
    });

    it('should throw BadRequestException if vendor exists', async () => {
      mockVendorModelAction.get.mockResolvedValueOnce({
        email: 'vendor@example.com',
      });

      await expect(
        service.registerVendor({
          email: 'vendor@example.com',
          businessName: 'Biz',
          bankCode: '001',
          accountNumber: '1234567890',
          role: Role.VENDOR,
          phoneNumber: '0987654321',
          chatId: 3823,
        }),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('changeAvailabilityStatus', () => {
    it('should toggle vendor active status', async () => {
      mockVendorModelAction.get
        .mockResolvedValueOnce({ chatId: 123, isActive: false })
        .mockResolvedValueOnce({ chatId: 123, isActive: true });
      mockVendorModelAction.update.mockResolvedValueOnce({});

      const result = await service.changeAvailabilityStatus(123);

      expect(result.message).toBe(SYS_MSG.VENDOR_AVAILABILITY_UPDATED);
      expect(result.data).toBeDefined();
    });

    it('should throw if vendor not found', async () => {
      mockVendorModelAction.get.mockResolvedValueOnce(null);

      await expect(service.changeAvailabilityStatus(999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('getVendorByEmail', () => {
    it('should get vendor by email', async () => {
      mockVendorModelAction.get.mockResolvedValueOnce({ id: 'v1' });
      const result = await service.getVendorByEmail('test@example.com');
      expect(result).toEqual({ id: 'v1' });
    });
  });
});
