import Decimal from 'decimal.js';
import { BodyInfo } from 'models';
import { formulaGuard } from 'utils/formulaHelper';

/**
 * waist-to-height ratio
 *
 * formula: height / waist
 */
function fn(bodyInfo: BodyInfo) {
  const { height, waist } = bodyInfo;
  return new Decimal(waist).div(height).toFixed(2);
}

export const calcWHtR = formulaGuard(fn);
