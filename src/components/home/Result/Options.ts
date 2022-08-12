import BodyMass from 'utils/BodyMass';
import { BodyInfo } from '../../../models';
import { BMR, BSA, TDEE } from '../../../utils';

export type OptionEntity = {
  text: string;
  desc?: string;
  fn: (bodyInfo: BodyInfo) => string | string[];
};

const DailyCaloriesOptions: OptionEntity[] = [
  { text: '每日熱量攝取建議	', desc: '根據活動量及最低BMR計算', fn: BMR.calRobertsonAndReid },
];

const BodyMassOptions: OptionEntity[] = [
  { text: 'BMI', fn: BodyMass.calBMI },
  { text: '腰身高比', desc: '根據活動量及最低BMR計算', fn: BodyMass.calWHtR },
];

const BRMOptions: OptionEntity[] = [
  { text: 'Robertson and Reid', desc: '適用於肥胖者', fn: BMR.calRobertsonAndReid },
  { text: 'Revised Harris-Benedict', fn: BMR.calRevisedHarrisBenedict },
  { text: 'Mifflin-St Jeor', fn: BMR.calMifflinStJeor },
  { text: 'Katch-McArdle', desc: '計算包含體脂', fn: BMR.calKatchMcArdle },
  { text: 'Oxford Equation', fn: BMR.calOxfordEquation },
];

const TDEEOptions: OptionEntity[] = [
  { text: 'FAO, 1957', desc: '來自FAO的營養研究', fn: TDEE.calFAO },
  { text: 'Redman, 2014', desc: '來自雙標水研究', fn: TDEE.calRedman },
];

const BSAOptions: OptionEntity[] = [
  { text: 'Dubois', desc: '肥胖者會低估3-5%', fn: BSA.calDubois },
  { text: 'Dubois, Corrected', desc: '校正肥胖不準確', fn: BSA.calDuboisCorrected },
  { text: 'Yu, 2013', desc: '研究來自台灣工人', fn: BSA.calYu },
  { text: 'Haycock, 1978', desc: '可適用BSA 0.2-2.0(嬰兒適用)', fn: BSA.calHaycock },
  { text: 'Mosteller, 1987', fn: BSA.calMosteller },
];

export enum ResultItemType {
  DailyCalories,
  BodyMass,
  BMR,
  TDEE,
  BSA,
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
