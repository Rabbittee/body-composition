import Decimal from 'decimal.js';
import { Gender } from '../../models';

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
