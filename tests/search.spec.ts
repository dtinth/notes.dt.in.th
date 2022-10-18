import { expect } from "@playwright/test";
import { test } from "./test";

test("can search and navigate to a search result", async ({ page }) => {
  await page.goto("/HomePage");
  await page.locator('input[type="search"]').waitFor({ state: "attached" });

  const searchInput = page.getByPlaceholder("Search for a note…");
  await expect
    .poll(async () => {
      await page.keyboard.press("Meta+k");
      return searchInput.isVisible();
    })
    .toBe(true);
  await searchInput.fill("codespaces x11");
  await page
    .getByText("Run an X11 display server and noVNC on Codespaces")
    .click();
  await expect(page).toHaveURL(/CodespacesDisplayServer/);
});
