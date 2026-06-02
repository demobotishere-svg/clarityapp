const https = require('https');
const fs = require('fs');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36' } }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 308) {
        return download(response.headers.location.startsWith('http') ? response.headers.location : new URL(response.headers.location, url).href, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error('Status ' + response.statusCode));
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', reject);
  });
};

const urls = {
  'jensen.jpg': 'https://image.cnbcfm.com/api/v1/image/107293284-1693322137685-gettyimages-1596700084-nvda_earning-28.jpeg',
  'sam.jpg': 'https://techcrunch.com/wp-content/uploads/2023/11/Sam-Altman-OpenAI-2023-e1700257002540.jpg',
  'naval.jpg': 'https://i.insider.com/5fcd172d80d2d300192e2e98',
  'sharan.jpg': 'https://images.livemint.com/img/2023/10/05/600x338/Sharan_Hegde_1696495537537_1696495546197.jpg'
};

async function run() {
  for (const [name, url] of Object.entries(urls)) {
    try {
      await download(url, 'public/' + name);
      console.log('OK', name);
    } catch(e) {
      console.log('FAIL', name, e.message);
    }
  }
}
run();
