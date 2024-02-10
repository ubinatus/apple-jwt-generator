export type AppleJWTConfig = {
  /**
   * Team ID from Apple Developer Account
   * @dev Found in Apple Developer Portal > Membership details
   * @url https://developer.apple.com/help/account/manage-your-team/locate-your-team-id/
   */
  teamId: string;
  /**
   * Key ID of the Private Key
   * @dev Found in Apple Developer Portal > Keys > Key details (https://appstoreconnect.apple.com/access/api)
   */
  keyId: string;
  /**
   * Client ID for the JWT
   * @dev Application bundle (https://developer.apple.com/account/resources/identifiers/list)
   * @example com.ubinatus
   */
  clientId: string;
  /**
   * Apple Private Key
   * @dev Extracted from the .p8 file
   * @example "-----BEGIN PRIVATE KEY-----\n
   * xxxxxxxxxx\n
   * xxxxxxxxxx\n
   * xxxxxxxxxx\n
   * -----END PRIVATE KEY-----"
   */
  privateKey: string;
  /**
   * Expiration in seconds from now for the JWT.
   * @dev Maximum expiration is 6 months.
   * @default 15778476 Six months.
   */
  expiresIn?: number;
};