import { Activity, Gender, Pregnancy, TestCaseBase } from '../../../models';

type Expected = {
  calMifflinStJeor: string;
  calKatchMcArdle: string;
  calOxfordEquation: string;
  calRevisedHarrisBenedict: string;
  calRobertsonAndReid: {
    Low: string;
    Mean: string;
    High: string;
  };
};

type TestCase = TestCaseBase<Expected>;

type TestCases = TestCase[];

export const testCase: TestCases = [
  {
    bodyInfo: {
      birth: '1979-07-22',
      height: 180,
      weight: 40,
      gender: Gender.Male,
      bodyFat: 20,
      waist: 65,
      activity: Activity.Sedentary,
      pregnancy: Pregnancy.None,
    },
    expected: {
      calMifflinStJeor: '1310',
      calKatchMcArdle: '1061',
      calOxfordEquation: '1161',
      calRevisedHarrisBenedict: '1238',
      calRobertsonAndReid: {
        Low: '1053',
        Mean: '1231',
        High: '1410',
      },
    },
  },
  {
    bodyInfo: {
      birth: '2001-04-29',
      height: 155,
      weight: 40,
      gender: Gender.Female,
      bodyFat: 34,
      waist: 60,
      activity: Activity.Sedentary,
      pregnancy: Pregnancy.None,
    },
    expected: {
      calMifflinStJeor: '1098',
      calKatchMcArdle: '940',
      calOxfordEquation: '1078',
      calRevisedHarrisBenedict: '1202',
      calRobertsonAndReid: {
        Low: '935',
        Mean: '1089',
        High: '1242',
      },
    },
  },
  {
    bodyInfo: {
      birth: '1960-12-31',
      height: 190,
      weight: 75,
      gender: Gender.Female,
      bodyFat: 8,
      waist: 77,
      activity: Activity.Sedentary,
      pregnancy: Pregnancy.None,
    },
    expected: {
      calMifflinStJeor: '1467',
      calKatchMcArdle: '1860',
      calOxfordEquation: '1327',
      calRevisedHarrisBenedict: '1461',
      calRobertsonAndReid: {
        Low: '1285',
        Mean: '1517',
        High: '1750',
      },
    },
  },
];
