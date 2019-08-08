const px2rem = require('postcss-px2rem-exclude');
const autoprefixer = require('autoprefixer');
module.exports ={
  plugins:[
    autoprefixer(),
    px2rem({
      remUnit:75,
      exclude: /node_modules/i
    })
  ]
};
