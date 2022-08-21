import {
  calcRobertsonAndReidHigh,
  calcRobertsonAndReidLow,
  calcRobertsonAndReidMean,
} from '../robertsonAndReid';
import { testCase } from './testCase';

describe('BMR - calRobertsonAndReid', () => {
  test.concurrent.each(testCase)('case index($#) -> Low', async ({ expected, bodyInfo }) => {
    expect(calcRobertsonAndReidLow(bodyInfo)).toStrictEqual(expected.calRobertsonAndReid.Low);
  });

  test.concurrent.each(testCase)('case index($#) -> Mean', async ({ expected, bodyInfo }) => {
    expect(calcRobertsonAndReidMean(bodyInfo)).toStrictEqual(expected.calRobertsonAndReid.Mean);
  });

  test.concurrent.each(testCase)('case index($#) -> High', async ({ expected, bodyInfo }) => {
    expect(calcRobertsonAndReidHigh(bodyInfo)).toStrictEqual(expected.calRobertsonAndReid.High);
  });
});
