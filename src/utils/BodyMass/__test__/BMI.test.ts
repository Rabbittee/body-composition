import { calcBMI } from '../BMI';
import { testFn } from '../../../testcase';
import { Expected } from 'models';

const getAns = (expected: Expected) => expected.BMI;

describe(`BodyMass - calcBMI`, testFn(getAns, calcBMI));
