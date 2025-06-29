import { LocationDto } from './dto/location.dto';
import { UniversitiesService } from '@modules/universities/universities.service';
import { LocationModelAction } from './model/locations.model-action';
export declare class LocationsService {
    private locationModelAction;
    private universitiesService;
    constructor(locationModelAction: LocationModelAction, universitiesService: UniversitiesService);
    createLocation(locationDto: LocationDto): Promise<{
        data: import("./model/locations.model").Location[];
        message: string;
    }>;
    getLocationPrice(id: string): Promise<number | undefined>;
    getLocations(): Promise<{
        payload: import("./model/locations.model").Location[];
        paginationMeta: Partial<import("../common/types/list-record.type").PaginationMeta>;
    }>;
    findLocationById(id: string): Promise<import("./model/locations.model").Location | null>;
    getLocationLodges(id: string): Promise<import("./model/locations.model").Location | null>;
    getLocationVendors(id: string): Promise<{
        data: import("./model/locations.model").Location | null;
    }>;
}
