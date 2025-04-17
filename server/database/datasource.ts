import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'graey',
  password: 'pyr@hornet0101',
  database: 'mmiri',
  // synchronize: true,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
});

export default dataSource;
