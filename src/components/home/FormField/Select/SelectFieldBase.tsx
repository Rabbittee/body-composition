import { useFormContext } from 'react-hook-form';
import { SelectFieldType, SELECT_TYPE } from '../SelectFieldType';

type Props = {
  type: SelectFieldType;
  disabled?: boolean;
};

export function SelectFieldBase({ type, disabled = false }: Props) {
  const { register } = useFormContext();
  const { name, text, source, defaultIndex = 0 } = SELECT_TYPE[type];

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-blueGray">{text}</span>
      </label>

      <select
        className="select select-bordered flex-1 text-blueGray"
        {...register(name)}
        defaultValue={source[defaultIndex].value}
        disabled={disabled}
      >
        {source.map(({ key, value }, i) => (
          <option key={key} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
