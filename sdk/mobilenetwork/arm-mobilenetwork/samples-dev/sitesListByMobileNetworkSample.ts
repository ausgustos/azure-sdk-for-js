/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MobileNetworkManagementClient } from "@azure/arm-mobilenetwork";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all sites in the mobile network.
 *
 * @summary Lists all sites in the mobile network.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/stable/2024-04-01/examples/SiteListByMobileNetwork.json
 */
async function listMobileNetworkSitesInAMobileNetwork() {
  const subscriptionId =
    process.env["MOBILENETWORK_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["MOBILENETWORK_RESOURCE_GROUP"] || "rg1";
  const mobileNetworkName = "testMobileNetwork";
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.sites.listByMobileNetwork(
    resourceGroupName,
    mobileNetworkName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listMobileNetworkSitesInAMobileNetwork();
}

main().catch(console.error);
