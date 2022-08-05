import { FieldProps, FieldType, INPUT_TYPE } from './FieldType';

type Props = FieldProps & {
  type: FieldType;
};

export function FieldBase({ value = '', type, onChange = () => {} }: Props) {
  const inputType = INPUT_TYPE[type];

  return (
    <label className="input-group">
      <span>{inputType.text}</span>
      <input
        type="text"
        className="input input-bordered"
        placeholder={inputType.placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
