/**
 * Utility calculation functions for the shopping app.
 */

/**
 * Calculates the average price per item.
 * @param {number} totalPrice - The total price of items.
 * @param {number} divisor - The number of items (quantity).
 * @returns {number} The average price per item, or 0 if divisor is zero.
 */
function calculateAverage(totalPrice, divisor) {
  // Guard against division by zero: dividing by zero produces Infinity,
  // so return 0 as a safe fallback when no items exist.
  if (divisor === 0) return 0;
  return totalPrice / divisor;
}

module.exports = { calculateAverage };
