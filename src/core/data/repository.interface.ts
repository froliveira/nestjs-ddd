import { IAggregateRoot } from '../domainObjects/aggregate-root.interface';

export interface IRepository<T extends IAggregateRoot> {
  getAll: () => T[];
  getById: (id: string) => T;
  create: (item: T) => Promise<T>;
  update: (item: T) => Promise<T>;
}
