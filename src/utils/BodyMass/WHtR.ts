import Decimal from 'decimal.js';
import { BodyInfo } from 'models';

/**
 * waist-to-height ratio
 *
 * formula: height / waist
 */
export function calWHtR(bodyInfo: BodyInfo) {
  const { height, waist } = bodyInfo;
  return new Decimal(height).div(waist).toFixed(2);
}
