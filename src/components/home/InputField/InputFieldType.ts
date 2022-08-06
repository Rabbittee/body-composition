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
  [InputFieldType.Birth]: { name: 'birth', type: 'date', text: '生日', placeholder: '2001-01-01' },
  [InputFieldType.Height]: { name: 'height', text: '身高', placeholder: '175' },
  [InputFieldType.Weight]: { name: 'weight', text: '體重', placeholder: '70' },
  [InputFieldType.BodyFat]: { name: 'bodyFat', text: '體脂', placeholder: '20' },
};
