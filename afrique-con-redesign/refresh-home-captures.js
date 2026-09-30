const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  
  const outputDir = '/cursor/stores/bc-01a0f40d-2bfc-738a-8cf4-aa82af7239f7/media/afrique-con';
  
  console.log('Refresh desktop-home.png et mobile-home.png...');
  
  // Desktop home (1440x900)
  const desktopPage = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });
  
  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(2000);
  
  await desktopPage.evaluate(() => {
    const indicators = document.querySelectorAll('[data-nextjs-toast-errors-parent], nextjs-portal, [style*="position: fixed"][style*="bottom"]');
    indicators.forEach(el => el.remove());
  });
  
  await desktopPage.screenshot({
    path: path.join(outputDir, 'desktop-home.png'),
    fullPage: false
  });
  
  await desktopPage.close();
  
  // Mobile home (390x844)
  const mobilePage = await browser.newPage({
    viewport: { width: 390, height: 844 }
  });
  
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(2000);
  
  await mobilePage.evaluate(() => {
    const indicators = document.querySelectorAll('[data-nextjs-toast-errors-parent], nextjs-portal, [style*="position: fixed"][style*="bottom"]');
    indicators.forEach(el => el.remove());
  });
  
  await mobilePage.screenshot({
    path: path.join(outputDir, 'mobile-home.png'),
    fullPage: false
  });
  
  await mobilePage.close();
  await browser.close();
  
  console.log('Terminé !');
})();
