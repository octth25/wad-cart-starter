// Return the total amount in VND, rounded to the nearest whole dong.
export function cartTotal(items, options) {
  // Empty carts have neither VAT nor shipping fees.
  if (items.length === 0) {
    return 0
  }

  let subtotal = 0

  for (const item of items) {
    if (typeof item.price !== 'number' || !Number.isFinite(item.price) || item.price < 0) {
      throw new RangeError('price must be a non-negative finite number')
    }

    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError('qty must be a positive integer')
    }

    subtotal += item.price * item.qty
  }

  const vat = subtotal * options.vatRate
  const shipping = subtotal >= options.freeShipFrom ? 0 : options.shipFee

  return Math.round(subtotal + vat + shipping)
}
