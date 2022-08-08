import { InputFieldType } from './InputFieldType';
import { InputFieldBase } from './InputFieldBase';

function BirthField() {
  return <InputFieldBase type={InputFieldType.Birth} defaultValue="2001/01/01" />;
}

export default BirthField;
