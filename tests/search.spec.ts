import { test, expect } from "@playwright/test";

test("can search and navigate to a search result", async ({ page }) => {
  await page.goto("https://notes.dt.in.th/HomePage");
  await page.keyboard.press("Meta+k");
  await page
    .locator('[placeholder="Search for a note…"]')
    .fill("codespaces x11");
  await page
    .locator("text=Run an X11 display server and noVNC on Codespaces")
    .click();
  await expect(page).toHaveURL(
    "https://notes.dt.in.th/CodespacesDisplayServer"
  );
});
