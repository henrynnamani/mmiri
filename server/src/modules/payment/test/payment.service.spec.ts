import { TestingModule } from '@nestjs/testing';
import {
  mockLodgePriceService,
  mockLodgesService,
  mockOrderService,
  mockPaymentModelAction,
  mockUsersService,
  testingModule,
} from './base.test';
import { PaymentService } from '../payment.service';
import axios from 'axios';
import { SERVICE_CHARGE } from '@modules/common/constants';
import { BadRequestException, HttpException } from '@nestjs/common';
import { mockUser } from '@modules/users/test/users.test.mock';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('PaymentService', () => {
  let service: PaymentService;

  beforeEach(async () => {
    const module: TestingModule = await testingModule().compile();

    service = module.get<PaymentService>(PaymentService);
    (service as any).paystackSecretKey = 'test_key';
    (service as any).paystackBaseUrl = 'https://api.paystack.co';
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  jest.mock('axios');
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  describe('PaymentService', () => {
    describe('createPaymentRecord', () => {
      it('should throw if creation fails', async () => {
        (mockPaymentModelAction.create as jest.Mock).mockResolvedValue(null);
        await expect(
          service.createPaymentRecord({
            orderId: 'order1',
            amount: 500,
            status: false,
            reference: 'ref123',
          }),
        ).rejects.toThrow(BadRequestException);
      });

      it('should return created payment record', async () => {
        const mockResponse = { id: 'payment1' };
        (mockPaymentModelAction.create as jest.Mock).mockResolvedValue(
          mockResponse,
        );
        const result = await service.createPaymentRecord({
          orderId: 'order1',
          amount: 500,
          status: false,
          reference: 'ref123',
        });
        expect(result).toEqual(mockResponse);
      });
    });

    describe('initiatePayment', () => {
      const user = { email: 'test@example.com' };
      const paymentDto = {
        orderId: 'order1',
        lodgeId: 'lodge1',
        noOfGallons: 3,
        subaccount: 'sub_123',
      };

      it('should throw if location price is not found', async () => {
        (
          mockLodgesService.getLodgeLocationPrice as jest.Mock
        ).mockResolvedValue(null);
        await expect(
          service.initiatePayment(user as any, paymentDto),
        ).rejects.toThrow(BadRequestException);
      });

      it('should successfully initiate payment and create record', async () => {
        const lodgePrice = 200;
        const reference = 'ref123';

        (
          mockLodgesService.getLodgeLocationPrice as jest.Mock
        ).mockResolvedValue(lodgePrice);
        mockedAxios.post.mockResolvedValue({
          data: {
            data: { reference, authorization_url: 'http://paystack.com/pay' },
          },
        });
        (mockPaymentModelAction.create as jest.Mock).mockResolvedValue({});

        const result = await service.initiatePayment(user as any, paymentDto);
        expect(result.data.reference).toBe(reference);
        expect(mockPaymentModelAction.create).toHaveBeenCalled();
      });

      it('should throw and log error if API call fails', async () => {
        (
          mockLodgesService.getLodgeLocationPrice as jest.Mock
        ).mockResolvedValue(100);
        mockedAxios.post.mockRejectedValue(new Error('API error'));
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        await expect(
          service.initiatePayment(user as any, paymentDto),
        ).rejects.toThrow(HttpException);
        expect(consoleSpy).toHaveBeenCalled();

        consoleSpy.mockRestore();
      });
    });

    describe('updatePaymentRecord', () => {
      it('should update the payment record', async () => {
        (mockPaymentModelAction.update as jest.Mock).mockResolvedValue({});
        await expect(
          service.updatePaymentRecord('order1', 'ref123', true),
        ).resolves.not.toThrow();
      });

      it('should log error if update fails', async () => {
        (mockPaymentModelAction.update as jest.Mock).mockRejectedValue(
          new Error('DB error'),
        );
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        await service.updatePaymentRecord('order1', 'ref123', true);
        expect(consoleSpy).toHaveBeenCalled();

        consoleSpy.mockRestore();
      });
    });

    describe('computePaymentAmount', () => {
      it('should return correct amount in kobo', () => {
        const result = service.computePaymentAmount(200, 3);
        expect(result).toBe((200 * 3 + SERVICE_CHARGE) * 100);
      });
    });
  });
});
