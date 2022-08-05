import { FieldProps, FieldType } from './FieldType';
import { FieldBase } from './FieldBase';

function BodyFatField(props: FieldProps) {
  return <FieldBase type={FieldType.BodyFat} {...props} />;
}

export default BodyFatField;
