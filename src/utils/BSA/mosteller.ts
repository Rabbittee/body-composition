import Decimal from 'decimal.js';
import { BodyInfo } from '../../models';

// BSA = Math.pow(height*weight/3600, 0.5)
export function calMosteller(bodyInfo: BodyInfo) {
  const { height, weight } = bodyInfo;
  return new Decimal(height).times(weight).div(3600).pow(0.5).toFixed(2);
}
