const { chromium } = require('playwright');

async function captureScreenshot(url, outputPath) {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });

  await page.goto(url, { waitUntil: 'networkidle' });
  await page.screenshot({ path: outputPath, fullPage: false });

  await browser.close();
  console.log(`Screenshot saved to ${outputPath}`);
}

const url = process.argv[2];
const outputPath = process.argv[3];

if (!url || !outputPath) {
  console.error('Usage: node capture-screenshot.js <url> <output-path>');
  process.exit(1);
}

captureScreenshot(url, outputPath).catch(console.error);
