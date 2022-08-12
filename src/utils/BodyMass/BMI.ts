import Decimal from 'decimal.js';
import { BodyInfo } from 'models';

/**
 * BMI
 *
 * BMI = weight / (height * height)
 *
 * @returns
 */
export function calBMI(bodyInfo: BodyInfo) {
  const { height, weight } = bodyInfo;
  return new Decimal(weight).div(new Decimal(height).div(100).pow(2)).toFixed(2);
}
