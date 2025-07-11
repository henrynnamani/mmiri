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
exports.AuthsController = void 0;
const common_1 = require("@nestjs/common");
const auths_service_1 = require("./auths.service");
const auths_dto_1 = require("./dto/auths.dto");
const auth_docs_1 = require("./docs/auth.docs");
const is_public_decorator_1 = require("../common/decorators/is-public.decorator");
let AuthsController = class AuthsController {
    authsService;
    constructor(authsService) {
        this.authsService = authsService;
    }
    register(registerDto) {
        return this.authsService.register(registerDto);
    }
    login(loginDto) {
        return this.authsService.login(loginDto);
    }
};
exports.AuthsController = AuthsController;
__decorate([
    (0, is_public_decorator_1.skipAuth)(),
    (0, common_1.Post)('signup'),
    (0, auth_docs_1.RegisterDoc)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auths_dto_1.RegisterDto]),
    __metadata("design:returntype", void 0)
], AuthsController.prototype, "register", null);
__decorate([
    (0, is_public_decorator_1.skipAuth)(),
    (0, common_1.Post)('signin'),
    (0, auth_docs_1.LoginDoc)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auths_dto_1.LoginDto]),
    __metadata("design:returntype", void 0)
], AuthsController.prototype, "login", null);
exports.AuthsController = AuthsController = __decorate([
    (0, common_1.Controller)('auths'),
    __metadata("design:paramtypes", [auths_service_1.AuthsService])
], AuthsController);
//# sourceMappingURL=auths.controller.js.map