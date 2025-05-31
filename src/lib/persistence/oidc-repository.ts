import { snakeCase } from "change-case";
import { RepositoryBase } from "./repository-base";

export class OidcRepository extends RepositoryBase {
  #type;

  constructor(name, type, db, logger) {
    const tableName = snakeCase(name);

    super(tableName, db, logger);

    this.#type = type;
  }

  get type() {
    return this.#type;
  }

  async upsert(id, payload, expiresIn) {
    const expiresAt = this.getExpireAt(expiresIn);

    await this.run(async (knex) => {
      await knex(this.tableName).insert({
        id,
        type: this.type,
        payload: JSON.stringify(payload),
        grantId: payload.grantId,
        userCode: payload.userCode,
        uid: payload.uid,
        expiresAt,
      });
    });
  }

  async find(id) {
    return this.run(async (knex) => {
      return knex
        .select("*")
        .from(this.tableName)
        .where("id", id)
        .andWhere("type", this.type);
    }, this.adopt);
  }

  async findByUserCode(userCode) {
    return this.run(async (knex) => {
      return knex
        .select("*")
        .from(this.tableName)
        .where("userCode", userCode)
        .andWhere("type", this.type);
    }, this.adopt);
  }

  async findByUid(uid) {
    return this.run(async (knex) => {
      return knex
        .select("*")
        .from(this.tableName)
        .where("uid", uid)
        .andWhere("type", this.type);
    }, this.adopt);
  }

  async destroy(id) {
    return this.run(async (knex) => {
      await knex(this.tableName)
        .delete()
        .where("id", id)
        .andWhere("type", this.type);
    });
  }

  async revokeByGrantId(grantId) {
    return this.run(async (knex) => {
      await knex(this.tableName)
        .delete()
        .where("grantId", grantId)
        .andWhere("type", this.type);
    });
  }

  async consume(id) {
    return this.run(async (knex) => {
      await knex(this.tableName)
        .update("consumedAt", new Date())
        .where("id", id)
        .andWhere("type", this.type);
    });
  }

  getExpireAt(expiresIn) {
    return expiresIn ? new Date(Date.now() + expiresIn * 1000) : undefined;
  }

  adopt = (items) => {
    if (items.length === 0) return undefined;

    const first = items[0];

    return Object.assign(
      JSON.parse(first.payload),
      first.consumedAt ? { consumed: true } : undefined,
    );
  };
}
