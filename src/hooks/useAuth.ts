import { useContext, useState } from "react";

import { fromHex } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import { DelegationIdentity, Ed25519PublicKey } from "@dfinity/identity";

import { AuthContext } from "../context/auth.context";
import { SessionIdentity } from "../services/incomplete-identity";
import { useParams } from "./useParams";

const INTERNET_IDENTITY_URL = process.env.REACT_APP_INTERNET_IDENTITY_URL || "https://identity.ic0.app";

export const useAuth = () => {
  const { isAuth, authenticate } = useContext(AuthContext);
  const { pubkey, redirect_uri } = useParams();
  const [delegation, setDelegation] = useState<string | undefined>();

  async function login() {
    const publicKey = Ed25519PublicKey.fromDer(fromHex(pubkey));

    // const identity = new PartialIdentity(publicKey);
    const identity = new SessionIdentity(publicKey);

    try {
      const client = await AuthClient.create({
        identity
      });

      client.login({
        identityProvider: INTERNET_IDENTITY_URL,
        onSuccess: async () => {
          const identity = client.getIdentity();

          if (identity instanceof DelegationIdentity) {
            const delegation = identity.getDelegation();
            const delegationString = JSON.stringify(delegation);
            setDelegation(delegationString);

            console.log("Delegation", delegationString);

            authenticate();
          } else {
            console.log("Identity is not a delegation identity");
          }
        },
        onError: (err) => {
          console.log("Error logging in");
          console.log(err);
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  function navigate() {
    if (!delegation) throw new Error("delegation not defined");

    const url = new URL(decodeURIComponent(redirect_uri));

    window.open(`${url.href}?publicKey=${pubkey}&delegation=${delegation}`, "_self");
  }

  return {
    isAuth,
    login,
    navigate,
  };
};
