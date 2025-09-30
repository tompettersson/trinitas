import { expect, test } from "@playwright/test";

test.describe("Trinitas landing page", () => {
  test("shows hero content and contact details", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("img[alt='TRINITAS Logo']")).toBeVisible();
    await expect(
      page.getByRole("main").getByText("Maßgeschneiderte Strategien", { exact: true })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "service@trinitas.gmbh" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Impressum" })).toBeVisible();

    const screenshot = await page.screenshot();
    expect(screenshot.byteLength).toBeGreaterThan(0);
  });
});
