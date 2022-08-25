import { calcOxfordEquation } from '../oxfordEquation';
import { testFn } from '../../../testcase';
import { Expected } from 'models';

const getAns = (expected: Expected) => expected.BMR.oxfordEquation;

describe(`BMR - calcOxfordEquation`, testFn(getAns, calcOxfordEquation));
