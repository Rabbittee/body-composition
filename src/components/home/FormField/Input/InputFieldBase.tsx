import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import { InputFieldType, INPUT_TYPE } from '../InputFieldType';

type Props = {
  type: InputFieldType;
  defaultValue?: string;
};

export function InputFieldBase({ type, defaultValue }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const inputType = INPUT_TYPE[type];

  const { text, type: fieldType = 'text', name, placeholder } = inputType;

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-blueGray">{text}</span>
      </label>

      <input
        {...register(name)}
        type={fieldType}
        className={clsx(
          'input input-bordered w-full appearance-none text-blueGray',
          errors[name] && 'input-error'
        )}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {errors[name] && <p className="text-red-500">{errors[name]?.message as string}</p>}
    </div>
  );
}
