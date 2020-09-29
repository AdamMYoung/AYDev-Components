var fs = require('fs');

if (!fs.existsSync('dist/scss')) {
  fs.mkdirSync('dist/scss');
}

fs.copyFileSync(`src/css/main.scss`, `dist/scss/main.scss`);
fs.copyFileSync(`src/css/variables.scss`, `dist/scss/variables.scss`);
fs.copyFileSync(`src/css/overrides.scss`, `dist/scss/overrides.scss`);
