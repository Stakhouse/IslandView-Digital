const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    resolver: {
      // Add 'cjs' to the sourceExts array
      sourceExts: [...sourceExts, 'cjs'],
      // Ensure 'webp' and 'png' are included in assetExts
      assetExts: [...assetExts, 'webp', 'png'],
    },
  };
})();
