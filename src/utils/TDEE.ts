import Decimal from 'decimal.js';
import { yearfrac } from 'formula';
import { Gender } from '../models';

function FAOMale(weight: number) {
  return new Decimal(weight).toPower(0.73).times(152).round();
}

function FAOFemale(weight: number) {
  return new Decimal(weight).toPower(0.73).times(123).round();
}

// =round(if(gender="男",152*weight^0.73,123*weight^0.73),0)
export function calFAO(gender: Gender, weight: number) {
  if (gender === Gender.Male) {
    return FAOMale(weight).toString();
  }

  return FAOFemale(weight).toString();
}

// =round(1279 + 18.3 * weight + 2.3 * yearfrac(C2,today()) - if(gender="女",338,0),0)
export function calRedman(gender: Gender, weight: number, birth: Date) {
  const temp = new Decimal(weight)
    .times(18.3)
    .add(1279)
    .add(new Decimal(yearfrac(birth, new Date())).times(2.3));

  if (gender === Gender.Female) return temp.minus(338).toString();

  return temp.toString();
}
