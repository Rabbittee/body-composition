import { calcMosteller } from '../mosteller';
import { testFn } from '../../../testcase';
import { Expected } from 'models';

const getAns = (expected: Expected) => expected.BSA.mosteller;

describe(`BSA - calcMosteller`, testFn(getAns, calcMosteller));
