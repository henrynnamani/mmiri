import { LocationsService } from './locations.service';
import { LocationDto } from './dto/location.dto';
export declare class LocationsController {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
    createLocation(locationData: LocationDto): Promise<{
        data: import("./model/locations.model").Location[];
        message: string;
    }>;
    getLocations(): Promise<{
        payload: import("./model/locations.model").Location[];
        paginationMeta: Partial<import("../common/types/list-record.type").PaginationMeta>;
    }>;
    getLocationLodges(id: string): Promise<import("./model/locations.model").Location | null>;
    getLocationVendors(id: string): Promise<{
        data: import("./model/locations.model").Location | null;
    }>;
}
