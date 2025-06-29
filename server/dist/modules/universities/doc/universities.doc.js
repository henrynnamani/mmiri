"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversitiesDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const universities_dto_1 = require("../dto/universities.dto");
const response_doc_1 = require("./response.doc");
const UniversitiesDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Create University ' }), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiBody)({ type: universities_dto_1.UniversityDto }), (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'University created successfully',
        type: response_doc_1.UniversitiesSuccesssDto,
    }), (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'University already exists',
        type: response_doc_1.UniversitiesBadRequestDto,
    }));
};
exports.UniversitiesDoc = UniversitiesDoc;
//# sourceMappingURL=universities.doc.js.map