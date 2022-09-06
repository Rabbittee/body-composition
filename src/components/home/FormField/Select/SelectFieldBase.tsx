import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { genList } from 'utils/enumHelper';
import { SelectFieldType, SELECT_TYPE } from '../SelectFieldType';

// type Key = keyof typeof Gender | keyof typeof Activity | keyof typeof Pregnancy;

type Props = {
  type: SelectFieldType;
  disabled?: boolean;
};

export function SelectFieldBase({ type, disabled = false }: Props) {
  const { t } = useTranslation();
  const { register } = useFormContext();
  const { name, text, sourceType, defaultIndex = 0 } = SELECT_TYPE[type];
  const source = genList(sourceType);

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-blueGray">{t(text)}</span>
      </label>

      <select
        className="select select-bordered flex-1 text-blueGray"
        {...register(name)}
        defaultValue={source[defaultIndex].value}
        disabled={disabled}
      >
        {source.map(({ key, value }) => (
          <option key={key} value={value}>
            {t(`enum.${name}.${key as string}`)}
          </option>
        ))}
      </select>
    </div>
  );
}
