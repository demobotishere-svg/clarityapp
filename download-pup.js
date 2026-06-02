const puppeteer = require('puppeteer');
const fs = require('fs');

const urls = {
  'jensen.jpg': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Jensen_Huang_%28cropped%29.jpg',
  'sam.jpg': 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Sam_Altman_Portrait.jpg',
  'naval.jpg': 'https://pbs.twimg.com/profile_images/1446210086383616000/gO-rE9V-_400x400.jpg',
  'sharan.jpg': 'https://pbs.twimg.com/profile_images/1628359286438060032/aVq0jU6j_400x400.jpg'
};

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  for (const [name, url] of Object.entries(urls)) {
    try {
      console.log(`Fetching ${name} from ${url}...`);
      const page = await browser.newPage();
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
      
      const response = await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
      const buffer = await response.buffer();
      
      const contentType = response.headers()['content-type'] || '';
      if (contentType.includes('image')) {
        fs.writeFileSync('public/' + name, buffer);
        console.log('OK', name, buffer.length);
      } else {
        console.log(`Response was ${contentType}, taking screenshot...`);
        const imgElement = await page.$('img');
        if (imgElement) {
          await imgElement.screenshot({ path: 'public/' + name });
          console.log('OK (Screenshot)', name);
        } else {
          await page.screenshot({ path: 'public/' + name });
          console.log('OK (Full Page Screenshot)', name);
        }
      }
      await page.close();
    } catch(e) {
      console.log('FAIL', name, e.message);
    }
  }
  await browser.close();
  console.log('Done.');
}
run();
