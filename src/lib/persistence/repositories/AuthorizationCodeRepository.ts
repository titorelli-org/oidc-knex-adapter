import { OidcRepository } from "../oidc-repository";

export class AuthorizationCodeRepository extends OidcRepository {
  constructor(db, logger) {
    super("AuthorizationCode", 3, db, logger);
  }
}
