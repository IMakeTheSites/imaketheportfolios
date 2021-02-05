const isProd = process.env.NODE_ENV === "production";
const withImages = require("next-images");
module.exports = withImages();
