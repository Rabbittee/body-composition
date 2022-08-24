import testCaseInput from './input.json';
import testCaseExpected from './expected.json';
import { BodyInfo, Expected } from '../models';

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

export const testFn = (getAns: Function, fn: Function) => () => {
  test.concurrent.each(testCases)('case index($#)', async (caseData) => {
    expect(fn(caseData.input)).toBe(getAns(caseData.expected));
  });
};
