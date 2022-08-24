import { calcYu } from '../yu';
import { expected, testCases } from '../../../testcase';

describe('BSA - calcYu', () => {
  test.concurrent.each(testCases)('case index($#)', async (bodyInfo) => {
    const index = testCases.indexOf(bodyInfo);
    expect(calcYu(bodyInfo)).toBe(expected[index].BSA.yu);
  });
});
