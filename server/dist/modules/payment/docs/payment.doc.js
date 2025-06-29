"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitiatePaymentDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const initializePayment_dto_1 = require("../dto/initializePayment.dto");
const response_doc_1 = require("./response.doc");
const InitiatePaymentDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Initiate payment' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiBody)({
        type: initializePayment_dto_1.InitializePaymentDto,
    }), (0, swagger_1.ApiResponse)({
        status: 200,
        type: response_doc_1.InitiatePaymentSuccessDto,
    }), (0, swagger_1.ApiResponse)({
        status: 400,
        type: response_doc_1.InitiatePaymentFailureDto,
    }));
};
exports.InitiatePaymentDoc = InitiatePaymentDoc;
//# sourceMappingURL=payment.doc.js.map