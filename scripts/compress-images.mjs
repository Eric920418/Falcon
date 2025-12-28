import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

// 获取所有 PNG 图片（排除 logo）
const pngFiles = fs.readdirSync(publicDir)
  .filter(f => f.endsWith('.png') && f !== 'logo.png');

console.log(`找到 ${pngFiles.length} 张图片需要压缩...\n`);

for (const file of pngFiles) {
  const inputPath = path.join(publicDir, file);
  const stats = fs.statSync(inputPath);
  const originalSize = (stats.size / 1024 / 1024).toFixed(2);

  // 如果小于 500KB 跳过
  if (stats.size < 500 * 1024) {
    console.log(`✓ ${file} (${originalSize}MB) - 已经够小，跳过`);
    continue;
  }

  try {
    // 读取图片并压缩
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // 计算新尺寸（最大宽度 1200px）
    let width = metadata.width;
    if (width > 1200) {
      width = 1200;
    }

    // 压缩为 WebP（质量 80%）并保存为 PNG
    const buffer = await image
      .resize(width)
      .png({ quality: 80, compressionLevel: 9 })
      .toBuffer();

    const newSize = (buffer.length / 1024 / 1024).toFixed(2);
    const reduction = (100 - (buffer.length / stats.size * 100)).toFixed(1);

    // 写回文件
    fs.writeFileSync(inputPath, buffer);

    console.log(`✓ ${file}: ${originalSize}MB → ${newSize}MB (减少 ${reduction}%)`);
  } catch (err) {
    console.error(`✗ ${file}: 压缩失败 - ${err.message}`);
  }
}

console.log('\n压缩完成！');
