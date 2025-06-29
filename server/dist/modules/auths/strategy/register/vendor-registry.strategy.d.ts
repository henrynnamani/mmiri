import { RegisterStrategy } from './register-interface.strategy';
import { RegisterDto } from '../../dto/auths.dto';
import { VendorsService } from '@modules/vendors/vendors.service';
import { Vendor } from '@modules/vendors/model/vendors.model';
export declare class VendorRegistryStrategy implements RegisterStrategy {
    private readonly vendorService;
    constructor(vendorService: VendorsService);
    supports(role: string): boolean;
    register(registerDto: RegisterDto): Promise<Vendor>;
}
