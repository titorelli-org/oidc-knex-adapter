import { Logger } from "pino";
import { OidcTypes } from "../adapter";
import { KnexDatabase } from "./knex-database";
import * as repositories from "./repositories";

export class RepositoryFactory {
  constructor(private database: KnexDatabase, private logger: Logger) {}

  public create(name: keyof typeof OidcTypes) {
    const [Repository] = Object.entries(repositories)
      .filter(([className]) => className.startsWith(name))
      .map(([_, Ctor]) => Ctor);

    return new Repository(this.database, this.logger);
  }
}
