/** 活動量 */
export enum Activity {
  /** 幾乎不動 */
  Sedentary = '幾乎不動',

  /** 輕度 */
  Light = '輕度',

  /** 中度 */
  Moderate = '中度',

  /** 重度 */
  Active = '重度',

  /** 極重度 */
  VeryActive = '極重度',
}

/** 性別 */
export enum Gender {
  /** 男 */
  Male = '男',

  /** 女 */
  Female = '女',
}

/** 懷孕哺乳狀態 */
export enum Pregnancy {
  None = '',

  /** 第一孕期 */
  FirstTrimester = '第一孕期',

  /** 第二孕期 */
  SecondTrimester = '第二孕期',

  /** 第三孕期 */
  ThirdTrimester = '第三孕期',

  /** 哺乳 */
  Breastfeeding = '哺乳',
}

/** 圍度 */
export interface Lines {
  /** 腰圍 */
  waistLine?: number;

  /** 頸圍 */
  neckLine?: number;

  /** 臀圍 */
  hipLine?: number;
}

/** 皮摺厚度 */
export interface Skinfolds {
  /** 腹壁(mm) */
  abdominal?: number;

  /** 大腿(mm) */
  thigh?: number;

  /** 三頭(mm) */
  triceps?: number;

  /** 腸骨上(mm) */
  supraspinale?: number;
}

/** 身體參數 */
export type BodyInfo = {
  birth: string;
  gender: Gender;
  height: number;
  weight: number;
  bodyFat?: number;

  lines: Lines;
  skinfolds: Skinfolds;

  activity: Activity;
  pregnancy: Pregnancy;
};
