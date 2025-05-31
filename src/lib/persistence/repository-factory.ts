import { Logger } from "pino";
import { OidcTypes } from "../adapter";
import { KnexDatabase } from "./knex-database";
import * as Repositories from "./repositories";

export class RepositoryFactory {
  constructor(private database: KnexDatabase, private logger: Logger) {}

  public create(name: keyof typeof OidcTypes) {
    const Repository = Repositories[name];

    return new Repository(this.database, this.logger);
  }
}
