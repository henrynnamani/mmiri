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
          password: '123456',
          businessName: 'Biz',
          bankCode: '001',
          accountNumber: '1234567890',
          role: Role.VENDOR,
          phoneNumber: '0987654321',
        }),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('verifyVendor', () => {
    it('should return vendor if credentials are valid', async () => {
      const vendor = { email: 'test@example.com', password: 'hashed' };
      mockVendorModelAction.get.mockResolvedValueOnce(vendor);
      (verifyPassword as jest.Mock).mockResolvedValueOnce(true);

      const result = await service.verifyVendor({
        email: 'test@example.com',
        password: 'plain',
        role: Role.VENDOR,
      });
      expect(result).toEqual(vendor);
    });

    it('should throw NotFoundException if vendor not found', async () => {
      mockVendorModelAction.get.mockResolvedValueOnce(null);
      await expect(
        service.verifyVendor({
          email: 'test@example.com',
          password: 'plain',
          role: Role.VENDOR,
        }),
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw BadRequestException if password invalid', async () => {
      mockVendorModelAction.get.mockResolvedValueOnce({
        email: 'test@example.com',
        password: 'hashed',
      });
      (verifyPassword as jest.Mock).mockResolvedValueOnce(false);

      await expect(
        service.verifyVendor({
          email: 'test@example.com',
          password: 'wrong',
          role: Role.VENDOR,
        }),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('addServingLocation', () => {
    it('should add a location to a vendor', async () => {
      const vendor = { id: 'v1' };
      const location = { id: 'l1' };

      mockVendorModelAction.get.mockResolvedValueOnce(vendor);
      mockLocationsService.findLocationById.mockResolvedValueOnce(location);
      mockVendorLocationService.addServingLocation.mockResolvedValueOnce({
        id: 'r1',
        vendor,
        location,
      });

      const result = await service.addServingLocation('v1', 'l1');

      expect(result).toEqual({
        message: SYS_MSG.VENDOR_SERVING_LOCATION_UPDATED,
        data: { id: 'r1', vendor, location },
      });
    });
  });
});
