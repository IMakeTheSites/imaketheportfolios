const isProd = process.env.NODE_ENV === "production";
const withImages = require("next-images");
// module.exports = withImages();
module.exports = {
  assetPrefix: isProd ? "http://52.70.112.177/" : "",
};
