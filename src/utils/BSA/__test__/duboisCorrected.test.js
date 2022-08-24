import { calcDuboisCorrected } from '../duboisCorrected';
import { expected, testCases } from '../../../testcase';

describe('BSA - calcDuboisCorrected', () => {
  test.concurrent.each(testCases)('case index($#)', async (bodyInfo) => {
    const index = testCases.indexOf(bodyInfo);
    expect(calcDuboisCorrected(bodyInfo)).toBe(expected[index].BSA.duboisCorrected);
  });
});
