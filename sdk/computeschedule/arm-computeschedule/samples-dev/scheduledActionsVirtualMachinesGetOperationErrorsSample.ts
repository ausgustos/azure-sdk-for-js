// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeScheduleClient } from "@azure/arm-computeschedule";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to virtualMachinesGetOperationErrors: getOperationErrors associated with an operation on a virtual machine
 *
 * @summary virtualMachinesGetOperationErrors: getOperationErrors associated with an operation on a virtual machine
 * x-ms-original-file: 2024-08-15-preview/ScheduledActions_VirtualMachinesGetOperationErrors_MaximumSet_Gen.json
 */
async function csScheduledActionsVirtualMachinesGetOperationErrorsMax(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "DE84A209-5715-43E7-BC76-3E208A9A82C5";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesGetOperationErrors("hfsa", {
    operationIds: ["DE84A209-5715-43E7-BC76-3E208A9A323"],
  });
  console.log(result);
}

/**
 * This sample demonstrates how to virtualMachinesGetOperationErrors: getOperationErrors associated with an operation on a virtual machine
 *
 * @summary virtualMachinesGetOperationErrors: getOperationErrors associated with an operation on a virtual machine
 * x-ms-original-file: 2024-08-15-preview/ScheduledActions_VirtualMachinesGetOperationErrors_MinimumSet_Gen.json
 */
async function csScheduledActionsVirtualMachinesGetOperationErrorsMin(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "DE84A209-5715-43E7-BC76-3E208A9A82C5";
  const client = new ComputeScheduleClient(credential, subscriptionId);
  const result = await client.scheduledActions.virtualMachinesGetOperationErrors("ggxoaxzxtdbi", {
    operationIds: ["qeicik"],
  });
  console.log(result);
}

async function main(): Promise<void> {
  await csScheduledActionsVirtualMachinesGetOperationErrorsMax();
  await csScheduledActionsVirtualMachinesGetOperationErrorsMin();
}

main().catch(console.error);
