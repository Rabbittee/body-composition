const BRMOptions = [
  'Robertson and Reid',
  'Revised Harris-Benedict',
  'Mifflin-St Jeor',
  'Katch-McArdle',
  'Oxford Equation',
];

const TDEEOptions = ['FAO, 1957', 'Redman, 2014'];

const BSAOptions = ['Dubois', 'Dubois, Corrected', 'Yu, 2013', 'Haycock, 1978', 'Mosteller, 1987'];

export enum ResultItemType {
  BMR,
  TDEE,
  BSA,
}

export const ITEM_TYPE = {
  [ResultItemType.BMR]: { text: '基礎代謝率', options: BRMOptions },
  [ResultItemType.TDEE]: { text: 'TDEE', options: TDEEOptions },
  [ResultItemType.BSA]: { text: '體表面積', options: BSAOptions },
};
