import { OidcRepository } from "../oidc-repository";

export class RegistrationAccessTokenRepository extends OidcRepository {
  constructor(db, logger) {
    super("RegistrationAccessToken", 9, db, logger);
  }
}
