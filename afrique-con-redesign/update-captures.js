const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  
  const outputDir = '/cursor/stores/bc-01a0f40d-2bfc-738a-8cf4-aa82af7239f7/media/afrique-con';
  
  console.log('Mise à jour captures desktop et mobile...');
  
  // Desktop capture
  console.log('Capture desktop (1440x900)...');
  const desktopPage = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });
  
  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(2000);
  
  // Masquer le bouton dev Next.js
  await desktopPage.evaluate(() => {
    const nextIndicator = document.querySelector('[data-nextjs-toast-errors-parent]') || 
                         document.querySelector('nextjs-portal') ||
                         document.querySelector('[style*="position: fixed"][style*="bottom"]');
    if (nextIndicator) nextIndicator.remove();
  });
  
  await desktopPage.screenshot({
    path: path.join(outputDir, 'desktop-home.png'),
    fullPage: false
  });
  
  await desktopPage.close();
  
  // Mobile capture
  console.log('Capture mobile (390x844)...');
  const mobilePage = await browser.newPage({
    viewport: { width: 390, height: 844 }
  });
  
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(2000);
  
  // Masquer le bouton dev Next.js
  await mobilePage.evaluate(() => {
    const nextIndicator = document.querySelector('[data-nextjs-toast-errors-parent]') || 
                         document.querySelector('nextjs-portal') ||
                         document.querySelector('[style*="position: fixed"][style*="bottom"]');
    if (nextIndicator) nextIndicator.remove();
  });
  
  await mobilePage.screenshot({
    path: path.join(outputDir, 'mobile-home.png'),
    fullPage: false
  });
  
  await mobilePage.close();
  await browser.close();
  
  console.log('Captures mises à jour avec meilleur contraste hero !');
  console.log('- desktop-home.png');
  console.log('- mobile-home.png');
})();
