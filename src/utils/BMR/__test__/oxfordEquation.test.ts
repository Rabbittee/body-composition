import { calcOxfordEquation } from '../oxfordEquation';
import { testCase } from './testCase';

describe('BMR - calOxfordEquation', () => {
  test.concurrent.each(testCase)('case index($#)', async ({ expected, bodyInfo }) => {
    expect(calcOxfordEquation(bodyInfo)).toBe(expected.calOxfordEquation);
  });
});
