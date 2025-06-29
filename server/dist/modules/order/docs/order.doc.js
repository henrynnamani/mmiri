"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompleteOrderDoc = exports.GetVendorByLodgeAndLocationDoc = exports.PlaceOrderDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const order_dto_1 = require("../dto/order.dto");
const PlaceOrderDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Place order' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiBody)({
        type: order_dto_1.OrderDto,
    }));
};
exports.PlaceOrderDoc = PlaceOrderDoc;
const GetVendorByLodgeAndLocationDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Get vendor by lodge' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiParam)({
        name: 'lodgeId',
        required: true,
    }), (0, swagger_1.ApiParam)({
        name: 'locationId',
        required: true,
    }));
};
exports.GetVendorByLodgeAndLocationDoc = GetVendorByLodgeAndLocationDoc;
const CompleteOrderDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Complete order' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiParam)({
        name: 'orderId',
        required: true,
    }));
};
exports.CompleteOrderDoc = CompleteOrderDoc;
//# sourceMappingURL=order.doc.js.map