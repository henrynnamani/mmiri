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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_model_action_1 = require("./model/users.model-action");
const SYS_MSG = __importStar(require("../common/system-message"));
const auth_1 = require("../common/utils/auth");
let UsersService = class UsersService {
    usersModelAction;
    constructor(usersModelAction) {
        this.usersModelAction = usersModelAction;
    }
    async registerUser(createUserDto) {
        const userExist = await this.getUserByEmail(createUserDto.email);
        if (userExist) {
            throw new common_1.BadRequestException(SYS_MSG.USER_ALREADY_EXIST);
        }
        const hashedPassword = await (0, auth_1.hashPassword)(createUserDto.password);
        const payload = {
            ...createUserDto,
            password: hashedPassword,
        };
        await this.usersModelAction.create({
            createPayload: payload,
            transactionOptions: {
                useTransaction: false,
            },
        });
        const createdUser = await this.getUserByEmail(createUserDto.email);
        if (!createdUser) {
            throw new common_1.InternalServerErrorException(SYS_MSG.USER_NOT_CREATED);
        }
        return createdUser;
    }
    async verifyUser(loginDto) {
        const userExist = await this.getUserByEmail(loginDto.email);
        if (!userExist) {
            throw new common_1.BadRequestException(SYS_MSG.USER_NOT_FOUND);
        }
        const isPasswordValid = await (0, auth_1.verifyPassword)(loginDto.password, userExist.password);
        if (!isPasswordValid) {
            throw new common_1.BadRequestException(SYS_MSG.INVALID_CREDENTIALS);
        }
        return userExist;
    }
    getUserById(id) {
        return this.usersModelAction.get({
            getRecordIdentifierOption: { id },
            relations: ['lodge'],
        });
    }
    getUserByEmail(email) {
        return this.usersModelAction.get({
            getRecordIdentifierOption: { email },
        });
    }
    getUserLocation(id) { }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_model_action_1.UsersModelAction])
], UsersService);
//# sourceMappingURL=users.service.js.map