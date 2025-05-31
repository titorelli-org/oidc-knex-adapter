import { OidcRepository } from "../oidc-repository";

export class DeviceCodeRepository extends OidcRepository {
  constructor(db, logger) {
    super("DeviceCode", 5, db, logger);
  }
}
