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
      exp: expiresAt || Math.round(new Date().getTime() / 1000) + expiresIn,
      aud: "https://appleid.apple.com",
      sub: clientId,
      iss: teamId,
      kid: keyId,
    },
    privateKey.replace(/\\n/g, "\n"),
    {
      algorithm: "ES256",
    }
  );
}
