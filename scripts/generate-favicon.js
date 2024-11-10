import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get current file's directory when using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateFavicon() {
  try {
    const inputPath = path.join(process.cwd(), 'public/images/profile/avatar.jpeg');
    const outputPath = path.join(process.cwd(), 'public/favicon.ico');

    await sharp(inputPath)
      .resize(32, 32) // Standard favicon size
      .toFormat('png')
      .toFile(outputPath.replace('.ico', '.png'));

    console.log('Favicon generated successfully');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon(); 