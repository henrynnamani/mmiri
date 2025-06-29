"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsService = void 0;
const common_1 = require("@nestjs/common");
const datasource_1 = require("../../database/datasource");
const universities_service_1 = require("../universities/universities.service");
const SYS_MSG = __importStar(require("../common/system-message"));
const locations_model_action_1 = require("./model/locations.model-action");
let LocationsService = class LocationsService {
    locationModelAction;
    universitiesService;
    constructor(locationModelAction, universitiesService) {
        this.locationModelAction = locationModelAction;
        this.universitiesService = universitiesService;
    }
    async createLocation(locationDto) {
        const university = await this.universitiesService.findUniversityById(locationDto.universityId);
        if (!university) {
            throw new common_1.NotFoundException('University not found');
        }
        const locations = await datasource_1.dataSource.transaction(async (manager) => {
            const locationPromises = locationDto.locations.map((location) => this.locationModelAction.create({
                createPayload: {
                    name: location.name,
                    university: university,
                    price: location.price
                },
                transactionOptions: {
                    useTransaction: true,
                    transaction: manager,
                },
            }));
            return await Promise.all(locationPromises);
        });
        return {
            data: locations,
            message: 'Locations created successfully',
        };
    }
    async getLocationPrice(id) {
        const location = await this.locationModelAction.get({
            getRecordIdentifierOption: { id }
        });
        if (!location)
            return;
        return location.price;
    }
    async getLocations() {
        return this.locationModelAction.list({
            pagination: {
                limit: 5,
                page: 1,
            },
            relations: ['lodges'],
        });
    }
    async findLocationById(id) {
        return this.locationModelAction.get({
            getRecordIdentifierOption: { id },
        });
    }
    async getLocationLodges(id) {
        return this.locationModelAction.get({
            getRecordIdentifierOption: { id },
            relations: ['lodges'],
        });
    }
    async getLocationVendors(id) {
        const locationExists = await this.findLocationById(id);
        if (!locationExists) {
            throw new common_1.NotFoundException(SYS_MSG.LOCATION_NOT_FOUND);
        }
        const response = await this.locationModelAction.get({
            getRecordIdentifierOption: { id },
            relations: ['vendors', 'vendors.vendor'],
        });
        return {
            data: response,
        };
    }
};
exports.LocationsService = LocationsService;
exports.LocationsService = LocationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [locations_model_action_1.LocationModelAction,
        universities_service_1.UniversitiesService])
], LocationsService);
//# sourceMappingURL=locations.service.js.map