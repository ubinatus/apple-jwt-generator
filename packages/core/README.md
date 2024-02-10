# apple-jwt-generator

**Yet another package to generate an Apple Client Secret for SIWA.**

The apple-jwt-generator is a lightweight Node.js library designed for generating JSON Web Tokens (JWT) for server-to-server communication with Apple's services. It simplifies the process of creating JWTs using your Apple Developer account's team ID, key ID, and private key, providing an easy-to-use interface for authenticating with Apple's APIs.

## Installation

Install the package via npm:

```bash
npm install apple-jwt-generator
```

```bash
yarn add apple-jwt-generator
```

```bash
pnpm install apple-jwt-generator
```

```bash
bun add apple-jwt-generator
```

## Usage

```typescript
import { generateAppleJWT, AppleJWTConfig } from 'apple-jwt-generator';

const config: AppleJWTConfig = {
  teamId: 'YOUR_TEAM_ID',
  keyId: 'YOUR_KEY_ID',
  clientId: 'YOUR_CLIENT_ID',
  privateKey: `-----BEGIN PRIVATE KEY-----
YOUR_PRIVATE_KEY_HERE
-----END PRIVATE KEY-----`,
};

const jwt = generateAppleJWT(config);
console.log(jwt);

```

## API Reference

### `generateAppleJWT(config: AppleJWTConfig): string`

Generates a JWT for server-to-server authentication with Apple's services. This function takes a configuration object as its only argument and returns a JWT string.

#### Parameters

| Parameter | Type             | Description                                  |
| --------- | ---------------- | -------------------------------------------- |
| `config`  | `AppleJWTConfig` | Configuration object for generating the JWT. |

##### `AppleJWTConfig` Fields

| Field        | Type   | Required | Description                                                                 | Default    |
| ------------ | ------ | -------- | --------------------------------------------------------------------------- | ---------- |
| `teamId`     | string | Yes      | Team ID from Apple Developer Account.                                       | N/A        |
| `keyId`      | string | Yes      | Key ID of the Private Key.                                                  | N/A        |
| `clientId`   | string | Yes      | Client ID for the JWT.                                                      | N/A        |
| `privateKey` | string | Yes      | Apple Private Key in PEM format.                                            | N/A        |
| `expiresIn`  | number | No       | Expiration in seconds from now for the JWT. Maximum expiration is 6 months. | `15778476` |

#### Returns

- `string`: The generated Apple JWT.

## Disclaimer

### Node.js Version Requirement

This package requires a minimum Node.js version of **12.0.0** to operate correctly due to its reliance on specific features and improvements introduced in this version.

### Not Suitable for Browser Environments

`apple-jwt-generator` is designed to be used in server-side environments and makes use of Node.js's `crypto` module, which is not available in browser environments. Attempting to use this package in the browser would result in errors, as browsers do not have the necessary module for cryptographic operations that this package depends on. Moreover, exposing sensitive credentials (such as private keys) in client-side code can lead to security vulnerabilities, making it critical to handle JWT generation server-side.

## License

Licensed under the MIT License

See [LICENSE](./LICENSE) for more information.
