/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  IntegrationRuntimeObjectMetadataRefreshOptionalParams,
  IntegrationRuntimeObjectMetadataRefreshResponse,
  IntegrationRuntimeObjectMetadataGetOptionalParams,
  IntegrationRuntimeObjectMetadataGetResponse,
} from "../models/index.js";

/** Interface representing a IntegrationRuntimeObjectMetadata. */
export interface IntegrationRuntimeObjectMetadata {
  /**
   * Refresh a SSIS integration runtime object metadata.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  beginRefresh(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimeObjectMetadataRefreshOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<IntegrationRuntimeObjectMetadataRefreshResponse>,
      IntegrationRuntimeObjectMetadataRefreshResponse
    >
  >;
  /**
   * Refresh a SSIS integration runtime object metadata.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  beginRefreshAndWait(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimeObjectMetadataRefreshOptionalParams,
  ): Promise<IntegrationRuntimeObjectMetadataRefreshResponse>;
  /**
   * Get a SSIS integration runtime object metadata by specified path. The return is pageable metadata
   * list.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimeObjectMetadataGetOptionalParams,
  ): Promise<IntegrationRuntimeObjectMetadataGetResponse>;
}
