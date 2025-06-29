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
exports.LodgesService = void 0;
const common_1 = require("@nestjs/common");
const locations_service_1 = require("../locations/locations.service");
const lodges_mode_action_1 = require("./model/lodges.mode-action");
const lodge_price_model_action_1 = require("../lodge_price/model/lodge_price.model-action");
const SYS_MSG = __importStar(require("../common/system-message"));
const datasource_1 = require("../../database/datasource");
let LodgesService = class LodgesService {
    locationService;
    lodgeModelAction;
    lodgePriceModelAction;
    constructor(locationService, lodgeModelAction, lodgePriceModelAction) {
        this.locationService = locationService;
        this.lodgeModelAction = lodgeModelAction;
        this.lodgePriceModelAction = lodgePriceModelAction;
    }
    async createLodge(lodgeDto) {
        const location = await this.locationService.findLocationById(lodgeDto.locationId);
        if (!location) {
            throw new common_1.NotFoundException(SYS_MSG.LOCATION_NOT_FOUND);
        }
        const lodges = await datasource_1.dataSource.transaction(async (manager) => {
            const lodgePromises = lodgeDto.lodges.map((lodge) => this.lodgeModelAction.create({
                createPayload: {
                    name: lodge,
                    location: location,
                },
                transactionOptions: {
                    useTransaction: true,
                    transaction: manager,
                },
            }));
            return await Promise.all(lodgePromises);
        });
        return {
            data: lodges,
            message: SYS_MSG.LODGE_CREATED_SUCCESSFULLY,
        };
    }
    async getLodgeById(id) {
        return await this.lodgeModelAction.get({
            getRecordIdentifierOption: { id },
            relations: ['location'],
        });
    }
    async getLodgeLocationPrice(id) {
        const response = await this.lodgeModelAction.get({
            getRecordIdentifierOption: {
                id,
            },
            relations: ['location'],
        });
        if (!response)
            throw new common_1.BadRequestException(SYS_MSG.LODGE_NOT_FOUND);
        const price = await this.locationService.getLocationPrice(response?.location.id);
        return price;
    }
    async getLodgeVendors(id, page, limit) {
        const lodgeExist = await this.getLodgeById(id);
        if (!lodgeExist) {
            throw new common_1.NotFoundException(SYS_MSG.LODGE_NOT_FOUND);
        }
        const response = await this.lodgePriceModelAction.list({
            queryOption: { lodgeId: id },
            relations: ['vendor'],
            pagination: {
                page,
                limit,
            },
        });
        return {
            data: response,
        };
    }
};
exports.LodgesService = LodgesService;
exports.LodgesService = LodgesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [locations_service_1.LocationsService,
        lodges_mode_action_1.LodgeModelAction,
        lodge_price_model_action_1.LodgePriceModelAction])
], LodgesService);
//# sourceMappingURL=lodges.service.js.map