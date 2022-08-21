import Decimal from 'decimal.js';
import { formulaGuard } from 'utils/formulaHelper';
import { BodyInfo, Gender } from '../../models';

// LBM = (Weight[kg] * (100 - Body Fat[%])/100
function LBMBase(weight: number, bodyFat: number) {
  return new Decimal(weight).times(new Decimal(100).minus(bodyFat)).dividedBy(100);
}

// LBM = 0.407 * weight + 0.267 * height - 19.2;
function LBMMale(weight: number, height: number) {
  return new Decimal(0.407).times(weight).plus(new Decimal(0.267).times(height)).minus(19.2);
}

// LBM = 0.252 * weight + 0.473 * height - 48.3;
function LBMFemale(weight: number, height: number) {
  return new Decimal(0.252).times(weight).plus(new Decimal(0.473).times(height)).minus(48.3);
}

// BMR = 370 + (21.6 * Lean Body Mass[kg])
// FIXME: bodyFat shouldn't be undefined
function fn(bodyInfo: BodyInfo) {
  const { height, weight, gender, bodyFat } = bodyInfo;

  let LBM = new Decimal(0);

  if (bodyFat !== undefined) {
    LBM = LBMBase(weight, bodyFat);
  } else if (gender === Gender.Male) {
    LBM = LBMMale(weight, height);
  } else if (gender === Gender.Female) {
    LBM = LBMFemale(weight, height);
  }

  return new Decimal(370).plus(new Decimal(21.6).times(LBM)).round().toString();
}

export const calcKatchMcArdle = formulaGuard(fn);
