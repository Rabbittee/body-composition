import  { calRevisedHarrisBenedict } from '../revisedHarrisBenedict';
import  { testCase }  from './testCase';

describe('BMR - calRevisedHarrisBenedict', () => {
  test.concurrent.each(testCase)(
    'case index($#)',
    async ({expected, ...bodyInfo}) => {
      expect(calRevisedHarrisBenedict(bodyInfo))
        .toBe(expected['calRevisedHarrisBenedict']);
    }
  );
})
