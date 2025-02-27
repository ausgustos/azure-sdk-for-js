/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MicrosoftNetworkAnalytics } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete data type resource.
 *
 * @summary Delete data type resource.
 * x-ms-original-file: specification/networkanalytics/resource-manager/Microsoft.NetworkAnalytics/stable/2023-11-15/examples/DataTypes_Delete_MaximumSet_Gen.json
 */
async function dataTypesDeleteMaximumSetGen() {
  const subscriptionId =
    process.env["NETWORKANALYTICS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-00000000000";
  const resourceGroupName =
    process.env["NETWORKANALYTICS_RESOURCE_GROUP"] || "aoiresourceGroupName";
  const dataProductName = "dataproduct01";
  const dataTypeName = "datatypename";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftNetworkAnalytics(credential, subscriptionId);
  const result = await client.dataTypes.beginDeleteAndWait(
    resourceGroupName,
    dataProductName,
    dataTypeName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Delete data type resource.
 *
 * @summary Delete data type resource.
 * x-ms-original-file: specification/networkanalytics/resource-manager/Microsoft.NetworkAnalytics/stable/2023-11-15/examples/DataTypes_Delete_MinimumSet_Gen.json
 */
async function dataTypesDeleteMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen() {
  const subscriptionId =
    process.env["NETWORKANALYTICS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-00000000000";
  const resourceGroupName =
    process.env["NETWORKANALYTICS_RESOURCE_GROUP"] || "aoiresourceGroupName";
  const dataProductName = "dataproduct01";
  const dataTypeName = "datatypename";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftNetworkAnalytics(credential, subscriptionId);
  const result = await client.dataTypes.beginDeleteAndWait(
    resourceGroupName,
    dataProductName,
    dataTypeName
  );
  console.log(result);
}

async function main() {
  await dataTypesDeleteMaximumSetGen();
  await dataTypesDeleteMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
