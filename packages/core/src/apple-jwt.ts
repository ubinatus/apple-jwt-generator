import { sign } from "jsonwebtoken";
import { createPrivateKey } from "crypto";

import type { AppleJWTConfig } from "./types";

export function generateAppleJWT({
  expiresIn = 15778476,
  teamId,
  keyId,
  clientId,
  privateKey,
}: AppleJWTConfig): string {
  return sign(
    {
      exp: Math.round(new Date().getTime() / 1000) + expiresIn,
      aud: "https://appleid.apple.com",
      sub: clientId,
      iss: teamId,
      kid: keyId,
    },
    createPrivateKey(privateKey.replace(/\\n/g, "\n")),
    {
      algorithm: "ES256",
    }
  );
}
