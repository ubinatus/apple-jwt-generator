import { sign } from "jsonwebtoken";

import type { AppleJWTConfig } from "./types";

export function generateAppleJWT({
  expiresIn = 15778476,
  expiresAt,
  teamId,
  keyId,
  clientId,
  privateKey,
}: AppleJWTConfig): string {
  return sign(
    {
      aud: "https://appleid.apple.com",
      iss: teamId,
      exp: expiresAt || Math.round(new Date().getTime() / 1000) + expiresIn,
      sub: clientId,
    },
    privateKey.replace(/\\n/g, "\n"),
    {
      algorithm: "ES256",
      keyid: keyId,
    }
  );
}
