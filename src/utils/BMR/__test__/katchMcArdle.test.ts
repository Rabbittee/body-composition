import { calKatchMcArdle } from '../katchMcArdle';
import { testCase } from './testCase';

describe('BMR - calKatchMcArdle', () => {
  test.concurrent.each(testCase)('case index($#)', async ({ expected, bodyInfo }) => {
    expect(calKatchMcArdle(bodyInfo)).toBe(expected.calKatchMcArdle);
  });
});
