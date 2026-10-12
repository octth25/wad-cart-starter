# Brief given to an assistant — IA#1 cartTotal

## Goal
Implement `cartTotal(items, options)` exactly as stated in `README.md`.

## Files the assistant may change
- `src/cart.js` — implement function behavior
- `test/cart.test.js` — add independent tests for each acceptance case

Do not touch unrelated files unless asked explicitly.

## Contract
- `items` is an array of `{ name, price, qty }`.
- `options` is `{ vatRate, freeShipFrom, shipFee }`.
- `subtotal = Σ(price * qty)`.
- `vat = subtotal * vatRate`.
- `shipping = 0` if `subtotal >= freeShipFrom`, else `shipFee`.
- Return `Math.round(subtotal + vat + shipping)` as a **number**.
- Return `0` for an empty cart, with no VAT or shipping.
- Reject negative prices using `RangeError`.
- Reject quantities that are not positive integers using `RangeError`.
- Official example: two items costing `2 * 180000 + 1 * 45000`, VAT 8%, threshold 500000, shipping 30000 → `467400`.

## Constraints
- Plain JavaScript ES modules; use existing export and function signature.
- Add no dependencies.
- Keep existing module and test runner conventions.
- Do not use `.toFixed()` for the returned result (it returns a string).

## Verification
- Execute `npm test` and `npm run format:check`.
- Write separate tests for example, empty cart, the exact shipping threshold, negative price, fractional/zero/negative quantity, rounding, and numerical return type.
- Explain any changes so I can defend the work orally.
