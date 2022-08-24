import { calcFAO } from '../FAO';
import { testCases } from '../../../testcase';

describe('test FAO()', () => {
  test.concurrent.each(testCases)(
    'TDEE FAO case - index: %#, %o',
    async ({
      expected: {
        TDEE: { FAO },
      },
      input: bodyInfo,
    }) => {
      expect(calcFAO(bodyInfo)).toBe(FAO);
    }
  );
});
