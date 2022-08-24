import { calcDubois } from '../dubois';
import expectedFile from '../../../testcase/expectd.json';
import testCaseFile from '../../../testcase/input.json';

const jsonTo = (json) => JSON.parse(JSON.stringify(json));

const expected = jsonTo(expectedFile);
const testCases = jsonTo(testCaseFile);

describe('BSA - calcDubois', () => {
  test.concurrent.each(testCases)('case index($#)', async (bodyInfo) => {
    const index = testCases.indexOf(bodyInfo);
    expect(calcDubois(bodyInfo)).toBe(expected[index].BSA.doubois);
  });
});
