import { OidcRepository } from "../oidc-repository";

export class RefreshTokenRepository extends OidcRepository {
  constructor(db, logger) {
    super("RefreshToken", 4, db, logger);
  }
}
