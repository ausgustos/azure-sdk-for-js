// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { PerfOptionDictionary } from "@azure-tools/test-perf";
import { TablesTest } from "./tables.spec.js";
import { TableEntityResult, TransactionAction } from "@azure/data-tables";
import { createBatch } from "./utils/createBaseEntity.js";

interface ListComplexEntitiesTestOptions {
  entityCount: number;
}

export class ListComplexEntitiesTest extends TablesTest<ListComplexEntitiesTestOptions> {
  public options: PerfOptionDictionary<ListComplexEntitiesTestOptions> = {
    entityCount: {
      defaultValue: 100,
      longName: "entityCount",
      shortName: "ec",
      description: "Number of entities to list. Defaults to 100",
    },
  };

  constructor() {
    super("ListComplexEntityPerf");
  }

  public async globalSetup() {
    await super.globalSetup(); // Calling base class' setup
    const batches: TransactionAction[][] = createBatch(
      "complex",
      this.parsedOptions.entityCount.value!,
    );

    for (const batch of batches) {
      await this.client.submitTransaction(batch);
    }
  }

  public async globalCleanup() {
    await super.globalCleanup();
  }

  async run(): Promise<void> {
    const iter = this.client.listEntities();
    const entities: TableEntityResult<Record<string, unknown>>[] = [];

    for await (const entity of iter) {
      entities.push(entity);
    }
  }
}
