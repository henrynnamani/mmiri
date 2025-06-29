import { InitializePaymentDto } from './dto/initializePayment.dto';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '@modules/users/users.service';
import { LocationsService } from '@modules/locations/locations.service';
import { VendorsService } from '@modules/vendors/vendors.service';
import { User } from '@modules/users/model/users.model';
import { PaymentDto } from './dto/payment.dto';
import { PaymentModelAction } from './model/payment.model-action';
import { LodgesService } from '@modules/lodges/lodges.service';
import { OrderService } from '@modules/order/order.service';
export declare class PaymentService {
    private readonly config;
    private readonly locationService;
    private readonly usersService;
    private readonly vendorService;
    private paymentModelAction;
    private readonly lodgesServie;
    private readonly orderService;
    paystackBaseUrl: string | undefined;
    paystackSecretKey: string | undefined;
    constructor(config: ConfigService, locationService: LocationsService, usersService: UsersService, vendorService: VendorsService, paymentModelAction: PaymentModelAction, lodgesServie: LodgesService, orderService: OrderService);
    createPaymentRecord(paymentDto: PaymentDto): Promise<import("./model/payment.model").Payment>;
    initiatePayment(loggedInUser: User, paymentDto: InitializePaymentDto): Promise<any>;
    updatePaymentRecord(orderId: string, reference: string, status: boolean): Promise<void>;
    computePaymentAmount(lodgeCharge: number, noOfGallons: number): number;
}
