import { InputFieldProps, InputFieldType, INPUT_TYPE } from './InputFieldType';

type Props = InputFieldProps & {
  type: InputFieldType;
};

export function InputFieldBase({ value = '', type, onChange = () => {} }: Props) {
  const inputType = INPUT_TYPE[type];

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-blueGray">{inputType.text}</span>
      </label>

      <input
        type={inputType.type ?? 'text'}
        className="input input-bordered flex-1 text-blueGray"
        placeholder={inputType.placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
