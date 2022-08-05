import { FieldProps, FieldType } from './FieldType';
import { FieldBase } from './FieldBase';

function WeightField(props: FieldProps) {
  return <FieldBase type={FieldType.Weight} {...props} />;
}

export default WeightField;
