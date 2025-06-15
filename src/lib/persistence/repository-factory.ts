import { Logger } from "pino";
import { OidcTypes } from "../adapter";
import { KnexDatabase } from "./knex-database";
import * as repositories from "./repositories";
import type { RepositoryBase } from "./repository-base";

export class RepositoryFactory {
  private readonly cache: Record<string, RepositoryBase> = {};

  constructor(private database: KnexDatabase, private logger: Logger) {}

  public create(name: keyof typeof OidcTypes) {
    if (this.cache[name]) return this.cache[name];

    const [Repository] = Object.entries(repositories)
      .filter(([className]) => className.startsWith(name))
      .map(([_, Ctor]) => Ctor);

    const repository = new Repository(this.database, this.logger);

    this.cache[name] = repository;

    return repository;
  }
}
