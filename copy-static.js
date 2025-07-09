#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const sourceDir = 'public';
const targetDir = 'dist/public';

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`Source directory ${src} does not exist`);
    return;
  }

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Копируем все файлы из public в dist/public
copyRecursive(sourceDir, targetDir);
console.log('Static files copied successfully!');