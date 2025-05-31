import { OidcRepository } from "../oidc-repository";

export class ClientCredentialsRepository extends OidcRepository {
  constructor(db, logger) {
    super("ClientCredentials", 6, db, logger);
  }
}
