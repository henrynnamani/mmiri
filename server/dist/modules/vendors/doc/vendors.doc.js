"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddVendorServingLocations = exports.ChangeAvailabilityStatusDoc = exports.GetAllVendorsDoc = exports.getVendorOrdersDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const response_doc_1 = require("./response.doc");
const getVendorOrdersDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Get vendor orders' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiResponse)({ status: 200, type: response_doc_1.VendorOrdersSuccessResponseDto }), (0, swagger_1.ApiResponse)({ status: 400, type: response_doc_1.VendorBadRequestResponseDto }));
};
exports.getVendorOrdersDoc = getVendorOrdersDoc;
const GetAllVendorsDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiOperation)({ summary: 'Get all vendors' }), (0, swagger_1.ApiResponse)({ status: 200, type: response_doc_1.GetAllVendorSuccessDto }));
};
exports.GetAllVendorsDoc = GetAllVendorsDoc;
const ChangeAvailabilityStatusDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Vendor ID' }), (0, swagger_1.ApiOperation)({ summary: 'Change availability status' }), (0, swagger_1.ApiResponse)({ status: 200, type: response_doc_1.ChangeAvailabilityStatusSuccessDto }), (0, swagger_1.ApiResponse)({ status: 404, type: response_doc_1.VendorNotFoundResponseDto }));
};
exports.ChangeAvailabilityStatusDoc = ChangeAvailabilityStatusDoc;
const AddVendorServingLocations = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Vendor ID' }), (0, swagger_1.ApiParam)({ name: 'locationId', type: String, description: 'Location ID' }), (0, swagger_1.ApiOperation)({ summary: 'Add Vendor Serving Locations' }), (0, swagger_1.ApiResponse)({ status: 200, type: response_doc_1.AddVendorServingLocationDto }), (0, swagger_1.ApiResponse)({ status: 404, type: response_doc_1.VendorNotFoundResponseDto }), (0, swagger_1.ApiResponse)({ status: 500, type: response_doc_1.VendorInternalServerResponseDto }));
};
exports.AddVendorServingLocations = AddVendorServingLocations;
//# sourceMappingURL=vendors.doc.js.map