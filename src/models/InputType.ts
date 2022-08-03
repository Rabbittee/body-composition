export enum InputType {
  Birth,
  Height,
  Weight,
  BodyFat,
}

type InputTypeMap = {
  [key in InputType]: {
    text: string;
    type: InputType;
    placeholder: string;
  };
};

export const INPUT_TYPE: InputTypeMap = {
  [InputType.Birth]: { text: '生日', type: InputType.Birth, placeholder: '2001/01/01' },
  [InputType.Height]: { text: '身高', type: InputType.Height, placeholder: '175' },
  [InputType.Weight]: { text: '體重', type: InputType.Weight, placeholder: '70' },
  [InputType.BodyFat]: { text: '體脂', type: InputType.BodyFat, placeholder: '20' },
};
