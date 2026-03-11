# eslint-plugin-defensive — Agent Guide

## Project Structure & Module Organization

```
eslint-plugin-defensive/
├── index.js                     # Plugin entry point (CommonJS)
│                                 # Exports: meta{}, rules{}, configs{}
├── rules/                       # One file per rule
│   ├── no-unsafe-json-parse.js  # JSON.parse safety
│   ├── no-empty-catch.js        # Meaningful catch blocks
│   ├── require-auth-middleware.js # Auth wrapper enforcement
│   ├── require-useCallback.js   # No inline JSX handlers
│   └── require-guard-clause.js  # Division zero-check
├── configs/
│   └── recommended.js           # Preset configuration
├── package.json                 # v1.0.0, MIT, no build scripts
├── README.md                    # Full usage docs with examples
├── CONTRIBUTING.md
├── SECURITY.md
└── LICENSE
```

- **Module system**: CommonJS (`require`/`module.exports`), `'use strict'` in all files
- **Entry point**: `index.js` aggregates all rules and configs
- **Each rule file** exports a standard ESLint rule object with `meta` (type, docs, schema, messages) and `create` (AST visitor factory)
- **No build step** — source files are published directly

## Build, Test, and Development Commands

```bash
npm install               # Install devDependencies (eslint ^8.57.0)
node -e "require('./index.js')"  # Smoke test: verify plugin loads
```

No test framework is configured yet (EPD-001). When added, tests should use ESLint's `RuleTester` class:

```javascript
const { RuleTester } = require('eslint')
const rule = require('../rules/no-unsafe-json-parse')

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2022 } })
tester.run('no-unsafe-json-parse', rule, {
  valid: [ /* ... */ ],
  invalid: [ /* ... */ ],
})
```

## Coding Style & Naming Conventions

- **Plain JavaScript** — no TypeScript, no transpilation
- **`'use strict'`** at the top of every file
- **Rule file names** match the rule ID: `rules/no-empty-catch.js` → `defensive/no-empty-catch`
- **Rule IDs** use kebab-case, except `require-useCallback` (matches React hook name)
- **Conventional commits**: `feat:`, `fix:`, `chore:`, `docs:`
- **No `eslint-disable`** — fix issues at root cause
- **No `any` types** — project is JS but if TypeScript is added later, use specific types
- **Feature branches only** — never commit directly to main

## Testing Guidelines

- Use ESLint's built-in `RuleTester` — no external test runners needed (though Jest or Vitest can wrap it)
- Every rule needs both `valid` and `invalid` test cases
- Invalid cases must assert the exact `messageId` from the rule's `meta.messages`
- Test rule options: each configurable option needs at least one test case
- Test edge cases: nested structures, multiple violations per file, interactions with other syntax
- For `require-auth-middleware`: test with `.defensive-patterns.json` project config
- For `require-useCallback`: test JSX detection with `ecmaFeatures: { jsx: true }`
- Peer dependency compatibility: verify tests pass with both ESLint 8 and ESLint 9+
