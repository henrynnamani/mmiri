import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5437,
  username: 'graey',
  password: 'pyr@hornet0101',
  database: 'new-app',
  entities: ['dist/modules/**/*.model.{ts,js}'],
  migrations: ['dist/database/migrations/*.{ts,js}'],
});
