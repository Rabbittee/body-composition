import  { calRobertsonAndReidHigh, calRobertsonAndReidLow, calRobertsonAndReidMean } from '../robertsonAndReid';
import  { testCase }  from './testCase';

describe('BMR - calRobertsonAndReid', () => {
  test.concurrent.each(testCase)(
    'case index($#) -> Low',
    async ({expected, ...bodyInfo}) => {
      expect(calRobertsonAndReidLow(bodyInfo))
        .toStrictEqual(expected['calRobertsonAndReid']['Low']);
    }
  );

  test.concurrent.each(testCase)(
    'case index($#) -> Mean',
    async ({expected, ...bodyInfo}) => {
      expect(calRobertsonAndReidMean(bodyInfo))
        .toStrictEqual(expected['calRobertsonAndReid']['Mean']);
    }
  );

  test.concurrent.each(testCase)(
    'case index($#) -> High',
    async ({expected, ...bodyInfo}) => {
      expect(calRobertsonAndReidHigh(bodyInfo))
        .toStrictEqual(expected['calRobertsonAndReid']['High']);
    }
  );
})
