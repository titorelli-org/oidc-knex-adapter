import { OidcRepository } from "../oidc-repository";

export class PushedAuthorizationRequestRepository extends OidcRepository {
  constructor(db, logger) {
    super("PushedAuthorizationRequest", 12, db, logger);
  }
}
