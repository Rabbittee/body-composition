import Decimal from 'decimal.js';
import { BodyInfo } from 'models';
import { formulaGuard } from 'utils/formulaHelper';

/**
 * BMI
 *
 * BMI = weight / (height * height)
 *
 * @returns
 */
function fn(bodyInfo: BodyInfo) {
  const { height, weight } = bodyInfo;
  return new Decimal(weight).div(new Decimal(height).div(100).pow(2)).toFixed(2);
}

export const calcBMI = formulaGuard(fn);
