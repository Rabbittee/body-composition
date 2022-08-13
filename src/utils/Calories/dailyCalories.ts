import Decimal from 'decimal.js';
import { BodyInfo, Activity, Gender } from 'models';

import * as BMRFunc from '../BMR';
import { CaloriesParameters } from './parameters';

//round(min(0.007184*(height*0.725)*(weight*0.425)*24*(vlookup(BMI(age, gender))*(actionvalue(actionType, gender)))
export function calDailyCalories(bodyInfo: BodyInfo) {
  const { gender, activity } = bodyInfo;

  try {
    const BMR = Object.values(BMRFunc).map((func) => func(bodyInfo));

    const min = Math.min(
      ...BMR.map((val) => (typeof val !== 'string' ? Number(val[1]) : Number(val)))
    );

    const index = Object.values(Activity).indexOf(activity);

    if (gender === Gender.Male) {
      return new Decimal(min).times(CaloriesParameters.Male[index]).round().toString();
    }

    return new Decimal(min).times(CaloriesParameters.Female[index]).round().toString();
  } catch {
    return '-';
  }
}
