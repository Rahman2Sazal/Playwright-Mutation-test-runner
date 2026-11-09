function calculateTotal(price, discount) {
  if (price > 50) {
    return price - discount; // Apply discount if price is over 50
  }
  return price;
}

console.log (calculateTotal(100, 50));
module.exports = calculateTotal;