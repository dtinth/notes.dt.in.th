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
});

test("rss feed", async ({ request }) => {
  const response = await request.get("/api/recent.xml");
  expect(response.ok()).toBeTruthy();
  const text = await response.text();
  expect(text).toContain("<item>");
});

test("recent page", async ({ page }) => {
  await page.goto("/Recent");
  await expect(page).toHaveTitle("Recent writings | notes.dt.in.th");
});

test("meta tags", async ({ page }) => {
  await page.goto("/20220606T064142Z5299");
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    /Pointer events tester/
  );
});

test("open graph images", async ({ page }) => {
  test.skip(
    !process.env.ENCRYPTION_SECRET,
    "No encryption secret for encoding image URLs"
  );

  await page.goto("/20220606T064142Z5299");
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    /^https:\/\//
  );
  await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute(
    "content",
    /^\d+$/
  );
  await expect(
    page.locator('meta[property="og:image:height"]')
  ).toHaveAttribute("content", /^\d+$/);
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
