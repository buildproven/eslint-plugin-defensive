# eslint-plugin-defensive

ESLint plugin for defensive coding patterns. Catches runtime issues (unsafe JSON.parse, empty catch blocks, missing auth, inline handlers, division by zero) that standard lint and type checks miss.

## Key Commands

No scripts defined in package.json yet. Once tests exist:

```bash
npm test          # run tests (not yet configured)
npm install       # install dev dependencies (eslint ^8.57.0)
```

## Architecture

Simple JS project, no build step. CommonJS throughout.

```
index.js                        # Plugin entry — exports rules{} and configs{}
rules/
  no-unsafe-json-parse.js       # JSON.parse must be in try/catch or with Zod
  no-empty-catch.js             # Catch blocks must have meaningful handling
  require-auth-middleware.js    # API routes need auth wrappers
  require-useCallback.js       # No inline arrows in JSX event props
  require-guard-clause.js      # Division needs zero-check guards
configs/
  recommended.js                # Preset: errors for parse/catch, warnings for rest
```

## Conventions

- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`
- Feature branches — never commit to main
- No `eslint-disable` comments — fix at root cause
- No TypeScript, no build — plain JS with `'use strict'`
- Node >=18, ESLint >=8 peer dependency
- Published files: `index.js`, `rules/`, `configs/` only
