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
exports.LoginStrategyFactory = void 0;
const common_1 = require("@nestjs/common");
const user_login_strategy_1 = require("./user-login.strategy");
let LoginStrategyFactory = class LoginStrategyFactory {
    userLoginStrategy;
    strategies = [];
    constructor(userLoginStrategy) {
        this.userLoginStrategy = userLoginStrategy;
        this.strategies.push(this.userLoginStrategy);
    }
    getStrategy(role) {
        const strategy = this.strategies.find((s) => s.supports(role));
        if (!strategy) {
            throw new Error(`No strategy found for role: ${role}`);
        }
        return strategy;
    }
};
exports.LoginStrategyFactory = LoginStrategyFactory;
exports.LoginStrategyFactory = LoginStrategyFactory = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_login_strategy_1.UserLoginStrategy])
], LoginStrategyFactory);
//# sourceMappingURL=login-strategy.factory.js.map