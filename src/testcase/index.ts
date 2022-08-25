import testCaseInput from './input.json';
import testCaseExpected from './expected.json';
import { BodyInfo, Expected, Formula } from '../models';

interface TestCase {
  input: BodyInfo;
  expected: Expected;
}

const testCases: TestCase[] = testCaseInput.map((item, i) => {
  return {
    input: item as BodyInfo,
    expected: testCaseExpected[i] as Expected,
  };
});

export const testFn = (getAns: (expected: Expected) => string, fn: Formula) => () => {
  test.concurrent.each(testCases)('case index($#)', async ({ input, expected }) => {
    expect(fn(input)).toBe(getAns(expected));
  });
};
