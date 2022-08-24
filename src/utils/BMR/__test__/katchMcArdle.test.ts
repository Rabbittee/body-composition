import { calcKatchMcArdle } from '../katchMcArdle';
import { testFn } from '../../../testcase';
import { Expected } from 'models';

const getAns = (expected: Expected) => expected.BMR.katchMcArdle;

describe(`BMR - calcKatchMcArdle`, testFn(getAns, calcKatchMcArdle));
