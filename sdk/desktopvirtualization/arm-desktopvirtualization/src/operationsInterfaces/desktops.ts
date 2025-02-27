/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Desktop,
  DesktopsListOptionalParams,
  DesktopsGetOptionalParams,
  DesktopsGetResponse,
  DesktopsUpdateOptionalParams,
  DesktopsUpdateResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Desktops. */
export interface Desktops {
  /**
   * List desktops.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationGroupName The name of the application group
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    applicationGroupName: string,
    options?: DesktopsListOptionalParams,
  ): PagedAsyncIterableIterator<Desktop>;
  /**
   * Get a desktop.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationGroupName The name of the application group
   * @param desktopName The name of the desktop within the specified desktop group
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    applicationGroupName: string,
    desktopName: string,
    options?: DesktopsGetOptionalParams,
  ): Promise<DesktopsGetResponse>;
  /**
   * Update a desktop.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationGroupName The name of the application group
   * @param desktopName The name of the desktop within the specified desktop group
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    applicationGroupName: string,
    desktopName: string,
    options?: DesktopsUpdateOptionalParams,
  ): Promise<DesktopsUpdateResponse>;
}
