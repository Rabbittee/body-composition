import Decimal from 'decimal.js';
import { formulaGuard } from 'utils/formulaHelper';
import { BodyInfo } from '../../models';

// BSA = 0.015925 * Math.pow(height, 0.5) * Math.pow(weight, 0.5)
function fn(bodyInfo: BodyInfo) {
  const { height, weight } = bodyInfo;
  return new Decimal(0.015925).times(Math.pow(height, 0.5)).times(Math.pow(weight, 0.5)).toFixed(2);
}

export const calcYu = formulaGuard(fn);
