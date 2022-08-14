import  { calRobertsonAndReid } from '../robertsonAndReid';
import  { testCase }  from './testCase';

describe('BMR - calRobertsonAndReid', () => {
  test.concurrent.each(testCase)(
    'case index($#)',
    async ({expected, ...bodyInfo}) => {
      expect(calRobertsonAndReid(bodyInfo))
        .toStrictEqual(expected['calRobertsonAndReid']);
    }
  );
})
