import {
  calcRobertsonAndReidHigh,
  calcRobertsonAndReidLow,
  calcRobertsonAndReidMean,
} from '../robertsonAndReid';

import { testFn } from '../../../testcase';
import { Expected } from 'models';

const getHighAns = (expected: Expected) => expected.BMR.robertsonAndReidHigh;
describe(`BMR - calcRobertsonAndReidHigh`, testFn(getHighAns, calcRobertsonAndReidHigh));

const getLowAns = (expected: Expected) => expected.BMR.robertsonAndReidLow;
describe(`BMR - calcRobertsonAndReidHigh`, testFn(getLowAns, calcRobertsonAndReidLow));

const getMeanAns = (expected: Expected) => expected.BMR.robertsonAndReidMean;
describe(`BMR - calcRobertsonAndReidHigh`, testFn(getMeanAns, calcRobertsonAndReidMean));
