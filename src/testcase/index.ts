import testCaseInput from './input.json';
import testCaseExpected from './expected.json';
import { BodyInfo, Expected } from '../models';

interface TestCase {
  input: BodyInfo;
  expected: Expected;
}

export const testCases: TestCase[] = testCaseInput.map((item, i) => {
  return {
    input: item as BodyInfo,
    expected: testCaseExpected[i] as Expected,
  };
});
