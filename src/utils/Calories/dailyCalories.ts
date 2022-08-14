import Decimal from 'decimal.js';
import { BodyInfo, Activity, Gender } from 'models';
import { calRobertsonAndReidHigh, calRobertsonAndReidLow } from 'utils/BMR';

import { BMR } from '../';

export const CaloriesParameters = {
  [Gender.Male]: {
    [Activity.Sedentary]: 1.3,
    [Activity.Light]: 1.6,
    [Activity.Moderate]: 1.7,
    [Activity.Active]: 2.1,
    [Activity.VeryActive]: 2.4,
  },
  [Gender.Female]: {
    [Activity.Sedentary]: 1.3,
    [Activity.Light]: 1.5,
    [Activity.Moderate]: 1.6,
    [Activity.Active]: 1.9,
    [Activity.VeryActive]: 2.2,
  },
};

const skipFunc = [calRobertsonAndReidHigh, calRobertsonAndReidLow];

//round(min(0.007184*(height*0.725)*(weight*0.425)*24*(vlookup(BMI(age, gender))*(actionvalue(actionType, gender)))
export function calDailyCalories(bodyInfo: BodyInfo) {
  const { gender, activity } = bodyInfo;
  const ratio = CaloriesParameters[gender][activity];

  try {
    const BMRs = Object.values(BMR)
      .filter((func) => !skipFunc.includes(func))
      .map((func) => func(bodyInfo));

    const min = Math.min(...BMRs.map(Number));

    return new Decimal(min).times(ratio).round().toString();
  } catch {
    return '-';
  }
}
