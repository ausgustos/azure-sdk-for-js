/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ScVmm } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to restart a virtual machine instance.
 *
 * @summary The operation to restart a virtual machine instance.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/VirtualMachineInstances_Restart_MaximumSet_Gen.json
 */
async function virtualMachineInstancesRestartMaximumSet() {
  const resourceUri = "gtgclehcbsyave";
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential);
  const result =
    await client.virtualMachineInstances.beginRestartAndWait(resourceUri);
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to restart a virtual machine instance.
 *
 * @summary The operation to restart a virtual machine instance.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/VirtualMachineInstances_Restart_MinimumSet_Gen.json
 */
async function virtualMachineInstancesRestartMinimumSet() {
  const resourceUri = "gtgclehcbsyave";
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential);
  const result =
    await client.virtualMachineInstances.beginRestartAndWait(resourceUri);
  console.log(result);
}

async function main() {
  await virtualMachineInstancesRestartMaximumSet();
  await virtualMachineInstancesRestartMinimumSet();
}

main().catch(console.error);
