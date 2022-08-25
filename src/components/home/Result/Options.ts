import { Formula } from '../../../models';
import { BMR, BodyMass, BSA, Calories, TDEE } from '../../../utils';

export type OptionEntity = {
  text: string;
  desc?: string;
  fn: Formula;
};

const DailyCaloriesOptions: OptionEntity[] = [
  {
    text: 'common.dailyCalories',
    desc: 'info.dailyCalories',
    fn: Calories.calcDailyCalories,
  },
];

const BodyMassOptions: OptionEntity[] = [
  { text: 'BMI', fn: BodyMass.calcBMI },
  { text: 'common.WHtR', desc: 'info.WHtR', fn: BodyMass.calcWHtR },
];

const BRMOptions: OptionEntity[] = [
  {
    text: 'Robertson and Reid(Mean)',
    desc: 'info.basalMetabolism',
    fn: BMR.calcRobertsonAndReidMean,
  },
  {
    text: 'Robertson and Reid(Low)',
    desc: 'info.basalMetabolism',
    fn: BMR.calcRobertsonAndReidLow,
  },
  {
    text: 'Robertson and Reid(High)',
    desc: 'info.basalMetabolism',
    fn: BMR.calcRobertsonAndReidHigh,
  },
  { text: 'Revised Harris-Benedict', fn: BMR.calcRevisedHarrisBenedict },
  { text: 'Mifflin-St Jeor', fn: BMR.calcMifflinStJeor },
  { text: 'Katch-McArdle', desc: 'info.KatchMcArdle', fn: BMR.calcKatchMcArdle },
  { text: 'Oxford Equation', fn: BMR.calcOxfordEquation },
];

const TDEEOptions: OptionEntity[] = [
  { text: 'FAO, 1957', desc: 'info.FAO', fn: TDEE.calcFAO },
  { text: 'Redman, 2014', desc: 'info.Redman', fn: TDEE.calcRedman },
];

const BSAOptions: OptionEntity[] = [
  { text: 'Dubois', desc: 'info.Dubois', fn: BSA.calcDubois },
  { text: 'Dubois, Corrected', desc: 'info.DuboisCorrected', fn: BSA.calcDuboisCorrected },
  { text: 'Yu, 2013', desc: 'info.Yu', fn: BSA.calcYu },
  { text: 'Haycock, 1978', desc: 'info.Haycock', fn: BSA.calcHaycock },
  { text: 'Mosteller, 1987', fn: BSA.calcMosteller },
];

export enum ResultItemType {
  DailyCalories = 'DailyCalories',
  BodyMass = 'BodyMass',
  BMR = 'BMR',
  TDEE = 'TDEE',
  BSA = 'BSA',
}

export type OptionType = {
  title: string;
  options: OptionEntity[];
  expanded?: boolean;
};

type ResultOption = Record<ResultItemType, OptionType>;

export const ITEM_TYPE: ResultOption = {
  [ResultItemType.DailyCalories]: {
    title: '',
    options: DailyCaloriesOptions,
    expanded: true,
  },
  [ResultItemType.BodyMass]: { title: '', options: BodyMassOptions, expanded: true },
  [ResultItemType.BMR]: { title: 'common.BMR', options: BRMOptions },
  [ResultItemType.TDEE]: { title: 'common.tdee', options: TDEEOptions },
  [ResultItemType.BSA]: { title: 'common.BSA', options: BSAOptions },
};
