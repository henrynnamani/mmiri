"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = exports.LoginDoc = exports.RegisterDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auths_dto_1 = require("../dto/auths.dto");
const response_docs_1 = require("./response.docs");
const RegisterDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'User registration' }), (0, swagger_1.ApiBody)({ type: auths_dto_1.RegisterDto }), (0, swagger_1.ApiResponse)({
        status: 201,
        type: response_docs_1.RegistrationSuccessResponseDto,
        description: 'User registered successfully',
    }), (0, swagger_1.ApiResponse)({
        status: 400,
        type: response_docs_1.BadRequestResponseDto,
        description: 'Bad request',
    }), (0, swagger_1.ApiResponse)({
        status: 404,
        type: response_docs_1.NotFoundResponseDto,
        description: 'Not found',
    }));
};
exports.RegisterDoc = RegisterDoc;
const LoginDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Login' }), (0, swagger_1.ApiBody)({ type: auths_dto_1.LoginDto }), (0, swagger_1.ApiResponse)({
        status: 200,
        type: response_docs_1.LoginSuccessResponseDto,
        description: 'User logged in successfully',
    }), (0, swagger_1.ApiResponse)({
        status: 400,
        type: response_docs_1.LoginBadRequestResponse,
        description: 'Bad request',
    }), (0, swagger_1.ApiResponse)({
        status: 404,
        type: response_docs_1.NotFoundResponseDto,
        description: 'Not found',
    }));
};
exports.LoginDoc = LoginDoc;
class Register {
    email;
    password;
    businessName;
    bankCode;
    accountNumber;
    role;
    phoneNumber;
}
exports.Register = Register;
//# sourceMappingURL=auth.docs.js.map