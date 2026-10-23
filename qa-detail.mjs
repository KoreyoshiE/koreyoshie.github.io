import { chromium } from "@playwright/test";
const browser = await chromium.launch({
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
for (const width of [1440, 390]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  for (const route of [
    "research/wdcgg",
    "research/shanghai-ozone",
    "projects",
    "about",
    "photography",
    "contact",
  ]) {
    await page.goto(`http://127.0.0.1:4321/${route}/`, {
      waitUntil: "networkidle",
    });
    await page.screenshot({
      path: `docs/screenshots/pass2-${route.replaceAll("/", "-")}-${width}.png`,
      fullPage: true,
    });
  }
  await page.close();
}
await browser.close();
