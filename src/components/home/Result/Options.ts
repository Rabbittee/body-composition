import { Formula } from '../../../models';
import { BMR, BodyMass, BSA, Calories, TDEE } from '../../../utils';

export type OptionEntity = {
  text: string;
  desc?: string;
  fn: Formula;
};

const DailyCaloriesOptions: OptionEntity[] = [
  { text: '每日熱量攝取建議	', desc: '根據活動量及最低BMR計算', fn: Calories.calcDailyCalories },
];

const BodyMassOptions: OptionEntity[] = [
  { text: 'BMI', fn: BodyMass.calcBMI },
  { text: '腰身高比', desc: '根據活動量及最低BMR計算', fn: BodyMass.calcWHtR },
];

const BRMOptions: OptionEntity[] = [
  { text: 'Robertson and Reid(Mean)', desc: '適用於肥胖者', fn: BMR.calcRobertsonAndReidMean },
  { text: 'Robertson and Reid(Low)', desc: '適用於肥胖者', fn: BMR.calcRobertsonAndReidLow },
  { text: 'Robertson and Reid(High)', desc: '適用於肥胖者', fn: BMR.calcRobertsonAndReidHigh },
  { text: 'Revised Harris-Benedict', fn: BMR.calcRevisedHarrisBenedict },
  { text: 'Mifflin-St Jeor', fn: BMR.calcMifflinStJeor },
  { text: 'Katch-McArdle', desc: '計算包含體脂', fn: BMR.calcKatchMcArdle },
  { text: 'Oxford Equation', fn: BMR.calcOxfordEquation },
];

const TDEEOptions: OptionEntity[] = [
  { text: 'FAO, 1957', desc: '來自FAO的營養研究', fn: TDEE.calcFAO },
  { text: 'Redman, 2014', desc: '來自雙標水研究', fn: TDEE.calcRedman },
];

const BSAOptions: OptionEntity[] = [
  { text: 'Dubois', desc: '肥胖者會低估3-5%', fn: BSA.calcDubois },
  { text: 'Dubois, Corrected', desc: '校正肥胖不準確', fn: BSA.calcDuboisCorrected },
  { text: 'Yu, 2013', desc: '研究來自台灣工人', fn: BSA.calcYu },
  { text: 'Haycock, 1978', desc: '可適用BSA 0.2-2.0(嬰兒適用)', fn: BSA.calcHaycock },
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
  [ResultItemType.BMR]: { title: '基礎代謝率', options: BRMOptions },
  [ResultItemType.TDEE]: { title: 'TDEE', options: TDEEOptions },
  [ResultItemType.BSA]: { title: '體表面積', options: BSAOptions },
};
