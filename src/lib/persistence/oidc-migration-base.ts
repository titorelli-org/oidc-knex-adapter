export class OidcMigrationBase {
  #tableName;

  constructor(tableName) {
    this.#tableName = tableName;
  }

  up = async (knex) => {
    const hasTable = await knex.schema.hasTable(this.#tableName);

    if (hasTable) return;

    await knex.schema.createTable(this.#tableName, (table) => {
      table.string("id").primary();
      table.integer("type");
      table.json("payload");
      table.string("grantId");
      table.string("userCode");
      table.string("uid");
      table.dateTime("expiresAt");
      table.dateTime("consumedAt");

      table.index("type");
      table.index("grantId");
      table.index("userCode");
      table.index("uid");
    });
  };

  down = async (knex) => {
    await knex.schema.dropTable(this.#tableName);
  };
}
