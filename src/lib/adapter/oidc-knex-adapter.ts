import { OidcTypes } from "./oidc-types.js";

export class OidcKnexAdapter {
  type;
  repository;
  name;

  constructor(name, repository) {
    this.type = OidcTypes[name];
    this.name = name;
    this.repository = repository;
  }

  upsert(...args) {
    return this.repository.upsert(...args);
  }

  find(...args) {
    return this.repository.find(...args);
  }

  findByUserCode(...args) {
    return this.repository.findByUserCode(...args);
  }

  findByUid(...args) {
    return this.repository.findByUid(...args);
  }

  destroy(...args) {
    return this.repository.destroy(...args);
  }

  revokeByGrantId(...args) {
    return this.repository.revokeByGrantId(...args);
  }

  consume(...args) {
    return this.repository.consume(...args);
  }
}
