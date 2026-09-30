const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const outputDir = '/cursor/stores/bc-01a0f40d-2bfc-738a-8cf4-aa82af7239f7/media/afrique-con';
  
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  
  await page.evaluate(() => {
    document.querySelectorAll('[data-nextjs-toast-errors-parent], nextjs-portal').forEach(el => el.remove());
    const header = document.querySelector('header');
    if (header) header.style.display = 'none';
  });
  
  await page.locator('#routes').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.locator('#routes').screenshot({ path: path.join(outputDir, 'section-routes.png') });
  
  await page.locator('#services').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.locator('#services').screenshot({ path: path.join(outputDir, 'section-services.png') });
  
  await page.locator('#comfort').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.locator('#comfort').screenshot({ path: path.join(outputDir, 'section-confort.png') });
  
  await browser.close();
  
  console.log('Section screenshots updated (no header)');
})();
