import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InitializePaymentDto } from './dto/initializePayment.dto';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { UsersService } from '@modules/users/users.service';
import { SERVICE_CHARGE } from '@modules/common/constants';
import { LocationsService } from '@modules/locations/locations.service';
import { VendorsService } from '@modules/vendors/vendors.service';
import { User } from '@modules/users/model/users.model';
import { PaymentDto } from './dto/payment.dto';
import { PaymentModelAction } from './model/payment.model-action';
import * as SYS_MSG from '@modules/common/system-message';
import { LodgesService } from '@modules/lodges/lodges.service';

@Injectable()
export class PaymentService {
  paystackBaseUrl: string | undefined;
  paystackSecretKey: string | undefined;

  constructor(
    private readonly config: ConfigService,
    private readonly locationService: LocationsService,
    private readonly usersService: UsersService,
    private readonly vendorService: VendorsService,
    private paymentModelAction: PaymentModelAction,
    private readonly lodgesServie: LodgesService,
  ) {
    this.paystackBaseUrl = this.config.get<string>('paystack.baseUrl');
    this.paystackSecretKey = this.config.get<string>('paystack.secretKey');
  }

  async createPaymentRecord(paymentDto: PaymentDto) {
    const response = await this.paymentModelAction.create({
      createPayload: paymentDto,
      transactionOptions: {
        useTransaction: false,
      },
    });

    if (!response) {
      throw new BadRequestException(SYS_MSG.PAYMENT_RECORD_CREATION_FAILED);
    }

    return response;
  }

  async initiatePayment(loggedInUser: User, paymentDto: InitializePaymentDto) {
    try {
      // const vendor = await this.vendorService.getVendorById(
      //   paymentDto.vendorId,
      // );

      // if (!vendor) {
      //   throw new NotFoundException(SYS_MSG.VENDOR_NOT_FOUND);
      // }

      const locationAmount = await this.lodgesServie.getLodgeLocationPrice(
        paymentDto.lodgeId,
      );

      if (!locationAmount) {
        throw new BadRequestException(SYS_MSG.LOCATION_AMOUNT_NOT_SET);
      }

      const amount = this.computePaymentAmount(
        locationAmount,
        paymentDto.noOfGallons,
      );

      const paymentPayload = {
        email: loggedInUser.email,
        amount,
        // subaccount: vendor.subaccount,
        transaction_charge: SERVICE_CHARGE * 100,
        metadata: {
          orderId: paymentDto.orderId,
        },
      };

      const response = await axios.post(
        `${this.paystackBaseUrl}/transaction/initialize`,
        paymentPayload,
        {
          headers: {
            Authorization: `Bearer ${this.paystackSecretKey}`,
            'Content-Type': 'application/json',
          },
        },
      );

      // create payment record
      await this.createPaymentRecord({
        orderId: paymentDto.orderId,
        amount: amount / 100,
        status: false,
        reference: response.data.data.reference,
      });

      return response.data;
    } catch (err) {
      throw new HttpException(
        SYS_MSG.ERROR_INITIATING_PAYMENT_TRANSACTION,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async updatePaymentRecord(
    orderId: string,
    reference: string,
    status: boolean,
  ) {
    try {
      await this.paymentModelAction.update({
        identifierOptions: {
          orderId,
          reference,
        },
        updatePayload: {
          status,
        },
        transactionOption: {
          useTransaction: false,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  computePaymentAmount(lodgeCharge: number, noOfGallons: number) {
    return (lodgeCharge * noOfGallons + SERVICE_CHARGE) * 100;
  }
}

// it is well
