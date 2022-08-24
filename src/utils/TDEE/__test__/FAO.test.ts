import { calcFAO } from '../FAO';
import { testFn } from '../../../testcase';
import { Expected } from 'models';

const getAns = (expected: Expected) => expected.TDEE.FAO;

describe('TDEE - calcFAO', testFn(getAns, calcFAO));
