import { ChangeEventHandler } from 'react';

export type FieldProps = {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export enum FieldType {
  Height,
  Weight,
  BodyFat,
}

type FieldTypeMap = {
  [key in FieldType]: {
    text: string;
    type: FieldType;
    placeholder: string;
  };
};

export const INPUT_TYPE: FieldTypeMap = {
  [FieldType.Height]: { text: '身高', type: FieldType.Height, placeholder: '175' },
  [FieldType.Weight]: { text: '體重', type: FieldType.Weight, placeholder: '70' },
  [FieldType.BodyFat]: { text: '體脂', type: FieldType.BodyFat, placeholder: '20' },
};
