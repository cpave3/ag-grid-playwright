import { test, expect } from "@playwright/test";

test("Check that all expected data is present", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Verify that the title is correct
  await expect(page).toHaveTitle("Vite App");

  // Specify the data that we expect to be present
  const expectedData = [
    ["Toyota", "Celica", "$35,000"],
    ["Ford", "Mondeo", "$32,000"],
    ["Porsche", "Boxster", "$72,000"],
  ];

  // Verify that the data is correct
  for (let index = 0; index < expectedData.length; index++) {
    const row = await page.locator("role=row").nth(index + 1);
    const [make, model, price] = expectedData[index];
    await expect(row).toContainText([make, model, price]);
  }
});
