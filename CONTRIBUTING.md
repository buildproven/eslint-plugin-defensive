# Contributing to eslint-plugin-defensive

Thank you for your interest in contributing. This document explains how to get started.

## Development Setup

```bash
git clone https://github.com/brettstark73/eslint-plugin-defensive.git
cd eslint-plugin-defensive
npm install
```

## Running Tests

```bash
npm test
```

## Project Structure

```
rules/         - Individual ESLint rule implementations
configs/       - Preset configurations (e.g., recommended)
index.js       - Plugin entry point
```

## Adding a New Rule

1. Create `rules/your-rule-name.js` following the structure of an existing rule.
2. Export the rule from `index.js`.
3. Add it to `configs/recommended.js` with an appropriate severity.
4. Document the rule in `README.md` with bad/good examples.
5. Add tests.

Each rule module must export an object with:
- `meta` - Rule metadata (`type`, `docs`, `messages`, `schema`)
- `create(context)` - Returns an AST visitor object

## Submitting a Pull Request

1. Fork the repository and create a feature branch from `main`.
2. Make your changes with clear, focused commits.
3. Ensure existing tests pass.
4. Open a pull request with a description of what the rule catches and why it matters.

Pull requests that add rules should include:
- The rule implementation
- At least one "bad" and one "good" code example in the PR description
- A README section for the new rule

## Reporting Issues

Open a GitHub Issue with:
- ESLint version
- Node.js version
- A minimal code sample that triggers (or fails to trigger) the rule
- Expected vs. actual behavior

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold it.
