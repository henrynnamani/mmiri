"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skipAuth = exports.IsPublic = void 0;
const common_1 = require("@nestjs/common");
exports.IsPublic = 'IS_PUBLIC';
const skipAuth = () => (0, common_1.SetMetadata)(exports.IsPublic, true);
exports.skipAuth = skipAuth;
//# sourceMappingURL=is-public.decorator.js.map