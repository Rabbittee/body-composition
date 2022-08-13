import { Activity, Gender, Pregnancy } from 'models';

export enum SelectFieldType {
  Gender,
  Activity,
  Pregnancy,
}

type FieldTypeMap = {
  [key in SelectFieldType]: {
    name: string;
    text: string;
    sourceType: typeof Gender | typeof Activity | typeof Pregnancy;
    defaultIndex?: number;
  };
};

export const SELECT_TYPE: FieldTypeMap = {
  [SelectFieldType.Gender]: {
    name: 'gender',
    text: '性別',
    sourceType: Gender,
  },
  [SelectFieldType.Activity]: {
    name: 'activity',
    text: '活動量',
    sourceType: Activity,
    defaultIndex: 2,
  },
  [SelectFieldType.Pregnancy]: {
    name: 'pregnancy',
    text: '懷孕哺乳狀態',
    sourceType: Pregnancy,
  },
};
