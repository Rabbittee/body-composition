import { SelectFieldBase } from './SelectFieldBase';
import { SelectFieldType } from '../SelectFieldType';

function PregnancyField({ disabled }: { disabled: boolean }) {
  return <SelectFieldBase type={SelectFieldType.Pregnancy} disabled={disabled} />;
}

export default PregnancyField;
