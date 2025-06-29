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
var HttpInterceptor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let HttpInterceptor = HttpInterceptor_1 = class HttpInterceptor {
    logger = new common_1.Logger(HttpInterceptor_1.name);
    blackListed = ['password'];
    constructor() { }
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.map)((data) => {
            console.log(data);
            const now = Date.now();
            const request = context.switchToHttp().getRequest();
            const isError = data instanceof Error && data !== null;
            const success = !isError;
            const message = data && data?.message ? data?.message : 'successful';
            delete data.message;
            const data_ = success && data?.data ? data?.data : data;
            this.logger.log(`${request?.method} ${request?.url} ${success ? 'SUCCESS' : 'ERROR'}`);
            const requestLatency = Date.now() - now;
            this.logger.log(`Request completed in ${requestLatency}ms`);
            return {
                success,
                data: this.stripBlackListedProperty(data_),
                message: message,
            };
        }));
    }
    stripBlackListedProperty(data) {
        if (typeof data !== 'object' || data === null)
            return data;
        const result = Array.isArray(data) ? [] : {};
        for (const key in data) {
            if (typeof data[key] === 'object' && !(data[key] instanceof Date)) {
                result[key] = this.stripBlackListedProperty(data[key]);
            }
            else if (!this.blackListed.includes(key)) {
                result[key] = data[key];
            }
        }
        return result;
    }
};
exports.HttpInterceptor = HttpInterceptor;
exports.HttpInterceptor = HttpInterceptor = HttpInterceptor_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], HttpInterceptor);
//# sourceMappingURL=http-response.interceptor.js.map