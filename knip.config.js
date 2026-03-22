// knip.config.js — Dead code detection
// Docs: https://knip.dev/overview/configuration
module.exports = {
  entry: ['index.{ts,tsx,js,jsx}'],
  project: ['**/*.{ts,tsx,js,jsx}'],
  ignoreDependencies: [],
  ignoreBinaries: ['GPL-3.0', 'AGPL-1.0', 'AGPL-3.0', 'SSPL-1.0', 'BSL-1.1'],
};
