import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5437,
  username: 'graey',
  password: 'pyr@hornet0101',
  database: 'mmiri',
  entities: ['dist/modules/**/*.model.{ts,js}'],
  migrations: ['dist/database/migrations/*.{ts,js}'],
});
