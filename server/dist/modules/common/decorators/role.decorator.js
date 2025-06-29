"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.ROLES = void 0;
const common_1 = require("@nestjs/common");
exports.ROLES = 'roles';
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES, roles);
exports.Roles = Roles;
//# sourceMappingURL=role.decorator.js.map