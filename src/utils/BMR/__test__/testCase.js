import { Gender } from '../../../models';

export const testCase = [
  {
    birth: '1979-07-22',
    height: 180,
    weight: 40,
    gender: Gender.Male,
    bodyFat: 20,
    waist: 65,
    expected: {
        calMifflinStJeor: '1310',
        calKatchMcArdle: '1061',
        calOxfordEquation: '1161',
        calRevisedHarrisBenedict: '1238',
        calRobertsonAndReid: {
          Low: '1053',
          Mean: '1231',
          High: '1410'
        }
    }
  },
  {
    birth: '2001-04-29',
    height: 155,
    weight: 40,
    gender: Gender.Female,
    bodyFat: 34,
    waist: 60,
    expected: {
        calMifflinStJeor: '1098',
        calKatchMcArdle: '940',
        calOxfordEquation: '1078',
        calRevisedHarrisBenedict: '1202',
        calRobertsonAndReid: {
          Low: '935',
          Mean: '1089',
          High: '1242'
        }
    }
  },
  {
    birth: '1960-12-31',
    height: 190,
    weight: 75,
    gender: Gender.Female,
    bodyFat: 8,
    waist: 77,
    expected: {
        calMifflinStJeor: '1467',
        calKatchMcArdle: '1860',
        calOxfordEquation: '1327',
        calRevisedHarrisBenedict: '1461',
        calRobertsonAndReid: {
          Low: '1285',
          Mean: '1517',
          High: '1750'
        }
    }
  }
]
