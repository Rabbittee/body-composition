import { calcWHtR } from '../WHtR';
import { testFn } from '../../../testcase';
import { Expected } from 'models';

const getAns = (expected: Expected) => expected.WHtR;

describe(`BodyMass - calcWHtR`, testFn(getAns, calcWHtR));
