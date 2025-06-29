"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLodgeVendorsDoc = exports.CreateLodgeDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const lodges_dto_1 = require("../dto/lodges.dto");
const response_doc_1 = require("./response.doc");
const CreateLodgeDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Create lodge' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiBody)({ type: lodges_dto_1.LodgeDto }), (0, swagger_1.ApiResponse)({
        status: 201,
        type: response_doc_1.CreateLodgeSuccessDto,
        description: 'Lodge created successfully',
    }), (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Location not found',
        type: response_doc_1.LodgeNotFoundDto,
    }));
};
exports.CreateLodgeDoc = CreateLodgeDoc;
const GetLodgeVendorsDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Get lodge vendors' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiParam)({ name: 'id', description: 'Lodge ID', required: true }), (0, swagger_1.ApiQuery)({ name: 'page', description: 'Page number', required: true }), (0, swagger_1.ApiQuery)({
        name: 'limit',
        description: 'Number of items per page',
        required: true,
    }), (0, swagger_1.ApiResponse)({
        status: 201,
        type: response_doc_1.GetLodgeVendorsDto,
        description: 'List of lodge vendors',
    }), (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Location not found',
        type: response_doc_1.LodgeNotFoundDto,
    }), (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'User not authorized',
        type: response_doc_1.LodgeUnauthorizedDto,
    }));
};
exports.GetLodgeVendorsDoc = GetLodgeVendorsDoc;
//# sourceMappingURL=lodges.doc.js.map