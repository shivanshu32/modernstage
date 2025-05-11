const fs = require('fs');
const path = require('path');
const https = require('https');

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

// Function to download an image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(publicDir, filename));
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filename, () => {});
      console.error(`Error downloading ${filename}:`, err.message);
      reject(err);
    });
  });
}

// Image URLs mapping
const images = {
  // Wedding images
  'wedding/wedding-hero.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'wedding/wedding1.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'wedding/wedding2.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'wedding/wedding3.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',

  // Corporate images
  'corporate/corporate-hero.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'corporate/corporate1.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'corporate/corporate2.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'corporate/corporate3.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',

  // Concert images
  'concerts/concert-hero.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'concerts/concert1.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'concerts/concert2.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'concerts/concert3.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',

  // Fashion images
  'fashion/fashion-hero.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'fashion/fashion1.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'fashion/fashion2.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'fashion/fashion3.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',

  // Decor images
  'decor/decor-hero.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'decor/decor1.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'decor/decor2.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'decor/decor3.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',

  // Gallery images
  'gallery/gallery1.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'gallery/gallery2.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'gallery/gallery3.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'gallery/gallery4.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'gallery/gallery5.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'gallery/gallery6.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'gallery/gallery7.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'gallery/gallery8.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'gallery/gallery9.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',

  // Hero images
  'hero/hero-bg.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'hero/about-hero.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'hero/services-hero.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'hero/gallery-hero.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
  'hero/contact-hero.jpg': 'https://drive.google.com/uc?export=view&id=1jbVHre5zK4eQ9MJ3UhJJv0hnCZEzUkB3',
};

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

// Run the download
downloadAllImages().catch(console.error); 