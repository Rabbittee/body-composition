import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

export type InputFieldProps = {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export enum InputFieldType {
  Birth,
  Height,
  Weight,
  BodyFat,
  Waist,
}

type FieldTypeMap = {
  [key in InputFieldType]: {
    type?: HTMLInputTypeAttribute;
    name: string;
    text: string;
    placeholder: string;
  };
};

export const INPUT_TYPE: FieldTypeMap = {
  [InputFieldType.Birth]: {
    name: 'birth',
    type: 'date',
    text: 'common.birth',
    placeholder: '2001-01-01',
  },
  [InputFieldType.Height]: { name: 'height', text: 'common.height', placeholder: '175' },
  [InputFieldType.Weight]: { name: 'weight', text: 'common.weight', placeholder: '70' },
  [InputFieldType.BodyFat]: { name: 'bodyFat', text: 'common.bodyFat', placeholder: '20' },
  [InputFieldType.Waist]: { name: 'waist', text: 'common.waistLine', placeholder: '79' },
};
