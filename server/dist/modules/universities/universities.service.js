"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversitiesService = void 0;
const common_1 = require("@nestjs/common");
const universities_model_action_1 = require("./model/universities.model-action");
const SYS_MSG = __importStar(require("../common/system-message"));
let UniversitiesService = class UniversitiesService {
    universityModelAction;
    constructor(universityModelAction) {
        this.universityModelAction = universityModelAction;
    }
    async createUniversity(universityDto) {
        const alreadyExist = await this.findUniversityByName(universityDto.name);
        if (alreadyExist) {
            throw new common_1.BadRequestException(SYS_MSG.UNIVERSITY_ALREADY_EXIST);
        }
        const createdUniversity = await this.universityModelAction.create({
            createPayload: universityDto,
            transactionOptions: {
                useTransaction: false,
            },
        });
        if (!createdUniversity) {
            throw new common_1.BadRequestException(SYS_MSG.UNIVERSITY_CREATION_FAILED);
        }
        return { data: createdUniversity, message: SYS_MSG.UNIVERSITY_CREATED };
    }
    findUniversityByName(name) {
        return this.universityModelAction.get({
            getRecordIdentifierOption: { name },
        });
    }
    findUniversityById(id) {
        return this.universityModelAction.get({
            getRecordIdentifierOption: { id },
        });
    }
};
exports.UniversitiesService = UniversitiesService;
exports.UniversitiesService = UniversitiesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [universities_model_action_1.UniversityModelAction])
], UniversitiesService);
//# sourceMappingURL=universities.service.js.map