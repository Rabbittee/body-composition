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

enum Estimate {
  Low = 'Low',
  Mean = 'Mean',
  High = 'High',
}

const calRobertsonAndReid = (estimate: Estimate) => (bodyInfo: BodyInfo) => {
  const { birth, height, weight, gender } = bodyInfo;

  try {
    const age = new Decimal(yearfrac(birth, new Date())).round();
    const maxAge = gender === Gender.Male ? 80 : 75;

    if (age.lessThan(3) || age.greaterThan(maxAge)) {
      return `僅支援3歲至${maxAge}歲之年齡`;
    }

    const index = age.minus(3).toNumber();

    const base = new Decimal(0.007184)
      .times(new Decimal(height).toPower(0.725))
      .times(new Decimal(weight).toPower(0.425))
      .times(24);

    let parameter = null;
    if (gender === Gender.Male) {
      parameter = RobertsonReidParameters[`Male_${estimate}`][index];
    } else {
      parameter = RobertsonReidParameters[`Female_${estimate}`][index];
    }
    return base.times(parameter).round().toString();
  } catch {
    return '-';
  }
};

export const calRobertsonAndReidLow = calRobertsonAndReid(Estimate.Low);
export const calRobertsonAndReidMean = calRobertsonAndReid(Estimate.Mean);
export const calRobertsonAndReidHigh = calRobertsonAndReid(Estimate.High);
