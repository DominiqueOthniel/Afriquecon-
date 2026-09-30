const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  
  const outputDir = '/cursor/stores/bc-01a0f40d-2bfc-738a-8cf4-aa82af7239f7/media/afrique-con';
  
  console.log('Création captures finales UX...');
  
  // Desktop home (1440x900)
  console.log('Desktop home (1440x900)...');
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
  
  // Desktop full page
  console.log('Desktop full page...');
  await desktopPage.screenshot({
    path: path.join(outputDir, 'desktop-full.png'),
    fullPage: true
  });
  
  await desktopPage.close();
  
  // Mobile home (390x844)
  console.log('Mobile home (390x844)...');
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
  
  // Mobile full page
  console.log('Mobile full page...');
  await mobilePage.screenshot({
    path: path.join(outputDir, 'mobile-full.png'),
    fullPage: true
  });
  
  await mobilePage.close();
  await browser.close();
  
  console.log('Captures terminées !');
  console.log('- desktop-home.png (1440x900)');
  console.log('- desktop-full.png (pleine page)');
  console.log('- mobile-home.png (390x844)');
  console.log('- mobile-full.png (pleine page)');
})();
