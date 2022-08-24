import { calcYu } from '../yu';
import { testFn } from '../../../testcase';
import { Expected } from 'models';

const getAns = (expected: Expected) => expected.BSA.yu;

describe(`BSA - calcYu`, testFn(getAns, calcYu));
