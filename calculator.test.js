const calculateTotal = require('./calculator');

test('applies discount when price is over 50', () => {
  expect(calculateTotal(60, 10)).toBe(50); // 60 > 50, so 60 - 10 = 50
});

test('does not apply discount when price is 50 or less', () => {
  expect(calculateTotal(40, 10)).toBe(40); // 40 is not > 50, so it returns 40
});