"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLodgePriceDoc = exports.CreateLodgePriceDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const lodge_price_dto_1 = require("../dto/lodge_price.dto");
const response_doc_1 = require("./response.doc");
const response_doc_2 = require("../../lodges/docs/response.doc");
const CreateLodgePriceDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Create Lodge Price' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiBody)({ type: lodge_price_dto_1.LodgePriceDto }), (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Create lodge price',
        type: response_doc_1.CreateLodgePriceSuccessResponse,
    }), (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Lodge not found',
        type: response_doc_2.LodgeNotFoundDto,
    }));
};
exports.CreateLodgePriceDoc = CreateLodgePriceDoc;
const UpdateLodgePriceDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Update Lodge Price' }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'lodge price record Id',
        required: true,
    }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiBody)({ type: lodge_price_dto_1.UpdateChargeDto }), (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Update lodge price',
        type: response_doc_1.UpdateLodgePriceSuccessResponse,
    }), (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Lodge price record not found',
        type: response_doc_1.LodgePriceNotFoundDto,
    }));
};
exports.UpdateLodgePriceDoc = UpdateLodgePriceDoc;
//# sourceMappingURL=lodge_price.doc.js.map