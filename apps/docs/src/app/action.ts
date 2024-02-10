"use server";

import { generateAppleJWT, AppleJWTConfig } from "apple-jwt-generator";

export async function generate(config: AppleJWTConfig) {
  return generateAppleJWT(config);
}
