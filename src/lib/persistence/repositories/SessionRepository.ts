import { OidcRepository } from "../oidc-repository";

export class SessionRepository extends OidcRepository {
  constructor(db, logger) {
    super("Session", 1, db, logger);
  }
}
