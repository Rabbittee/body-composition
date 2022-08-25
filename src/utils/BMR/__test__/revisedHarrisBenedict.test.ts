import { calcRevisedHarrisBenedict } from '../revisedHarrisBenedict';
import { testFn } from '../../../testcase';
import { Expected } from 'models';

const getAns = (expected: Expected) => expected.BMR.revisedHarrisBenedict;

describe(`BMR - calcRevisedHarrisBenedict`, testFn(getAns, calcRevisedHarrisBenedict));
