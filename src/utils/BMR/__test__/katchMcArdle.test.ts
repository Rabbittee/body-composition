import { calcKatchMcArdle } from '../katchMcArdle';
import { testCase } from './testCase';

describe('BMR - calKatchMcArdle', () => {
  test.concurrent.each(testCase)('case index($#)', async ({ expected, bodyInfo }) => {
    expect(calcKatchMcArdle(bodyInfo)).toBe(expected.calKatchMcArdle);
  });
});
