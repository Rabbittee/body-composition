import { calMifflinStJeor } from '../mifflinStJeor';
import  { testCase }  from './testCase';

describe('BMR - calMifflinStJeor', () => {
  test.concurrent.each(testCase)(
    'case index($#)',
    async ({expected, ...bodyInfo}) => {
      expect(calMifflinStJeor(bodyInfo))
        .toBe(expected['calMifflinStJeor']);
    }
  );
})