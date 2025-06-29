"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLocationVendorDoc = exports.GetLocationLodgesDoc = exports.LocationsDoc = exports.LocationDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const location_dto_1 = require("../dto/location.dto");
const response_doc_1 = require("./response.doc");
const LocationDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Create new Location' }), (0, swagger_1.ApiBody)({ type: location_dto_1.LocationDto }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Location created successfully',
        type: response_doc_1.LocationSuccessDto,
    }), (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        type: response_doc_1.LocationUnauthorizedDto,
    }), (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Not Found',
        type: response_doc_1.LocationNotFoundDto,
    }));
};
exports.LocationDoc = LocationDoc;
const LocationsDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Get all locations' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'All locations',
        type: [response_doc_1.LocationSuccessDto],
    }), (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        type: response_doc_1.LocationUnauthorizedDto,
    }), (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Not Found',
        type: response_doc_1.LocationNotFoundDto,
    }));
};
exports.LocationsDoc = LocationsDoc;
const GetLocationLodgesDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Get lodges within a location' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiParam)({ name: 'id', required: true, description: 'Location ID' }), (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of location lodges',
        type: response_doc_1.GetLocationLodgesSuccessDto,
    }));
};
exports.GetLocationLodgesDoc = GetLocationLodgesDoc;
const GetLocationVendorDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Get location vendors' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiParam)({ name: 'id', required: true, description: 'Location ID' }), (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of location vendors',
        type: response_doc_1.GetLocationVendorSuccessDto,
    }));
};
exports.GetLocationVendorDoc = GetLocationVendorDoc;
//# sourceMappingURL=locations.doc.js.map