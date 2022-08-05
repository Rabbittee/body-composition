import { InputFieldProps, InputFieldType } from './InputFieldType';
import { InputFieldBase } from './InputFieldBase';

function HeightField(props: InputFieldProps) {
  return <InputFieldBase type={InputFieldType.Height} {...props} />;
}

export default HeightField;
