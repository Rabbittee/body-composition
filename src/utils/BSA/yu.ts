import Decimal from 'decimal.js';
import { BodyInfo } from '../../models';

// BSA = 0.015925 * Math.pow(height, 0.5) * Math.pow(weight, 0.5)
export function calYu(bodyInfo: BodyInfo) {
  const { height, weight } = bodyInfo;
  return new Decimal(0.015925).times(Math.pow(height, 0.5)).times(Math.pow(weight, 0.5)).toFixed(2);
}
