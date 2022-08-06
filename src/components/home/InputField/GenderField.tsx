import { ChangeEventHandler } from 'react';
import { useFormContext } from 'react-hook-form';
import { Gender } from '../../../models';

type Props = {
  value?: Gender;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

export default function GenderField({ value = Gender.Male, onChange = () => {} }: Props) {
  const { register } = useFormContext();

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-blueGray">性別</span>
      </label>

      <select
        {...register('gender')}
        className="select select-bordered flex-1 text-blueGray"
        value={value}
        onChange={onChange}
      >
        <option value={Gender.Male}>男</option>
        <option value={Gender.Female}>女</option>
      </select>
    </div>
  );
}
