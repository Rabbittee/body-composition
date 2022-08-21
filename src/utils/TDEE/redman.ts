import Decimal from 'decimal.js';
import { yearfrac } from 'formula';
import { formulaGuard } from 'utils/formulaHelper';
import { BodyInfo, Gender } from '../../models';

// =round(1279 + 18.3 * weight + 2.3 * yearfrac(C2,today()) - if(gender="女",338,0),0)
export function fn(bodyInfo: BodyInfo) {
  const { gender, weight, birth } = bodyInfo;
  const temp = new Decimal(weight)
    .times(18.3)
    .add(1279)
    .add(new Decimal(yearfrac(birth, new Date())).times(2.3))
    .round();

  if (gender === Gender.Female) return temp.minus(338).toString();

  return temp.toString();
}

export const calcRedman = formulaGuard(fn);
