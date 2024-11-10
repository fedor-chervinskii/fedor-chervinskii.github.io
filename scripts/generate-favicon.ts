import sharp from 'sharp';
import path from 'path';

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