import { calMifflinStJeor } from '../mifflinStJeor';
import  { testCase }  from './testCase';

test.each(testCase)(
  'test calMifflinStJeor',
  ({expected, ...bodyInfo}) => {
    expect(calMifflinStJeor(bodyInfo))
      .toBe(expected['calMifflinStJeor']);
  }
);