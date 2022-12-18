import * as playwright_1_13 from "playwright-1-13";
import * as playwright_1_28 from "playwright-1-28";
import * as playwright_1_29 from "playwright-1-29";

(async () => {
  for (const playwright of [playwright_1_13, playwright_1_28, playwright_1_29]) {
    for (const browserType of ['chromium', 'firefox', 'webkit'] as const) {
      const browser = await playwright[browserType].launch();
      const page = await browser.newPage();
      await page.goto("https://example.com");
      console.log(browserType, browser.version());
      // await page.screenshot({path: `${browserType}-${browser.version()}.png`});
      await browser.close();
    }
  }
})();
