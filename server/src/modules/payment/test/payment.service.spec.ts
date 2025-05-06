import { TestingModule } from '@nestjs/testing';
import {
  mockLodgePriceService,
  mockOrderService,
  mockUsersService,
  testingModule,
} from './base.test';
import { PaymentService } from '../payment.service';
import axios from 'axios';
import { SERVICE_CHARGE } from '@modules/common/constants';
import { HttpException } from '@nestjs/common';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('PaymentService', () => {
  let service: PaymentService;

  beforeEach(async () => {
    const module: TestingModule = await testingModule().compile();

    service = module.get<PaymentService>(PaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should initiate payment successfully', async () => {
    const user = { id: 'user1', email: 'test@example.com', lodgeId: 'lodge1' };
    const vendorId = 'vendor123';
    const price = 500;
    const subaccount = 'sub_acc_id';

    const lodgePrice = {
      price,
      vendor: { subaccount },
    };

    const responseMock = {
      data: {
        data: {
          reference: 'ref123',
        },
      },
    };

    const dto = {
      vendorId,
      noOfGallons: 2,
    };

    mockUsersService.getUserById.mockResolvedValue(user);
    mockLodgePriceService.getLodgePrice.mockResolvedValue(lodgePrice);
    mockedAxios.post.mockResolvedValue(responseMock);

    await service.initiatePayment('user1', dto);

    expect(mockUsersService.getUserById).toHaveBeenCalledWith('user1');
    expect(mockLodgePriceService.getLodgePrice).toHaveBeenCalledWith(
      dto.vendorId,
      user.lodgeId,
    );
    expect(mockOrderService.placeOrder).toHaveBeenCalledWith({
      userId: 'user1',
      vendorId,
      noOfGallons: dto.noOfGallons,
      totalAmount: price * dto.noOfGallons + SERVICE_CHARGE,
      paymentReference: 'ref123',
    });
  });

  it('should throw if user is not found', async () => {
    mockUsersService.getUserById.mockResolvedValue(null);

    await expect(
      service.initiatePayment('invalid_user', {
        vendorId: 'vendor1',
        noOfGallons: 1,
      }),
    ).rejects.toThrow(HttpException);
  });

  it('should throw if axios fails', async () => {
    mockUsersService.getUserById.mockResolvedValue({
      id: 'user1',
      email: 'test@example.com',
      lodgeId: 'lodge1',
    });
    mockLodgePriceService.getLodgePrice.mockResolvedValue({
      price: 500,
      vendor: { subaccount: 'sub' },
    });

    mockedAxios.post.mockRejectedValue(HttpException);

    await expect(
      service.initiatePayment('user1', {
        vendorId: 'vendor1',
        noOfGallons: 2,
      }),
    ).rejects.toThrow(HttpException);
  });
});
