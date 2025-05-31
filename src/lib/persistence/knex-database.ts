import createKnex from "knex";

export class KnexDatabase {
  knex;
  ready;

  constructor({ dbFilename, logger }) {
    this.knex = createKnex({
      client: "sqlite3",
      connection: {
        filename: dbFilename,
      },
      useNullAsDefault: true,
      log: {
        warn: logger.warn.bind(logger),
        error: logger.error.bind(logger),
        debug: logger.debug.bind(logger),
      },
    });
  }

  async run(callback) {
    return callback(this.knex);
  }
}
