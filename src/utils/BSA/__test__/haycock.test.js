import { calcHaycock } from '../haycock';
import { expected, testCases } from '../../../testcase';

describe('BSA - calcDubois', () => {
  test.concurrent.each(testCases)('case index($#)', async (bodyInfo) => {
    const index = testCases.indexOf(bodyInfo);
    expect(calcHaycock(bodyInfo)).toBe(expected[index].BSA.haycock);
  });
});
