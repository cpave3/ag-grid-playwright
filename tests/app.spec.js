// @ts-check
const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test.describe("App e2e test", () => {
  test("should have expected data", async ({ page }) => {
    // Create 1st todo.
    await expect(page.locator("text=Toyota")).toBeVisible();
  });
});
