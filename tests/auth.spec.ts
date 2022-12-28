import { expect } from "@playwright/test"
import { test } from "./test"

test("sign in", async ({ page }) => {
  await page.goto("/admin/auth?flags=mock")
  await expect(page.locator("body")).toContainText('"user": null')
  await page.getByRole("button", { name: "Sign In" }).click()
  await expect(page.locator("body")).toContainText("Mock User")
  await page.getByRole("button", { name: "Sign Out" }).click()
  await expect(page.locator("body")).toContainText('"user": null')
})
