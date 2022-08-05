import { InputFieldProps, InputFieldType } from './InputFieldType';
import { InputFieldBase } from './InputFieldBase';

function BodyFatField(props: InputFieldProps) {
  return <InputFieldBase type={InputFieldType.BodyFat} {...props} />;
}

export default BodyFatField;
