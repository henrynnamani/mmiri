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
exports.AuthsService = void 0;
const common_1 = require("@nestjs/common");
const register_strategy_factory_1 = require("./strategy/register/register-strategy.factory");
const login_strategy_factory_1 = require("./strategy/login/login-strategy.factory");
const token_service_1 = require("../common/token.service");
let AuthsService = class AuthsService {
    tokenService;
    registerStrategyFactory;
    loginStrategyFactory;
    constructor(tokenService, registerStrategyFactory, loginStrategyFactory) {
        this.tokenService = tokenService;
        this.registerStrategyFactory = registerStrategyFactory;
        this.loginStrategyFactory = loginStrategyFactory;
    }
    async register(registerDto) {
        const strategy = this.registerStrategyFactory.getStrategy(registerDto.role);
        console.log(registerDto);
        try {
            const createdUser = await strategy.register(registerDto);
            const { access_token } = this.tokenService.generateToken(createdUser);
            return {
                data: {
                    user: createdUser,
                    access_token,
                },
            };
        }
        catch (err) {
            console.log(err);
        }
    }
    async login(loginDto) {
        const strategy = this.loginStrategyFactory.getStrategy(loginDto.role);
        const loggedInUser = await strategy.login(loginDto);
        const { access_token } = this.tokenService.generateToken(loggedInUser);
        return {
            data: {
                user: loggedInUser,
                access_token,
            },
        };
    }
};
exports.AuthsService = AuthsService;
exports.AuthsService = AuthsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [token_service_1.TokenService,
        register_strategy_factory_1.RegisterStrategyFactory,
        login_strategy_factory_1.LoginStrategyFactory])
], AuthsService);
//# sourceMappingURL=auths.service.js.map