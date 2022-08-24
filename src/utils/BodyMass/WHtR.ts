import Decimal from 'decimal.js';
import { BodyInfo } from 'models';
import { formulaGuard } from 'utils/formulaHelper';

/**
 * waist-to-height ratio
 *
 * formula: height / waist
 */
function fn(bodyInfo: BodyInfo) {
  const {
    height,
    lines: { waistLine },
  } = bodyInfo;
  return new Decimal(waistLine).div(height).toFixed(2);
}

export const calcWHtR = formulaGuard(fn);
