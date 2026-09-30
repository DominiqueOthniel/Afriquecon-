const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  
  const outputDir = '/cursor/stores/bc-01a0f40d-2bfc-738a-8cf4-aa82af7239f7/media/afrique-con';
  
  console.log('Lancement des captures avec nouvelle palette...');
  
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
  
  // Desktop full page
  console.log('Capture desktop pleine page...');
  await desktopPage.screenshot({
    path: path.join(outputDir, 'desktop-full.png'),
    fullPage: true
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
  
  // Video recording
  console.log('Enregistrement vidéo...');
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: {
      dir: outputDir,
      size: { width: 1440, height: 900 }
    }
  });
  
  const videoPage = await context.newPage();
  await videoPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await videoPage.waitForTimeout(2000);
  
  // Masquer le bouton dev
  await videoPage.evaluate(() => {
    const nextIndicator = document.querySelector('[data-nextjs-toast-errors-parent]') || 
                         document.querySelector('nextjs-portal') ||
                         document.querySelector('[style*="position: fixed"][style*="bottom"]');
    if (nextIndicator) nextIndicator.remove();
  });
  
  // Scroll lentement à travers la page
  await videoPage.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        
        if(totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
  
  await videoPage.waitForTimeout(2000);
  await videoPage.close();
  await context.close();
  
  await browser.close();
  
  // Renommer la vidéo
  const videoFiles = fs.readdirSync(outputDir).filter(f => f.endsWith('.webm'));
  if (videoFiles.length > 0) {
    const oldPath = path.join(outputDir, videoFiles[videoFiles.length - 1]);
    const newPath = path.join(outputDir, 'site-demo-temp.webm');
    fs.renameSync(oldPath, newPath);
    
    console.log('Conversion vidéo en MP4...');
    const { execSync } = require('child_process');
    try {
      execSync(`ffmpeg -i "${newPath}" -y "${path.join(outputDir, 'site-demo.mp4')}"`);
      fs.unlinkSync(newPath);
    } catch (e) {
      console.log('FFmpeg non disponible, conservation du webm');
      fs.renameSync(newPath, path.join(outputDir, 'site-demo.webm'));
    }
  }
  
  console.log('Captures terminées avec nouvelle palette rouge !');
  console.log('Fichiers créés:');
  console.log('- desktop-home.png');
  console.log('- desktop-full.png');
  console.log('- mobile-home.png');
  console.log('- site-demo.mp4');
  console.log('- original-palette.png (déjà créé)');
})();
