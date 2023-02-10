const path = require('path');

module.exports = {
  entry: './Template/js/index.js',
  output: {
    path: path.resolve(__dirname, 'Template'),
    filename: 'index.js',
  },
};
