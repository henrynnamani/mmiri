"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthsModule = void 0;
const common_1 = require("@nestjs/common");
const auths_service_1 = require("./auths.service");
const auths_controller_1 = require("./auths.controller");
const register_strategy_factory_1 = require("./strategy/register/register-strategy.factory");
const user_registry_strategy_1 = require("./strategy/register/user-registry.strategy");
const vendor_registry_strategy_1 = require("./strategy/register/vendor-registry.strategy");
const login_strategy_factory_1 = require("./strategy/login/login-strategy.factory");
const user_login_strategy_1 = require("./strategy/login/user-login.strategy");
const token_service_1 = require("../common/token.service");
const vendors_module_1 = require("../vendors/vendors.module");
const users_module_1 = require("../users/users.module");
let AuthsModule = class AuthsModule {
};
exports.AuthsModule = AuthsModule;
exports.AuthsModule = AuthsModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, vendors_module_1.VendorsModule],
        controllers: [auths_controller_1.AuthsController],
        providers: [
            auths_service_1.AuthsService,
            register_strategy_factory_1.RegisterStrategyFactory,
            user_registry_strategy_1.UserRegistryStrategy,
            vendor_registry_strategy_1.VendorRegistryStrategy,
            login_strategy_factory_1.LoginStrategyFactory,
            user_login_strategy_1.UserLoginStrategy,
            token_service_1.TokenService,
        ],
    })
], AuthsModule);
//# sourceMappingURL=auths.module.js.map