/** 活動量 */
export enum Activity {
  /** 幾乎不動 */
  Sedentary = 'sedentary',

  /** 輕度 */
  Light = 'light',

  /** 中度 */
  Moderate = 'moderate',

  /** 重度 */
  Active = 'active',

  /** 極重度 */
  VeryActive = 'veryActive',
}

/** 性別 */
export enum Gender {
  /** 男 */
  Male = 'male',

  /** 女 */
  Female = 'female',
}

/** 懷孕哺乳狀態 */
export enum Pregnancy {
  None = '',

  /** 第一孕期 */
  FirstTrimester = 'firstTrimester',

  /** 第二孕期 */
  SecondTrimester = 'secondTrimester',

  /** 第三孕期 */
  ThirdTrimester = 'thirdTrimester',

  /** 哺乳 */
  Breastfeeding = 'breastfeeding',
}

/** 圍度 */
export interface Lines {
  /** 腰圍 */
  waistLine: number;

  /** 頸圍 */
  neckLine: number;

  /** 臀圍 */
  hipLine: number;
}

/** 身體參數 */
export type BodyInfo = {
  birth: string;
  gender: Gender;
  height: number;
  weight: number;
  bodyFat: number;
  lines: Lines;

  activity: Activity;
  pregnancy: Pregnancy;
};
