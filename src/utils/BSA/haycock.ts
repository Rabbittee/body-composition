import Decimal from 'decimal.js';

// BSA = 0.024265 * Math.pow(height, 0.3964) * Math.pow(weight, 0.5378)
export function calHaycock(height: number, weight: number) {
  return new Decimal(0.024265)
    .times(Math.pow(height, 0.3964))
    .times(Math.pow(weight, 0.5378))
    .toFixed(2);
}
