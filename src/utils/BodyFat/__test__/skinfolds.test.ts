import { calcSkinfolds } from '../skinfolds';
import { testFn } from '../../../testcase';
import { Expected } from 'models';

const getAns = (expected: Expected) => expected.bodyFat.skinfolds;

describe(`BodyFat - calcSkinfolds`, testFn(getAns, calcSkinfolds));
