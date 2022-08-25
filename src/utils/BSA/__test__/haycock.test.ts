import { calcHaycock } from '../haycock';
import { testFn } from '../../../testcase';
import { Expected } from 'models';

const getAns = (expected: Expected) => expected.BSA.haycock;

describe(`BSA - calcHaycock`, testFn(getAns, calcHaycock));
