# IA#1 project rules

## Stack
- Plain JavaScript (ES modules, `"type": "module"`)
- Node.js 22; built-in `node:test` and `node:assert/strict`
- No third-party dependencies

## Useful commands
- `npm test` — run the unit tests
- `npm run format:check` — detect trailing whitespace and missing final newlines

## Required behavior
Implement `cartTotal(items, options)` in `src/cart.js` as specified by README.md.
Preserve the exported function name and call signature.
Return a number rounded to the nearest whole đồng. Return zero for empty carts.
A negative price or non-positive/non-integer qty must throw `RangeError`.

## Never
- Never add dependencies.
- Never modify public function signatures without a specification change.
- Never remove tests to hide regressions.
- Never commit API keys, real user data, or `.env` files.

## Workflow
1. Read `README.md` and this rules file.
2. Write/extend independent tests in `test/cart.test.js`.
3. Implement changes in `src/cart.js`.
4. Run `npm test` and `npm run format:check` locally.
5. Verify GitHub Actions is green after a push.
