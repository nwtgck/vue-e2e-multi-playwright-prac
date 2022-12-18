import * as assert from 'power-assert';

// chromium 93.0.4576.0, firefox 90.0, webkit 14.2
import * as playwright_1_13 from "playwright-1-13";
// chromium 109.0.5414.46, firefox 107.0, webkit 16.4
import * as playwright_1_29 from "playwright-1-29";


describe('playwright', () => {
  it('goes to page without error', async () => {
    for (const playwright of [playwright_1_13, playwright_1_29]) {
      const out = [];
      for (const browserType of ['chromium', 'firefox', 'webkit'] as const) {
        const browser = await playwright[browserType].launch();
        const page = await browser.newPage();
        await page.goto("https://example.com");
        out.push(`${browserType} ${browser.version()}`);
        await browser.close();
      }
      console.log(out.join(", "));
    }
  });
});
