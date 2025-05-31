import { OidcRepository } from "../oidc-repository";

export class ClientRepository extends OidcRepository {
  constructor(db, logger) {
    super("Client", 7, db, logger);
  }
}
