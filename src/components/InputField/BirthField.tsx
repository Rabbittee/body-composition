import { InputFieldProps, InputFieldType } from './InputFieldType';
import { InputFieldBase } from './InputFieldBase';

function BirthField({ value = '2001-01-01', onChange = () => {} }: InputFieldProps) {
  return <InputFieldBase type={InputFieldType.Birth} value={value} onChange={onChange} />;
}

export default BirthField;
