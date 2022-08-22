const Gender = {
  Male: '男',
  Female: '女',
};

const Activity = {
  Sedentary: '幾乎不動',
  Light: '輕度',
  Moderate: '中度',
  Active: '重度',
  VeryActive: '極重度',
};

const Pregnancy = {
  None: '',
  FirstTrimester: '第一孕期',
  SecondTrimester: '第二孕期',
  ThirdTrimester: '第三孕期',
  Breastfeeding: '哺乳',
};

const inputSort = [
  'birth',
  'gender',
  'height',
  'weight',
  {
    key: 'lines',
    sub: ['waistLine', 'neckLine', 'hipLine'],
  },
  {
    key: 'skinfolds',
    sub: ['abdominal', 'thigh', 'triceps', 'supraspinale'],
  },
  'bodyFat',
  'activity',
  'pregnancy',
];

const cases = [
  {
    birth: '1970-07-22',
    gender: Gender.Male,
    height: 180,
    weight: 65,
    lines: {
      waistLine: 79,
      neckLine: 36,
      hipLine: 95,
    },
    skinfolds: {
      abdominal: 16,
      thigh: 11,
      triceps: 6,
      supraspinale: 20,
    },
    bodyFat: 18,
    activity: Activity.Sedentary,
    pregnancy: Pregnancy.None,
  },
];

function formatTestCase(obj) {
  return inputSort
    .map((key) => {
      if (typeof key === 'object') {
        return key.sub.map((subKey) => obj[key.key][subKey]);
      }
      return obj[key];
    })
    .flat();
}

function getTestCase(i) {
  return formatTestCase(cases[i]);
}
