import Decimal from 'decimal.js';
import { formulaGuard } from 'utils/formulaHelper';
import { BodyInfo } from '../../models';

// BSA = Math.pow(height*weight/3600, 0.5)
function fn(bodyInfo: BodyInfo) {
  const { height, weight } = bodyInfo;
  return new Decimal(height).times(weight).div(3600).pow(0.5).toFixed(2);
}

export const calcMosteller = formulaGuard(fn);
