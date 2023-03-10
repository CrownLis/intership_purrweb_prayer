const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('./transformer.js'),
    },
    resolver: {
      assetExts,
      sourceExts: [...sourceExts, 'scss', 'sass'],
    },
  };
})();
