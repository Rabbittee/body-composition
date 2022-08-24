import { calcDubois } from '../dubois';
import { testFn } from '../../../testcase';
import { Expected } from 'models';

const getAns = (expected: Expected) => expected.BSA.doubois;

describe(`BSA - calcDubois`, testFn(getAns, calcDubois));
