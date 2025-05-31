import { OidcRepository } from "../oidc-repository";

export class ReplayDetectionRepository extends OidcRepository {
  constructor(db, logger) {
    super("ReplayDetection", 11, db, logger);
  }
}
