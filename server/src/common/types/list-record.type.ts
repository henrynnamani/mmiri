export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
}

export interface ListRecordOption<recordOption> {
  queryOption?: recordOption;
  pagination: Pick<PaginationMeta, 'limit' | 'page'>;
  relations?: string[];
}
