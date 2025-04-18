import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5435,
  username: 'graey',
  password: 'pyr@hornet0101',
  database: 'mmiri',
  // synchronize: true,
  entities: ['dist/src/**/*.model.{ts,js}'],
  migrations: ['dist/database/migrations/*.{ts,js}'],
});
