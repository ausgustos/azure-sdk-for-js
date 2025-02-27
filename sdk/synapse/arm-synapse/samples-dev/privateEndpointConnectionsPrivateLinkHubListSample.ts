/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get all PrivateEndpointConnections in the PrivateLinkHub
 *
 * @summary Get all PrivateEndpointConnections in the PrivateLinkHub
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/PrivateEndpointConnectionsPrivateLinkHub_List.json
 */
async function getAPrivateLinkHub() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "48b08652-d7a1-4d52-b13f-5a2471dce57b";
  const resourceGroupName =
    process.env["SYNAPSE_RESOURCE_GROUP"] || "gh-res-grp";
  const privateLinkHubName = "pe0";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.privateEndpointConnectionsPrivateLinkHub.list(
    resourceGroupName,
    privateLinkHubName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await getAPrivateLinkHub();
}

main().catch(console.error);
