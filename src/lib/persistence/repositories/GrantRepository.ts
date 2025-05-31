import { OidcRepository } from "../oidc-repository";

export class GrantRepository extends OidcRepository {
  constructor(db, logger) {
    super("Grant", 13, db, logger);
  }
}
