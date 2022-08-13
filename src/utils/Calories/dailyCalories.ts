import Decimal from 'decimal.js';
import { BodyInfo, Activity, Gender } from 'models';

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

//round(min(0.007184*(height*0.725)*(weight*0.425)*24*(vlookup(BMI(age, gender))*(actionvalue(actionType, gender)))
export function calDailyCalories(bodyInfo: BodyInfo) {
  const { gender, activity } = bodyInfo;
  const ratio = CaloriesParameters[gender][activity];

  try {
    const _BMR = Object.values(BMR).map((func) => func(bodyInfo));

    const min = Math.min(
      ..._BMR.map((val) => (typeof val === 'string' ? Number(val) : Number(val[1])))
    );

    return new Decimal(min).times(ratio).round().toString();
  } catch {
    return '-';
  }
}
