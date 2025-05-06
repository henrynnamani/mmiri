// import { FindOptionsWhere } from 'typeorm';

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
}

export interface ListRecordOption<recordOption> {
  // listIdentifierOption?: FindOptionsWhere<recordOption>;
  queryOption?: recordOption;
  pagination: Pick<PaginationMeta, 'limit' | 'page'>;
  relations?: string[];
}
