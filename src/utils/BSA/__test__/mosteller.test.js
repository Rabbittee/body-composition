import { calcMosteller } from '../mosteller';
import { expected, testCases } from '../../../testcase';

describe('BSA - calcMosteller', () => {
  test.concurrent.each(testCases)('case index($#)', async (bodyInfo) => {
    const index = testCases.indexOf(bodyInfo);
    expect(calcMosteller(bodyInfo)).toBe(expected[index].BSA.mosteller);
  });
});
