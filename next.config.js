const path = require("path");

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    API: process.env.API,
    DOMAIN: process.env.DOMAIN,
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
      },
    });
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
};
