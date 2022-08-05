import Decimal from 'decimal.js';

// BSA = 0.007184 * Math.pow(height, 0.725) * Math.pow(weight, 0.425)
export function calDubois(height: number, weight: number) {
  return new Decimal(0.007184)
    .times(Math.pow(height, 0.725))
    .times(Math.pow(weight, 0.425))
    .toFixed(2);
}
