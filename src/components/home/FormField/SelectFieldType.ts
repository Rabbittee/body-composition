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
    text: 'common.gender',
    sourceType: Gender,
  },
  [SelectFieldType.Activity]: {
    name: 'activity',
    text: 'common.activity',
    sourceType: Activity,
    defaultIndex: 2,
  },
  [SelectFieldType.Pregnancy]: {
    name: 'pregnancy',
    text: 'common.pregnancy',
    sourceType: Pregnancy,
  },
};
