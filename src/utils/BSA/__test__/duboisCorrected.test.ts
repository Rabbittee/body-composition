import { calcDuboisCorrected } from '../duboisCorrected';
import { testFn } from '../../../testcase';
import { Expected } from 'models';

const getAns = (expected: Expected) => expected.BSA.duboisCorrected;

describe(`BSA - calcDuboisCorrected`, testFn(getAns, calcDuboisCorrected));
