module.exports = {
  plugins: [
    ['postcss-flexbugs-fixes'],
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          grid: true,
          flexbox: 'no-2009',
        },
      },
    ],
  ],
};
