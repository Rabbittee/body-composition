import Decimal from 'decimal.js';
import { yearfrac } from 'formula';
import { formulaGuard } from 'utils/formulaHelper';
import { BodyInfo, Gender } from '../../models';

// 0.29288*sumSkinfolds-0.0005*sumSkinfolds^2+0.15845*age-5.76377
function bodyFitMale(sumSkinfolds: Decimal, age: Decimal) {
  return new Decimal(0.29288)
    .times(sumSkinfolds)
    .minus(new Decimal(0.0005).times(new Decimal(sumSkinfolds).pow(2)))
    .add(new Decimal(0.15845).times(age))
    .minus(5.76377);
}

// 0.29669*sumSkinfolds-0.00043*sumSkinfolds^2+0.02963*age-1.4072
function bodyFitFemale(sumSkinfolds: Decimal, age: Decimal) {
  return new Decimal(0.29669)
    .times(sumSkinfolds)
    .minus(new Decimal(0.00043).times(new Decimal(sumSkinfolds).pow(2)))
    .add(new Decimal(0.02963).times(age))
    .minus(1.4072);
}

function fn(bodyInfo: BodyInfo) {
  const { gender, birth, skinfolds } = bodyInfo;

  const skinfoldValues = Object.values(skinfolds);
  if (skinfoldValues.length !== 4 && skinfoldValues.some((v) => v === undefined)) {
    return '-';
  }

  const sumSkinfolds = Decimal.sum(...skinfoldValues);
  const age = new Decimal(yearfrac(birth, new Date()));

  if (gender === Gender.Male) {
    return bodyFitMale(sumSkinfolds, age).toFixed(1).toString();
  } else {
    return bodyFitFemale(sumSkinfolds, age).toFixed(1).toString();
  }
}

export const calcSkinfolds = formulaGuard(fn);
