import { Gender } from '../../../models';

export const testCase = [
  {
    birth: '1979-07-22',
    height: 180,
    weight: 40,
    gender: Gender.Male,
    bodyFat: 20,
    expected: {
        calMifflinStJeor: '1310',
        calKatchMcArdle: '1061',
        calOxfordEquation: '1161'
    }
  },
  {
    birth: '2001-04-29',
    height: 155,
    weight: 40,
    gender: Gender.Female,
    bodyFat: 34,
    expected: {
        calMifflinStJeor: '1097.75',
        calKatchMcArdle: '940',
        calOxfordEquation: '1078'
    }
  }
]
