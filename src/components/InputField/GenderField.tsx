import { ChangeEventHandler } from 'react';
import { Gender } from '../../models';

type Props = {
  value?: Gender;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

export default function GenderField({ value = Gender.Male, onChange = () => {} }: Props) {
  return (
    <label className="input-group">
      <span>性別</span>

      <select className="select select-bordered flex-1" value={value} onChange={onChange}>
        <option>Male</option>
        <option>Female</option>
      </select>
    </label>
  );
}
