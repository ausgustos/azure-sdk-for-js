/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  BuildsGetOptionalParams,
  BuildsGetResponse,
  BuildResource,
  BuildsCreateOrUpdateOptionalParams,
  BuildsCreateOrUpdateResponse,
  BuildsDeleteOptionalParams,
  BuildsDeleteResponse,
} from "../models/index.js";

/** Interface representing a Builds. */
export interface Builds {
  /**
   * Get a BuildResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param builderName The name of the builder.
   * @param buildName The name of a build.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    builderName: string,
    buildName: string,
    options?: BuildsGetOptionalParams,
  ): Promise<BuildsGetResponse>;
  /**
   * Create a BuildResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param builderName The name of the builder.
   * @param buildName The name of a build.
   * @param buildEnvelope Resource create or update parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    builderName: string,
    buildName: string,
    buildEnvelope: BuildResource,
    options?: BuildsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BuildsCreateOrUpdateResponse>,
      BuildsCreateOrUpdateResponse
    >
  >;
  /**
   * Create a BuildResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param builderName The name of the builder.
   * @param buildName The name of a build.
   * @param buildEnvelope Resource create or update parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    builderName: string,
    buildName: string,
    buildEnvelope: BuildResource,
    options?: BuildsCreateOrUpdateOptionalParams,
  ): Promise<BuildsCreateOrUpdateResponse>;
  /**
   * Delete a BuildResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param builderName The name of the builder.
   * @param buildName The name of a build.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    builderName: string,
    buildName: string,
    options?: BuildsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<BuildsDeleteResponse>, BuildsDeleteResponse>
  >;
  /**
   * Delete a BuildResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param builderName The name of the builder.
   * @param buildName The name of a build.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    builderName: string,
    buildName: string,
    options?: BuildsDeleteOptionalParams,
  ): Promise<BuildsDeleteResponse>;
}
