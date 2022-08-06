import { Gender } from '../../models';
import { BMR, BSA, TDEE } from '../../utils';

type OptionEntity = {
  text: string;
  desc?: string;
  fn?: (...args: (number & Date & Gender)[]) => string | string[];
};

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
  BMR,
  TDEE,
  BSA,
}

type OptionType = {
  title: string;
  options: OptionEntity[];
};

export const ITEM_TYPE: { [key in ResultItemType]: OptionType } = {
  [ResultItemType.BMR]: { title: '基礎代謝率', options: BRMOptions },
  [ResultItemType.TDEE]: { title: 'TDEE', options: TDEEOptions },
  [ResultItemType.BSA]: { title: '體表面積', options: BSAOptions },
};
