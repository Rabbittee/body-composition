import { Gender, Activity, Pregnancy, BodyInfo, TestCaseBase } from '../../../models';

type Expected = {
  FAO: string;
  redman: string;
};

type TestCase = TestCaseBase<Expected>;

type TestCases = TestCase[];

const basicCase: BodyInfo = {
  birth: '1980-07-22',
  gender: Gender.Male,
  height: 180,
  weight: 65,
  bodyFat: 20,
  waist: 90,
  activity: Activity.Sedentary,
  pregnancy: Pregnancy.None,
};

const testBasic: TestCases = [
  {
    bodyInfo: basicCase,
    expected: {
      FAO: '3201',
      redman: '2565',
    },
  },
];

const testDate: TestCases = [
  {
    bodyInfo: {
      ...basicCase,
      birth: '1970-07-22',
    },
    expected: {
      FAO: '3201',
      redman: '2588',
    },
  },
  {
    bodyInfo: {
      ...basicCase,
      birth: '1980-07-22',
    },
    expected: {
      FAO: '3201',
      redman: '2565',
    },
  },
  {
    bodyInfo: {
      ...basicCase,
      birth: '1990-07-22',
    },
    expected: {
      FAO: '3201',
      redman: '2542',
    },
  },
];

const testGender: TestCases = [
  {
    bodyInfo: {
      ...basicCase,
      gender: Gender.Female,
    },
    expected: {
      FAO: '2590',
      redman: '2227',
    },
  },
];

const testWeight: TestCases = [
  {
    bodyInfo: {
      ...basicCase,
      weight: 65,
    },
    expected: {
      FAO: '3201',
      redman: '2565',
    },
  },
  {
    bodyInfo: {
      ...basicCase,
      weight: 80,
    },
    expected: {
      FAO: '3725',
      redman: '2840',
    },
  },
  {
    bodyInfo: {
      ...basicCase,
      weight: 100,
    },
    expected: {
      FAO: '4384',
      redman: '3206',
    },
  },
];

const complexCase: TestCases = [
  {
    bodyInfo: {
      ...basicCase,
      birth: '1990-07-22',
      gender: Gender.Male,
      weight: 65,
    },
    expected: {
      FAO: '3201',
      redman: '2542',
    },
  },
  {
    bodyInfo: {
      ...basicCase,
      birth: '2000-07-22',
      gender: Gender.Male,
      weight: 90,
    },
    expected: {
      FAO: '4059',
      redman: '2977',
    },
  },
  {
    bodyInfo: {
      ...basicCase,
      birth: '1990-07-22',
      gender: Gender.Female,
      weight: 65,
    },
    expected: {
      FAO: '2590',
      redman: '2204',
    },
  },
  {
    bodyInfo: {
      ...basicCase,
      birth: '2000-07-22',
      gender: Gender.Female,
      weight: 90,
    },
    expected: {
      FAO: '3285',
      redman: '2639',
    },
  },
];

const cases = {
  testBasic,
  testDate,
  testGender,
  testWeight,
  complexCase,
};

export default cases;
