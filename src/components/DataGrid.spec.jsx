import { test, expect } from "@playwright/experimental-ct-react";
import { DataGrid } from "./DataGrid";

test.use({ viewport: { width: 500, height: 500 } });

test("should work", async ({ mount }) => {
  const component = await mount(<DataGrid />);
  await expect(component).toContainText("Toyota");
});
