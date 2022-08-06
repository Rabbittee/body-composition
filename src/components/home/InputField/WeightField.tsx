import { InputFieldProps, InputFieldType } from './InputFieldType';
import { InputFieldBase } from './InputFieldBase';

function WeightField(props: InputFieldProps) {
  return <InputFieldBase type={InputFieldType.Weight} {...props} />;
}

export default WeightField;
