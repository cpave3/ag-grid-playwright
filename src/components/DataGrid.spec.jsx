import { test, expect } from "@playwright/experimental-ct-react";
import { DataGrid } from "./DataGrid";

test.use({ viewport: { width: 500, height: 500 } });

test("contains the expected data", async ({ mount }) => {
  const component = await mount(<DataGrid />);

  const expectedData = [
    ["Toyota", "Celica", "$35,000"],
    ["Ford", "Mondeo", "$32,000"],
    ["Porsche", "Boxster", "$72,000"],
  ];

  // Verify that the data is correct
  for (let index = 0; index < expectedData.length; index++) {
    const row = await component.locator("role=row").nth(index + 1);
    const [make, model, price] = expectedData[index];
    await expect(row).toContainText([make, model, price]);
  }
});
