import { FieldProps } from './FieldType';

function BirthField({ value = '2001-01-01', onChange = () => {} }: FieldProps) {
  return (
    <label className="input-group">
      <span>生日</span>
      <input
        className="input input-bordered flex-1"
        type="date"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default BirthField;
