import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  timeout: 60000,
  fullyParallel: true,
  workers: 2,
  use: {
    baseURL: process.env.SITE_URL || "http://127.0.0.1:4321",
    launchOptions: {
      executablePath:
        process.env.CHROME_PATH ||
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    },
  },
  reporter: [["list"], ["json", { outputFile: "docs/test-results.json" }]],
});
