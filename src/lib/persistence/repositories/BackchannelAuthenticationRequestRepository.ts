import { OidcRepository } from "../oidc-repository";

export class BackchannelAuthenticationRequestRepository extends OidcRepository {
  constructor(db, logger) {
    super("BackchannelAuthenticationRequest", 14, db, logger);
  }
}
