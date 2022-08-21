import { calcFAO } from '../FAO';
import testCases from './testCase';

describe('test redman()', () => {
  test.concurrent.each(testCases.testBasic)(
    'Basic case - index: %#, %o',
    async ({ expected: { FAO }, bodyInfo }) => {
      expect(calcFAO(bodyInfo)).toBe(FAO);
    }
  );

  test.concurrent.each(testCases.testDate)(
    'Date case - index: %#, %o',
    async ({ expected: { FAO }, bodyInfo }) => {
      expect(calcFAO(bodyInfo)).toBe(FAO);
    }
  );

  test.concurrent.each(testCases.testGender)(
    'Gender case - index: %#, %o',
    async ({ expected: { FAO }, bodyInfo }) => {
      expect(calcFAO(bodyInfo)).toBe(FAO);
    }
  );

  test.concurrent.each(testCases.testWeight)(
    'Weight case - index: %#, %o',
    async ({ expected: { FAO }, bodyInfo }) => {
      expect(calcFAO(bodyInfo)).toBe(FAO);
    }
  );

  test.concurrent.each(testCases.complexCase)(
    'Complex case - index: %#, %o',
    async ({ expected: { FAO }, bodyInfo }) => {
      expect(calcFAO(bodyInfo)).toBe(FAO);
    }
  );
});
