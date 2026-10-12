# Self-assessment — IA#1

Submitted by: 24127576 — Hoàng Quang Trung

Total I claim: **100 / 100**

| Criterion | Max | I claim | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 30 | `src/cart.js` implements subtotal, VAT, shipping, rounding and `RangeError` validation. `npm test` passes the worked example (`467400`) and the edge cases. |
| Tests | 20 | 20 | `test/cart.test.js` contains 12 focused tests, including empty cart, shipping threshold, invalid prices and quantities, rounding and number return type. All 12 passed when the submitted ZIP was checked locally. |
| Harness | 20 | 20 | `CLAUDE.md` documents the stack, commands and rules; `scripts/check-format.js` provides the formatting gate; `npm test` and `npm run format:check` both pass locally. `.github/workflows/ci.yml` configures CI.
| Brief | 15 | 15 | `brief.md` identifies the files AI may change, the `cartTotal` contract, error cases, the no-dependencies constraint and verification commands. |
| AI-LOG.md | 15 | 15 | `AI-LOG.md` records ChatGPT-assisted tasks, retained suggestions and work done by hand. 
## What I did not manage

I completed the implementation, local testing, and GitHub push without issues.

## What I would do differently

I would update AI-LOG.md after each AI-assisted task and make smaller commits so that my implementation steps and decisions are easier to trace.
