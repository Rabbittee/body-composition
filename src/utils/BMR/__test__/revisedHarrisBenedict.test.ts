import { calcRevisedHarrisBenedict } from '../revisedHarrisBenedict';
import { testCase } from './testCase';

describe('BMR - calRevisedHarrisBenedict', () => {
  test.concurrent.each(testCase)('case index($#)', async ({ expected, bodyInfo }) => {
    expect(calcRevisedHarrisBenedict(bodyInfo)).toBe(expected.calRevisedHarrisBenedict);
  });
});
