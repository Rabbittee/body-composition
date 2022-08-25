import { calcMifflinStJeor } from '../mifflinStJeor';
import { testFn } from '../../../testcase';
import { Expected } from 'models';

const getAns = (expected: Expected) => expected.BMR.mifflinStJeor;

describe(`BMR - calcMifflinStJeor`, testFn(getAns, calcMifflinStJeor));
