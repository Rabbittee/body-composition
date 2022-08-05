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
    text: string;
    placeholder: string;
  };
};

export const INPUT_TYPE: FieldTypeMap = {
  [InputFieldType.Birth]: { text: '生日', placeholder: '2001-01-01' },
  [InputFieldType.Height]: { text: '身高', placeholder: '175' },
  [InputFieldType.Weight]: { text: '體重', placeholder: '70' },
  [InputFieldType.BodyFat]: { text: '體脂', placeholder: '20' },
};
