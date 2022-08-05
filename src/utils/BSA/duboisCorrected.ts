import Decimal from 'decimal.js';

// BSA = 0.00949 * Math.pow(height, 0.655) * Math.pow(weight, 0.441)
export function calDuboisCorrected(height: number, weight: number) {
  return new Decimal(0.00949)
    .times(Math.pow(height, 0.655))
    .times(Math.pow(weight, 0.441))
    .toFixed(2);
}
