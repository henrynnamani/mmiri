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
exports.UsersController = void 0;
const order_service_1 = require("../order/order.service");
const common_1 = require("@nestjs/common");
const users_doc_1 = require("./docs/users.doc");
let UsersController = class UsersController {
    orderService;
    constructor(orderService) {
        this.orderService = orderService;
    }
    async getUserOrders(request) {
        const loggedInUserId = request.user.sub;
        return await this.orderService.getUserOrders(loggedInUserId);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)('/order'),
    (0, users_doc_1.UserOrdersDoc)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserOrders", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], UsersController);
//# sourceMappingURL=users.controller.js.map