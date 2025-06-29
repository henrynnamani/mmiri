"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
exports.dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5437,
    username: 'graey',
    password: 'pyr@hornet0101',
    database: 'new-app',
    entities: ['dist/modules/**/*.model.{ts,js}'],
    migrations: ['dist/database/migrations/*.{ts,js}'],
});
//# sourceMappingURL=datasource.js.map