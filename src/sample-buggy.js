/**
 * sample-buggy.js
 * Demonstrates a fix for division-by-zero that previously caused Infinity
 * to propagate into subsequent sum calculations.
 */

function calculateResult(values, divisor) {
  if (!Array.isArray(values)) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < values.length; i++) {
    const dividend = values[i];

    // Guard against division by zero to prevent Infinity in the result
    const result = divisor === 0 ? 0 : dividend / divisor;

    sum += result;
  }

  return sum;
}

export default calculateResult;
