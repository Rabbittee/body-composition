import { calcMifflinStJeor } from '../mifflinStJeor';
import { testCase } from './testCase';

describe('BMR - calMifflinStJeor', () => {
  test.concurrent.each(testCase)('case index($#)', async ({ expected, bodyInfo }) => {
    expect(calcMifflinStJeor(bodyInfo)).toBe(expected.calMifflinStJeor);
  });
});
