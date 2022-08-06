import Decimal from 'decimal.js';
import { yearfrac } from 'formula';
import { BodyInfo, Gender } from '../../models';

// BMR = 88.362 + (13.397 × weight[kg]) + (4.799 × height[cm]) - (5.677 × age[y])
function calMale(height: number, weight: number, age: Decimal) {
  return new Decimal(88.362)
    .add(new Decimal(13.397).times(weight))
    .add(new Decimal(4.799).times(height))
    .minus(new Decimal(5.677).times(age))
    .round();
}

// BMR = 447.593 + (9.247 × weight[kg]) + (3.098 × height[cm]) - (4.330 × age[y])
function calFemale(height: number, weight: number, age: Decimal) {
  return new Decimal(447.593)
    .add(new Decimal(9.247).times(weight))
    .add(new Decimal(3.098).times(height))
    .minus(new Decimal(4.33).times(age))
    .round();
}

export function calRevisedHarrisBenedict(bodyInfo: BodyInfo) {
  const { height, weight, gender, birth } = bodyInfo;
  const age = new Decimal(yearfrac(birth, new Date())).round();

  if (gender === Gender.Male) {
    return calMale(height, weight, age).toString();
  }

  return calFemale(height, weight, age).toString();
}
