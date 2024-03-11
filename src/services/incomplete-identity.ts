import { SignIdentity, Signature, PublicKey } from "@dfinity/agent";

export class SessionIdentity extends SignIdentity {
  constructor(private readonly _publicKey: PublicKey) {
    super();
  }

  public getPublicKey(): PublicKey {
    return this._publicKey;
  }

  public sign(blob: ArrayBuffer): Promise<Signature> {
    throw new Error("Not implemented");
  }
}
