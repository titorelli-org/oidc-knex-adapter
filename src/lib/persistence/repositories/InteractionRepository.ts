import { OidcRepository } from "../oidc-repository";

export class InteractionRepository extends OidcRepository {
  constructor(db, logger) {
    super("Interaction", 10, db, logger);
  }
}
