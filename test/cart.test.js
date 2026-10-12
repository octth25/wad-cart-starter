import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }

test('worked example returns 467400', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  assert.equal(cartTotal(items, options), 467400)
})

test('result is a number, not a string', () => {
  assert.equal(typeof cartTotal([{ name: 'Pen', price: 10000, qty: 1 }], options), 'number')
})

test('empty cart returns zero without shipping', () => {
  assert.equal(cartTotal([], options), 0)
})

test('shipping is free at exactly the subtotal threshold', () => {
  assert.equal(cartTotal([{ name: 'Book', price: 500000, qty: 1 }], options), 540000)
})

test('shipping is charged just below the subtotal threshold', () => {
  assert.equal(cartTotal([{ name: 'Book', price: 499999, qty: 1 }], { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }), 529999)
})

test('free-shipping threshold uses subtotal, not subtotal plus VAT', () => {
  assert.equal(cartTotal([{ name: 'Book', price: 495000, qty: 1 }], { vatRate: 0.1, freeShipFrom: 500000, shipFee: 20000 }), 564500)
})

test('rounds total to the nearest whole dong', () => {
  assert.equal(cartTotal([{ name: 'Pen', price: 101, qty: 1 }], { vatRate: 0.055, freeShipFrom: 0, shipFee: 20000 }), 107)
})

test('negative price throws RangeError', () => {
  assert.throws(() => cartTotal([{ name: 'Pen', price: -100, qty: 1 }], options), RangeError)
})

test('fractional quantity throws RangeError', () => {
  assert.throws(() => cartTotal([{ name: 'Pen', price: 100, qty: 1.5 }], options), RangeError)
})

test('zero quantity throws RangeError', () => {
  assert.throws(() => cartTotal([{ name: 'Pen', price: 100, qty: 0 }], options), RangeError)
})

test('negative quantity throws RangeError', () => {
  assert.throws(() => cartTotal([{ name: 'Pen', price: 100, qty: -2 }], options), RangeError)
})

test('string quantity throws RangeError', () => {
  assert.throws(() => cartTotal([{ name: 'Pen', price: 100, qty: '2' }], options), RangeError)
})
