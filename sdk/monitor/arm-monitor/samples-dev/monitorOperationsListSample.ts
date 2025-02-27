/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists available Operations for this Resource Provider
 *
 * @summary Lists available Operations for this Resource Provider
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Monitor/stable/2023-04-03/examples/OperationsGet.json
 */
async function getOperationsList() {
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential);
  const resArray = new Array();
  for await (let item of client.monitorOperations.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await getOperationsList();
}

main().catch(console.error);
