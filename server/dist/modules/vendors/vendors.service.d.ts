import { Vendor } from './model/vendors.model';
import { VendorModelAction } from './model/vendors.model-action';
import { ConfigService } from '@nestjs/config';
import { VendorRegisterDto } from './dto/vendor.dto';
export declare class VendorsService {
    private vendorModelAction;
    private config;
    constructor(vendorModelAction: VendorModelAction, config: ConfigService);
    registerVendor(registerDto: VendorRegisterDto): Promise<Vendor>;
    getVendorByEmail(email: string): Promise<Vendor | null>;
    getVendorByChatId(chatId: number): Promise<Vendor | null>;
    getAllVendors(): Promise<{
        payload: Vendor[];
        paginationMeta: Partial<import("../common/types/list-record.type").PaginationMeta>;
    }>;
    changeAvailabilityStatus(chatId: number): Promise<{
        data: Vendor | null;
        message: string;
    }>;
    createSubaccount(businessName: string, bankCode: string, accountNumber: string): Promise<import("axios").AxiosResponse<any, any>>;
}
