import { LocationsService } from '@modules/locations/locations.service';
import { VendorLocationsService } from '@modules/vendor_locations/vendor_locations.service';
import { VendorsService } from '@modules/vendors/vendors.service';
import { ConfigService } from '@nestjs/config';
import { LodgePriceService } from '@modules/lodge_price/lodge_price.service';
import { Order } from '@modules/order/model/order.model';
import { OrderService } from '@modules/order/order.service';
import { Lodge } from '@modules/lodges/model/lodges.model';
export declare class TelegramService {
    private config;
    private vendorService;
    private locationsService;
    private vendorLocationService;
    private lodgePriceService;
    private orderService;
    private bot;
    private sessions;
    constructor(config: ConfigService, vendorService: VendorsService, locationsService: LocationsService, vendorLocationService: VendorLocationsService, lodgePriceService: LodgePriceService, orderService: OrderService);
    onModuleInit(): void;
    toggleLocationFlow(lodgeId: string, session: any, chatId: number, callbackQuery: any): Promise<void>;
    doneSelectingLodgeFlow(session: any, chatId: number): Promise<void>;
    selectLocationFlow(locationId: string, chatId: number, session: any): Promise<void>;
    bankConfirmationFlow(chatId: number, session: any): Promise<void>;
    handleWebhookUpdate(body: any): Promise<void>;
    notifyVendorOfOrder(chatId: number, order: Order, lodge: Lodge): Promise<void>;
}
