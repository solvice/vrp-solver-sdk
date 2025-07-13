// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SolviceVrpSolver } from '../client';

export abstract class APIResource {
  protected _client: SolviceVrpSolver;

  constructor(client: SolviceVrpSolver) {
    this._client = client;
  }
}
