module.exports = {
  module: {
    rules: [
      {
        test: /\.(woff2|woff|eot|ttf|otf)$/,
        use: ["file-loader"],
        options: {
          publicPath: "./src/assets/fonts/",
          name: "./src/assets/fonts/[name].[ext]",
        },
      },
    ],
  },
};
