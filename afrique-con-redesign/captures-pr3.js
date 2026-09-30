const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const outputDir = '/cursor/stores/bc-01a0f40d-2bfc-738a-8cf4-aa82af7239f7/media/afrique-con';
  
  console.log('Création captures PR #3...');
  
  // Desktop
  const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(2000);
  await desktopPage.evaluate(() => {
    document.querySelectorAll('[data-nextjs-toast-errors-parent], nextjs-portal').forEach(el => el.remove());
  });
  
  await desktopPage.screenshot({ path: path.join(outputDir, 'desktop-home.png'), fullPage: false });
  await desktopPage.screenshot({ path: path.join(outputDir, 'desktop-full.png'), fullPage: true });
  
  // Sections desktop
  await desktopPage.locator('#routes').scrollIntoViewIfNeeded();
  await desktopPage.waitForTimeout(500);
  await desktopPage.locator('#routes').screenshot({ path: path.join(outputDir, 'section-routes.png') });
  
  await desktopPage.locator('#services').scrollIntoViewIfNeeded();
  await desktopPage.waitForTimeout(500);
  await desktopPage.locator('#services').screenshot({ path: path.join(outputDir, 'section-services.png') });
  
  await desktopPage.locator('#comfort').scrollIntoViewIfNeeded();
  await desktopPage.waitForTimeout(500);
  await desktopPage.locator('#comfort').screenshot({ path: path.join(outputDir, 'section-confort.png') });
  
  await desktopPage.close();
  
  // Mobile
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(2000);
  await mobilePage.evaluate(() => {
    document.querySelectorAll('[data-nextjs-toast-errors-parent], nextjs-portal').forEach(el => el.remove());
  });
  
  await mobilePage.screenshot({ path: path.join(outputDir, 'mobile-home.png'), fullPage: false });
  await mobilePage.screenshot({ path: path.join(outputDir, 'mobile-full.png'), fullPage: true });
  
  await mobilePage.close();
  await browser.close();
  
  console.log('Captures terminées !');
  console.log('- desktop-home.png');
  console.log('- desktop-full.png');
  console.log('- mobile-home.png');
  console.log('- mobile-full.png');
  console.log('- section-routes.png');
  console.log('- section-services.png');
  console.log('- section-confort.png');
})();
