import Decimal from 'decimal.js';
import { yearfrac } from 'formula';
import { Gender } from '../../models';

// # Men
// BMR = 10 x weight[kg] + 6.25 x height[cm] – 5 x age[y] + 5
// # Women
// BMR = 10 x weight[kg] + 6.25 x height[cm] – 5 x age[y] – 161
export function calMifflinStJeor(height: number, weight: number, gender: Gender, birth: Date) {
  return new Decimal(10)
    .times(weight)
    .plus(new Decimal(6.25).times(height))
    .minus(new Decimal(yearfrac(birth, new Date())).round().times(5))
    .add(gender === Gender.Male ? 5 : -161)
    .round()
    .toString();
}
