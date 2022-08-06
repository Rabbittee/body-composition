import Decimal from 'decimal.js';

/**
 * BMI
 *
 * BMI = weight / (height * height)
 *
 * @param height height[cm]
 * @param weight weight[kg]
 * @returns
 */
export function calBMI(height: number, weight: number) {
  return new Decimal(weight).div(new Decimal(height).div(100).pow(2)).toFixed(2);
}
