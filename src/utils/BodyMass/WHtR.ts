import Decimal from 'decimal.js';

/**
 * waist-to-height ratio
 *
 * formula: height / waist
 *
 * @param height height[cm]
 * @param waist waist[cm]
 */
export function calWHtR(height: number, waist: number) {
  return new Decimal(height).div(waist).toFixed(2);
}
