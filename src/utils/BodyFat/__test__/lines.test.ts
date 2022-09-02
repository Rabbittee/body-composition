import { calcLines } from '../lines';
import { testFn } from '../../../testcase';
import { Expected } from 'models';

const getAns = (expected: Expected) => expected.bodyFat.lines;

describe(`BodyFat - calcLines`, testFn(getAns, calcLines));
