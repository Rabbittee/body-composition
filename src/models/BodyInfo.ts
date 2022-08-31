/** 活動量 */
export enum Activity {
  /** 幾乎不動 */
  Sedentary,

  /** 輕度 */
  Light,

  /** 中度 */
  Moderate,

  /** 重度 */
  Active,

  /** 極重度 */
  VeryActive,
}

/** 性別 */
export enum Gender {
  /** 男 */
  Male,

  /** 女 */
  Female,
}

/** 懷孕哺乳狀態 */
export enum Pregnancy {
  None,

  /** 第一孕期 */
  FirstTrimester,

  /** 第二孕期 */
  SecondTrimester,

  /** 第三孕期 */
  ThirdTrimester,

  /** 哺乳 */
  Breastfeeding,
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
