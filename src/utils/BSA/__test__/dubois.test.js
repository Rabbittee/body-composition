import { calcDubois } from '../dubois';
import { expected, testCases } from '../../../testcase';

describe('BSA - calcDubois', () => {
  test.concurrent.each(testCases)('case index($#)', async (bodyInfo) => {
    const index = testCases.indexOf(bodyInfo);
    expect(calcDubois(bodyInfo)).toBe(expected[index].BSA.doubois);
  });
});
