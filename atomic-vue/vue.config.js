const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "./src"),
        "@atoms": path.join(__dirname, "./src/components/atoms"),
        "@molecules": path.join(__dirname, "./src/components/molecules"),
        "@organisms": path.join(__dirname, "./src/components/organisms"),
        "@templates": path.join(__dirname, "./src/components/templates"),
        "@pages": path.join(__dirname, "./src/components/pages"),
        "@constants": path.join(__dirname, "./src/constants"),
      },
    },
  },
};
