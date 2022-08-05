import { FieldProps, FieldType } from './FieldType';
import { FieldBase } from './FieldBase';

function HeightField(props: FieldProps) {
  return <FieldBase type={FieldType.Height} {...props} />;
}

export default HeightField;
