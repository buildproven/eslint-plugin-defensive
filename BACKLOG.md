# eslint-plugin-defensive — Backlog

**Last Updated:** 2026-03-10
**Purpose:** Track and prioritize work for eslint-plugin-defensive, an ESLint plugin for defensive coding patterns that catches runtime issues standard lint/type checks miss.

## Scoring Formula

**Score = (Revenue + Retention + Differentiation) / Effort**

| Value Driver        | Scale |
| ------------------- | ----- |
| Revenue (R)         | 1–5   |
| Retention (R)       | 1–5   |
| Differentiation (D) | 1–5   |

| Effort | Points |
| ------ | ------ |
| S      | 1      |
| M      | 2      |
| L      | 3      |
| XL     | 4      |

---

## Active Backlog

### P0 — Must Have

| ID      | Item                           | Type    | R   | R   | D   | Effort | Score | Status      |
| ------- | ------------------------------ | ------- | --- | --- | --- | ------ | ----- | ----------- |
| EPD-001 | Add unit tests for all 5 rules | Quality | 3   | 5   | 2   | M      | 5.0   | Not Started |
| EPD-002 | Add CI with GitHub Actions     | Infra   | 2   | 4   | 1   | S      | 7.0   | Not Started |

### P1 — Should Have

| ID      | Item                                 | Type    | R   | R   | D   | Effort | Score | Status      |
| ------- | ------------------------------------ | ------- | --- | --- | --- | ------ | ----- | ----------- |
| EPD-003 | New rule: no-unvalidated-redirect    | Feature | 3   | 4   | 5   | M      | 6.0   | Not Started |
| EPD-004 | New rule: require-error-boundary     | Feature | 2   | 4   | 4   | M      | 5.0   | Not Started |
| EPD-005 | New rule: no-floating-promises       | Feature | 3   | 5   | 3   | M      | 5.5   | Not Started |
| EPD-006 | New rule: require-input-sanitization | Feature | 4   | 4   | 5   | L      | 4.3   | Not Started |
| EPD-007 | New rule: no-prototype-pollution     | Feature | 3   | 3   | 5   | L      | 3.7   | Not Started |

### P2 — Nice to Have

| ID      | Item                                         | Type    | R   | R   | D   | Effort | Score | Status      |
| ------- | -------------------------------------------- | ------- | --- | --- | --- | ------ | ----- | ----------- |
| EPD-008 | TypeScript rule support (typed AST visitors) | Feature | 3   | 4   | 3   | L      | 3.3   | Not Started |
| EPD-009 | Performance benchmarking on large codebases  | Quality | 1   | 3   | 2   | M      | 3.0   | Not Started |
| EPD-010 | ESLint v10 compatibility prep                | Infra   | 2   | 4   | 1   | M      | 3.5   | Not Started |
| EPD-011 | Rule composition guide (docs)                | Docs    | 1   | 3   | 2   | S      | 6.0   | Not Started |
| EPD-012 | Integration examples (Next.js, React)        | Docs    | 2   | 4   | 2   | S      | 8.0   | Not Started |
