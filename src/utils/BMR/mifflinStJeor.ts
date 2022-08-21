import Decimal from 'decimal.js';
import { yearfrac } from 'formula';
import { formulaGuard } from 'utils/formulaHelper';
import { BodyInfo, Gender } from '../../models';

// # Men
// BMR = 10 x weight[kg] + 6.25 x height[cm] - 5 x age[y] + 5
// # Women
// BMR = 10 x weight[kg] + 6.25 x height[cm] - 5 x age[y] - 161
function fn(bodyInfo: BodyInfo) {
  const { height, weight, gender, birth } = bodyInfo;

  return new Decimal(new Decimal(10).times(weight))
    .plus(new Decimal(6.25).times(height))
    .minus(new Decimal(yearfrac(birth, new Date())).ceil().times(5))
    .add(gender === Gender.Male ? 5 : -161)
    .round()
    .toString();
}

export const calcMifflinStJeor = formulaGuard(fn);
