import Decimal from 'decimal.js';

// BSA = Math.pow(height*weight/3600, 0.5)
export function calMosteller(height: number, weight: number) {
  return new Decimal(height).times(weight).div(3600).pow(0.5).toFixed(2);
}
