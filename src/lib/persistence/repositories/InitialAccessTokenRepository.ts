import { OidcRepository } from "../oidc-repository";

export class InitialAccessTokenRepository extends OidcRepository {
  constructor(db, logger) {
    super("InitialAccessToken", 8, db, logger);
  }
}
