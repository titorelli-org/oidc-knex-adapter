import { OidcMigrationBase } from "./oidc-migration-base";

export class RepositoryBase {
  #tableName;
  #db;
  #logger;
  #ready;

  constructor(tableName, db, logger) {
    this.#tableName = tableName;
    this.#db = db;
    this.#logger = logger;
    this.#ready = this.run((knex) => this.migration().up(knex));
  }

  migration() {
    return new OidcMigrationBase(this.tableName);
  }

  get tableName() {
    return this.#tableName;
  }

  get logger() {
    return this.#logger;
  }

  async run(callback, selector?) {
    (await this.#ready) == null ? null : this.#ready;

    try {
      const result = await this.#db.run(callback);

      return selector ? selector(result) : result;
    } catch (e) {
      this.#logger.error(e);

      return undefined;
    }
  }
}
