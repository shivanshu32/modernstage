const https = require('https');
const fs = require('fs');
const path = require('path');

// Create necessary directories
const publicDir = path.join(__dirname, '../public');
const categories = [
  'wedding',
  'corporate',
  'concerts',
  'fashion',
  'decor',
  'gallery',
  'hero'
];

// Create main directories
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Create category directories
categories.forEach(category => {
  const dir = path.join(publicDir, category);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
});

// Image URLs mapping with folder structure
const images = {
  // Hero images
  'hero/hero-bg.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_HERO_IMAGE_ID',
  'hero/about-hero.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_ABOUT_HERO_ID',
  'hero/services-hero.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_SERVICES_HERO_ID',
  'hero/gallery-hero.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY_HERO_ID',
  'hero/contact-hero.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_CONTACT_HERO_ID',

  // Wedding images
  'wedding/wedding-hero.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_WEDDING_HERO_ID',
  'wedding/wedding1.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_WEDDING1_ID',
  'wedding/wedding2.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_WEDDING2_ID',
  'wedding/wedding3.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_WEDDING3_ID',

  // Corporate images
  'corporate/corporate-hero.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_CORPORATE_HERO_ID',
  'corporate/corporate1.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_CORPORATE1_ID',
  'corporate/corporate2.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_CORPORATE2_ID',
  'corporate/corporate3.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_CORPORATE3_ID',

  // Concert images
  'concerts/concert-hero.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_CONCERT_HERO_ID',
  'concerts/concert1.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_CONCERT1_ID',
  'concerts/concert2.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_CONCERT2_ID',
  'concerts/concert3.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_CONCERT3_ID',

  // Fashion images
  'fashion/fashion-hero.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_FASHION_HERO_ID',
  'fashion/fashion1.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_FASHION1_ID',
  'fashion/fashion2.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_FASHION2_ID',
  'fashion/fashion3.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_FASHION3_ID',

  // Decor images
  'decor/decor-hero.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_DECOR_HERO_ID',
  'decor/decor1.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_DECOR1_ID',
  'decor/decor2.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_DECOR2_ID',
  'decor/decor3.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_DECOR3_ID',

  // Gallery images
  'gallery/gallery1.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY1_ID',
  'gallery/gallery2.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY2_ID',
  'gallery/gallery3.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY3_ID',
  'gallery/gallery4.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY4_ID',
  'gallery/gallery5.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY5_ID',
  'gallery/gallery6.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY6_ID',
  'gallery/gallery7.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY7_ID',
  'gallery/gallery8.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY8_ID',
  'gallery/gallery9.jpg': 'https://drive.google.com/uc?export=view&id=YOUR_GALLERY9_ID',
};

// Function to download an image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(publicDir, filename));
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => {});
      console.error(`Error downloading ${filename}:`, err.message);
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  for (const [filename, url] of Object.entries(images)) {
    try {
      await downloadImage(url, filename);
    } catch (error) {
      console.error(`Failed to download ${filename}`);
    }
  }
}

downloadAllImages(); 