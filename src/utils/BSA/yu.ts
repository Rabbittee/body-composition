import Decimal from 'decimal.js';

// BSA = 0.015925 * Math.pow(height, 0.5) * Math.pow(weight, 0.5)
export function calYu(height: number, weight: number) {
  return new Decimal(0.015925).times(Math.pow(height, 0.5)).times(Math.pow(weight, 0.5)).toFixed(2);
}
