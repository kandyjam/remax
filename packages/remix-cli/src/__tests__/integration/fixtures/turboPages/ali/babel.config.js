module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        '@alipay/babel-preset-remix',
        {
          'throw-if-namespace': false,
        },
      ],
    ],
  };
};
