import { calcRedman } from '../redman';
import { testFn } from '../../../testcase';
import { Expected } from 'models';

const getAns = (expected: Expected) => expected.TDEE.redman;

describe('TDEE - Redman', testFn(getAns, calcRedman));
