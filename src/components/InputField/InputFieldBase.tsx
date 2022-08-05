import { InputFieldProps, InputFieldType, INPUT_TYPE } from './InputFieldType';

type Props = InputFieldProps & {
  type: InputFieldType;
};

export function InputFieldBase({ value = '', type, onChange = () => {} }: Props) {
  const inputType = INPUT_TYPE[type];

  return (
    <label className="input-group">
      <span>{inputType.text}</span>
      <input
        type={inputType.type ?? 'text'}
        className="input input-bordered flex-1"
        placeholder={inputType.placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
