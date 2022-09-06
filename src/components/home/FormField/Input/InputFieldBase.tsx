import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { InputFieldType, INPUT_TYPE } from '../InputFieldType';

type Props = {
  type: InputFieldType;
  defaultValue?: string;
};

export function InputFieldBase({ type, defaultValue }: Props) {
  const { t } = useTranslation();
  const { register } = useFormContext();
  const inputType = INPUT_TYPE[type];

  const { text, type: fieldType = 'text', name, placeholder } = inputType;

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-blueGray">{t(text)}</span>
      </label>

      <input
        {...register(name)}
        type={fieldType}
        className="input input-bordered w-full appearance-none text-blueGray"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
}
