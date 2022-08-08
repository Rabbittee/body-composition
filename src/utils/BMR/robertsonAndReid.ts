import Decimal from 'decimal.js';
import { yearfrac } from 'formula';
import { BodyInfo, Gender } from '../../models';
import { RobertsonReidParameters } from './parameters';

// =iferror(
//     round(0.007184 * (height ^ 0.725) * (weight ^ 0.425) * 24 * vlookup(roundup(yearfrac(birth, today()), 0), '參數'!A: G,if (Gender = "男", 2, 5), false), 0)
//     round(0.007184 * height ^ 0.725 * weight ^ 0.425 * 24 * vlookup(roundup(yearfrac(birth, today()), 0), '參數'!A: G,if (Gender = "男", 3, 6), false), 0)
//     round(0.007184 * height ^ 0.725 * weight ^ 0.425 * 24 * vlookup(roundup(yearfrac(birth, today()), 0), '參數'!A: G,if (Gender = "男", 4, 7), false), 0)
//     "無法計算"
// )

export const calRobertsonAndReid = (bodyInfo: BodyInfo) => {
  const { birth, height, weight, gender } = bodyInfo;

  try {
    const age = new Decimal(yearfrac(birth, new Date())).round();
    const index = age.minus(3).toNumber();

    const base = new Decimal(0.007184)
      .times(new Decimal(height).toPower(0.725))
      .times(new Decimal(weight).toPower(0.425))
      .times(24);

    if (gender === Gender.Male) {
      return [
        base.times(RobertsonReidParameters.Male_Low[index]),
        base.times(RobertsonReidParameters.Male_Mean[index]),
        base.times(RobertsonReidParameters.Male_High[index]),
      ].map((value) => value.round().toString());
    }
    return [
      base.times(RobertsonReidParameters.Female_Low[index]),
      base.times(RobertsonReidParameters.Female_Mean[index]),
      base.times(RobertsonReidParameters.Female_High[index]),
    ].map((value) => value.round().toString());
  } catch {
    return '-';
  }
};
