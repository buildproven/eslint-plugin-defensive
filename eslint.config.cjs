const js = require('@eslint/js');
const globals = require('globals');

let nPlugin = null;
try {
  nPlugin = require('eslint-plugin-n');
} catch {
  // eslint-plugin-n not installed
}

const configs = [
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/coverage/**', '.husky/**'],
  },
  js.configs.recommended,
];

// Base rules configuration
configs.push({
  files: ['**/*.{js,cjs,mjs}'],
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'commonjs',
    globals: {
      ...globals.node,
    },
  },
  rules: {
    // Complexity gates
    complexity: ['warn', 15],
    'max-depth': ['warn', 4],
    'max-params': ['warn', 5],

    // Safety
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
  },
});

// Import verification (eslint-plugin-n)
if (nPlugin) {
  configs.push({
    files: ['**/*.{js,cjs,mjs}'],
    plugins: { n: nPlugin },
    rules: {
      'n/no-missing-require': 'error',
      'n/no-missing-import': 'off',
      'n/no-unpublished-require': 'off',
    },
  });
}

// Test file overrides
configs.push({
  files: ['**/__tests__/**/*.js', '**/*.test.js', '**/*.spec.js'],
  languageOptions: {
    globals: {
      describe: 'readonly',
      it: 'readonly',
      expect: 'readonly',
      beforeEach: 'readonly',
      afterEach: 'readonly',
      beforeAll: 'readonly',
      afterAll: 'readonly',
      vi: 'readonly',
    },
  },
});

module.exports = configs;
