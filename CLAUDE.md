# eslint-plugin-defensive

ESLint plugin for defensive coding patterns. Catches runtime issues (unsafe JSON.parse, empty catch blocks, missing auth, inline handlers, division by zero) that standard lint and type checks miss.

## Key Commands

No scripts defined in package.json yet. Once tests exist:

```bash
npm install                       # Install devDependencies (eslint ^8.57.0)
npm test                          # Run tests (not yet configured)
node -e "require('./index.js')"   # Smoke test: verify plugin loads
```

## Architecture

Simple JS project, no build step. CommonJS throughout.

```
eslint-plugin-defensive/
├── index.js                     # Plugin entry point (CommonJS)
│                                 # Exports: meta{}, rules{}, configs{}
├── rules/                       # One file per rule
│   ├── no-unsafe-json-parse.js  # JSON.parse must be in try/catch or with Zod
│   ├── no-empty-catch.js        # Catch blocks must have meaningful handling
│   ├── require-auth-middleware.js # API routes need auth wrappers
│   ├── require-useCallback.js   # No inline arrows in JSX event props
│   └── require-guard-clause.js  # Division needs zero-check guards
├── configs/
│   └── recommended.js           # Preset: errors for parse/catch, warnings for rest
├── package.json                 # v1.0.0, MIT, no build scripts
├── README.md                    # Full usage docs with examples
└── CONTRIBUTING.md
```

Each rule file exports a standard ESLint rule object with `meta` (type, docs, schema, messages) and `create` (AST visitor factory). No build step — source files are published directly.

## Conventions

- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`
- Feature branches — never commit to main
- No `eslint-disable` comments — fix at root cause
- No TypeScript, no build — plain JS with `'use strict'`
- **Rule file names** match the rule ID: `rules/no-empty-catch.js` → `defensive/no-empty-catch`
- **Rule IDs** use kebab-case, except `require-useCallback` (matches React hook name)
- Node >=18, ESLint >=8 peer dependency
- Published files: `index.js`, `rules/`, `configs/` only

## Testing Guidelines

No test framework is configured yet (EPD-001). When added, use ESLint's built-in `RuleTester`:

```javascript
const { RuleTester } = require('eslint');
const rule = require('../rules/no-unsafe-json-parse');

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2022 } });
tester.run('no-unsafe-json-parse', rule, {
  valid: [ /* ... */ ],
  invalid: [ /* ... */ ],
});
```

- Every rule needs both `valid` and `invalid` test cases
- Invalid cases must assert the exact `messageId` from the rule's `meta.messages`
- Test each configurable option with at least one case
- For `require-auth-middleware`: test with `.defensive-patterns.json` project config
- For `require-useCallback`: enable JSX with `ecmaFeatures: { jsx: true }`
- Verify tests pass with both ESLint 8 and ESLint 9+ (peer dependency compatibility)
