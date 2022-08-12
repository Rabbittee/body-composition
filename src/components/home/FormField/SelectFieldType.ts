import { Activity, Gender, Pregnancy } from 'models';
import { ChangeEventHandler } from 'react';
import { genList } from 'utils/EnumHelper';

export type InputFieldProps = {
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

export enum SelectFieldType {
  Gender,
  Activity,
  Pregnancy,
}

type Key = keyof typeof Gender | keyof typeof Activity | keyof typeof Pregnancy;

type FieldTypeMap = {
  [key in SelectFieldType]: {
    name: string;
    text: string;
    source: Array<{ key: Key; value: string }>;
    defaultIndex?: number;
  };
};

export const SELECT_TYPE: FieldTypeMap = {
  [SelectFieldType.Gender]: { name: 'gender', text: '性別', source: genList(Gender) },
  [SelectFieldType.Activity]: {
    name: 'activity',
    text: '活動量',
    source: genList(Activity),
    defaultIndex: 2,
  },
  [SelectFieldType.Pregnancy]: {
    name: 'pregnancy',
    text: '懷孕哺乳狀態',
    source: genList(Pregnancy),
  },
};
