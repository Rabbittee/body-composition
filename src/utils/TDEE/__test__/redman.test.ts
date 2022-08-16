import { calRedman } from '../redman';
import testCases from './testCase';

describe('test redman()', () => {
  test.concurrent.each(testCases.testBasic)(
    'Basic case - index: %#, %o',
    async ({ expected: { redman }, bodyInfo }, expected) => {
      expect(calRedman(bodyInfo)).toBe(redman);
    }
  );

  test.concurrent.each(testCases.testDate)(
    'Date cases - index: %#, %o',
    async ({ expected: { redman }, bodyInfo }, expected) => {
      expect(calRedman(bodyInfo)).toBe(redman);
    }
  );

  test.concurrent.each(testCases.testGender)(
    'Gender cases - index: %#, %o',
    async ({ expected: { redman }, bodyInfo }, expected) => {
      expect(calRedman(bodyInfo)).toBe(redman);
    }
  );

  test.concurrent.each(testCases.testWeight)(
    'Weight cases - index: %#, %o',
    async ({ expected: { redman }, bodyInfo }, expected) => {
      expect(calRedman(bodyInfo)).toBe(redman);
    }
  );

  test.concurrent.each(testCases.complexCase)(
    'Complex cases - index: %#, %o',
    async ({ expected: { redman }, bodyInfo }, expected) => {
      expect(calRedman(bodyInfo)).toBe(redman);
    }
  );
});
