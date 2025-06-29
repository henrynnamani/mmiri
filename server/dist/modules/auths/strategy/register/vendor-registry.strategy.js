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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorRegistryStrategy = void 0;
const common_1 = require("@nestjs/common");
const vendors_service_1 = require("../../../vendors/vendors.service");
let VendorRegistryStrategy = class VendorRegistryStrategy {
    vendorService;
    constructor(vendorService) {
        this.vendorService = vendorService;
    }
    supports(role) {
        return role === 'vendor';
    }
    register(registerDto) {
        return this.vendorService.registerVendor(registerDto);
    }
};
exports.VendorRegistryStrategy = VendorRegistryStrategy;
exports.VendorRegistryStrategy = VendorRegistryStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [vendors_service_1.VendorsService])
], VendorRegistryStrategy);
//# sourceMappingURL=vendor-registry.strategy.js.map