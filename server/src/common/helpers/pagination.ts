import { PaginationMeta } from '../types/list-record.type';

export const computePaginationMeta = (
  total: number,
  limit: number,
  page: number,
): PaginationMeta => {
  const totalPages = Math.ceil(total / limit);
  const hasNext = page < totalPages;
  const hasPrevious = page > 1;

  return {
    total,
    limit,
    page,
    totalPages,
    hasNext,
    hasPrevious,
  };
};
