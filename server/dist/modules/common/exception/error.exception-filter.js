"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFiler = void 0;
const common_1 = require("@nestjs/common");
let HttpExceptionFiler = class HttpExceptionFiler {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        const exceptionResponse = exception.getResponse?.();
        let message = 'Something went wrong';
        if (typeof exceptionResponse === 'string') {
            message = exceptionResponse;
        }
        else if (exceptionResponse &&
            typeof exceptionResponse === 'object' &&
            'message' in exceptionResponse) {
            const responseMessage = exceptionResponse.message;
            message = Array.isArray(responseMessage)
                ? responseMessage.join(', ')
                : responseMessage;
        }
        else if (exception?.message) {
            message = exception.message;
        }
        response.status(status).json({
            success: false,
            data: null,
            message,
        });
    }
};
exports.HttpExceptionFiler = HttpExceptionFiler;
exports.HttpExceptionFiler = HttpExceptionFiler = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionFiler);
//# sourceMappingURL=error.exception-filter.js.map