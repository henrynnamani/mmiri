"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsController = void 0;
const common_1 = require("@nestjs/common");
const locations_service_1 = require("./locations.service");
const location_dto_1 = require("./dto/location.dto");
const locations_doc_1 = require("./doc/locations.doc");
let LocationsController = class LocationsController {
    locationsService;
    constructor(locationsService) {
        this.locationsService = locationsService;
    }
    createLocation(locationData) {
        return this.locationsService.createLocation(locationData);
    }
    getLocations() {
        return this.locationsService.getLocations();
    }
    getLocationLodges(id) {
        return this.locationsService.getLocationLodges(id);
    }
    getLocationVendors(id) {
        return this.locationsService.getLocationVendors(id);
    }
};
exports.LocationsController = LocationsController;
__decorate([
    (0, common_1.Post)(''),
    (0, locations_doc_1.LocationDoc)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [location_dto_1.LocationDto]),
    __metadata("design:returntype", void 0)
], LocationsController.prototype, "createLocation", null);
__decorate([
    (0, common_1.Get)('/'),
    (0, locations_doc_1.LocationsDoc)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LocationsController.prototype, "getLocations", null);
__decorate([
    (0, common_1.Get)(':id/lodges'),
    (0, locations_doc_1.GetLocationLodgesDoc)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocationsController.prototype, "getLocationLodges", null);
__decorate([
    (0, common_1.Get)(':id/vendors'),
    (0, locations_doc_1.GetLocationVendorDoc)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LocationsController.prototype, "getLocationVendors", null);
exports.LocationsController = LocationsController = __decorate([
    (0, common_1.Controller)('locations'),
    __metadata("design:paramtypes", [locations_service_1.LocationsService])
], LocationsController);
//# sourceMappingURL=locations.controller.js.map