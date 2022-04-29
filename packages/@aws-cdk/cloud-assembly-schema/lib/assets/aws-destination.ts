/**
 * Destination for assets that need to be uploaded to AWS
 */
export interface AwsDestination {
  /**
   * The region where this asset will need to be published
   *
   * @default - Current region
   */
  readonly region?: string;

  /**
   * The role that needs to be assumed while publishing this asset
   *
   * The `assumeRole` fields is the preferred way of passing this information,
   * but this needs to be supported for backwards compatibility.
   *
   * @default - No role will be assumed
   */
  readonly assumeRoleArn?: string;

  /**
   * The ExternalId that needs to be supplied while assuming this role
   *
   * The `assumeRole` fields is the preferred way of passing this information,
   * but this needs to be supported for backwards compatibility.
   *
   * @default - No ExternalId will be supplied
   */
  readonly assumeRoleExternalId?: string;

  /**
   * Tags associated with the given role
   *
   * This information may be used to create IAM policies targeting this role.
   *
   * @default - No tags
   */
  readonly assumeRoleTags?: Record<string, string>;
}