import { chromium } from "@playwright/test";
import fs from "node:fs";
const pass = process.argv[2] || "pass1";
const origin = process.argv[3] || "http://127.0.0.1:4321";
const browser = await chromium.launch({
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const sizes = [
  [1440, 900],
  [1280, 800],
  [768, 1024],
  [390, 844],
  [375, 667],
];
const report = [];
for (const [width, height] of sizes) {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(origin, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1200);
  await page.screenshot({
    path: `docs/screenshots/${pass}-${width}.png`,
    fullPage: true,
  });
  report.push({
    width,
    height,
    overflow: await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    ),
    errors,
  });
  await page.close();
}
fs.writeFileSync(
  `docs/screenshots/${pass}-metrics.json`,
  JSON.stringify(report, null, 2),
);
await browser.close();
console.log(report);
