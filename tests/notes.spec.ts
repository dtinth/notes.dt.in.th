import { test, expect } from "@playwright/test";

test("homepage", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/notes\.dt\.in\.th/);
  await expect(page.locator("h1")).toContainText("notes.dt.in.th");

  // IndieWeb tags
  await expect(page.locator(".h-entry .e-content")).toContainText(
    "Recent writings"
  );
  await expect(page.locator(".h-entry .p-author.h-card")).toBeVisible();
  await expect(page.locator(".h-entry .dt-published")).toBeVisible();
});

test("rss feed", async ({ request }) => {
  const response = await request.get("/api/recent.xml");
  expect(response.ok()).toBeTruthy();
  const text = await response.text();
  expect(text).toContain("<item>");
});

test("recent page", async ({ page }) => {
  await page.goto("/20220130T173123Z7835");
  await expect(page).toHaveTitle("Recent writings | notes.dt.in.th");
});

test("footnotes", async ({ page }) => {
  await page.goto("/20201114T051848Z1525");
  await expect(page.locator("[aria-label='Footnote 1']")).toBeVisible();
  await expect(page.locator("aside :text('Like this')")).not.toBeVisible();
  await page.locator("[aria-label='Footnote 1']").click();
  await expect(page.locator("aside :text('Like this')")).toBeVisible();
});

test("interactivity", async ({ page }) => {
  await page.goto("/20201211T195900Z2817");
  await expect(page.locator("button:has-text('0')")).toBeVisible();
  await page.locator("button:has-text('0')").click();
  await expect(page.locator("button:has-text('1')")).toBeVisible();
  await page.locator("button:has-text('1')").click();
  await expect(page.locator("button:has-text('2')")).toBeVisible();
});

// wide page

// unpublished page heading
// - display preview link expiry date
// - https://github.com/dtinth/notes.dt.in.th/blob/8945f65aa431f31505f4bb2c529994033e60d8c1/pages/_id.vue#L4-L17

// post footer
// - back to homepage
// - author
// - published date

// respond links
// - facebook
// - devto
// - twitter
// - reddit
