import { OidcRepository } from "../oidc-repository";

export class AccessTokenRepository extends OidcRepository {
  constructor(db, logger) {
    super("AccessToken", 2, db, logger);
  }
}
