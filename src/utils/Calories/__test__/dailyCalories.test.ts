import { calcDailyCalories } from '../dailyCalories';
import { testFn } from '../../../testcase';
import { Expected } from 'models';

const getAns = (expected: Expected) => expected.dailyCalories;

describe(`Calories - calcDcalcDailyCaloriesubois`, testFn(getAns, calcDailyCalories));
