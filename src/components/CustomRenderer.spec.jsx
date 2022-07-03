import { test, expect } from "@playwright/experimental-ct-react";
import { CustomRenderer } from "./CustomRenderer";

test.use({ viewport: { width: 500, height: 500 } });

test("formats value correctly", async ({ mount }) => {
  const component = await mount(<CustomRenderer value={10000} />);
  await expect(component).toContainText("$10,000");
});
