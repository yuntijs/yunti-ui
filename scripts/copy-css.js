const { copyFileSync, mkdirSync } = require('fs');
const { dirname, resolve } = require('path');

const source = require.resolve('@mdxeditor/editor/style.css');
const targetDir = resolve(process.cwd(), 'umd');
const target = resolve(targetDir, 'mdxeditor.css');

mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);

console.log(`✅ Copied MDXEditor CSS to: ${target}`);

