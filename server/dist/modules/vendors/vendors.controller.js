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
exports.VendorsController = void 0;
const common_1 = require("@nestjs/common");
const vendors_service_1 = require("./vendors.service");
const vendors_doc_1 = require("./doc/vendors.doc");
const enums_1 = require("../common/enums");
const role_decorator_1 = require("../common/decorators/role.decorator");
const order_service_1 = require("../order/order.service");
let VendorsController = class VendorsController {
    vendorsService;
    orderService;
    constructor(vendorsService, orderService) {
        this.vendorsService = vendorsService;
        this.orderService = orderService;
    }
    getAllVendors() {
        return this.vendorsService.getAllVendors();
    }
    async getVendorOrders(id, page, limit) {
        return await this.orderService.getVendorOrders(id, { page, limit });
    }
};
exports.VendorsController = VendorsController;
__decorate([
    (0, common_1.Get)(''),
    (0, vendors_doc_1.GetAllVendorsDoc)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VendorsController.prototype, "getAllVendors", null);
__decorate([
    (0, common_1.Get)(':id/orders'),
    (0, vendors_doc_1.getVendorOrdersDoc)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], VendorsController.prototype, "getVendorOrders", null);
exports.VendorsController = VendorsController = __decorate([
    (0, role_decorator_1.Roles)(enums_1.Role.VENDOR),
    (0, common_1.Controller)('vendors'),
    __metadata("design:paramtypes", [vendors_service_1.VendorsService,
        order_service_1.OrderService])
], VendorsController);
//# sourceMappingURL=vendors.controller.js.map