import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "/",
  "/research/",
  "/research/wdcgg/",
  "/research/shanghai-ozone/",
  "/projects/",
  "/projects/agent-router/",
  "/projects/omnistream/",
  "/about/",
  "/photography/",
  "/contact/",
];
for (const width of [1440, 1280, 768, 390, 375]) {
  test(`all routes and assets fit ${width}px`, async ({ page }) => {
    await page.setViewportSize({
      width,
      height:
        width === 375
          ? 667
          : width === 390
            ? 844
            : width === 768
              ? 1024
              : width === 1280
                ? 800
                : 900,
    });
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    const failures: string[] = [];
    page.on("response", (r) => {
      if (r.status() >= 400) failures.push(`${r.status()} ${r.url()}`);
    });
    for (const route of routes) {
      const response = await page.goto(route, { waitUntil: "networkidle" });
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBeTruthy();
      expect(
        await page
          .locator("img")
          .evaluateAll((imgs) =>
            imgs.every(
              (i) =>
                (i as HTMLImageElement).complete &&
                (i as HTMLImageElement).naturalWidth > 0,
            ),
          ),
      ).toBeTruthy();
    }
    expect(errors).toEqual([]);
    expect(failures).toEqual([]);
  });
}
for (const width of [1440, 375]) {
  for (const route of routes) {
    test(`accessibility ${width} ${route}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      await page.waitForTimeout(1000);
      const scan = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
        .analyze();
      expect(scan.violations).toEqual([]);
    });
  }
}
test("mobile menu is keyboard operable and Escape restores focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.locator(".mobile-nav summary").press("Enter");
  await expect(page.locator(".mobile-nav")).toHaveAttribute("open", "");
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Research", exact: true })
    .focus();
  await page.keyboard.press("Escape");
  await expect(page.locator(".mobile-nav")).not.toHaveAttribute("open", "");
  await expect(page.locator(".mobile-nav summary")).toBeFocused();
  await page.locator(".mobile-nav summary").press("Enter");
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Research", exact: true })
    .click();
  await expect(page).toHaveURL(/research\/$/);
});
test("method disclosure and year split expose the correct state", async ({
  page,
}) => {
  await page.goto("/research/shanghai-ozone/");
  await page.getByText("Methods and research role", { exact: true }).click();
  await expect(
    page.getByText(/formally appointed undergraduate researcher/),
  ).toBeVisible();
  await page.getByRole("radio", { name: "2023" }).check();
  await expect(page.locator('[data-year="2023"] .test-label')).toBeVisible();
  await expect(page.locator('[data-year="2025"] .train-label')).toBeVisible();
});
test("skip link works from keyboard", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main$/);
});
test("reduced motion leaves the opening readable and static", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".hero h1")).toBeVisible();
  expect(
    await page
      .locator(".hero-art")
      .evaluate((el) => getComputedStyle(el).clipPath),
  ).toBe("none");
  expect(
    await page
      .locator(".hero-art img")
      .evaluate((el) => getComputedStyle(el).transform),
  ).toBe("none");
});
test("all content and native interactions work without JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  for (const route of routes) {
    await page.goto(baseURL + route);
    await expect(page.locator("h1")).toBeVisible();
    expect(await page.getByRole("link").count()).toBeGreaterThan(4);
  }
  await page.goto(baseURL + "/research/shanghai-ozone/");
  await page.getByText("Methods and research role", { exact: true }).click();
  await expect(
    page.getByText(/formally appointed undergraduate researcher/),
  ).toBeVisible();
  await page.getByRole("radio", { name: "2021" }).check();
  await expect(page.locator('[data-year="2021"] .test-label')).toBeVisible();
  await context.close();
});
test("all internal links resolve", async ({ page, request, baseURL }) => {
  const targets = new Set<string>();
  for (const route of routes) {
    await page.goto(route);
    for (const href of await page
      .locator('a[href^="/"]')
      .evaluateAll((as) => as.map((a) => a.getAttribute("href")!)))
      targets.add(href.split("#")[0] || "/");
  }
  for (const route of targets) {
    expect((await request.get(baseURL + route)).status(), route).toBe(200);
  }
});
