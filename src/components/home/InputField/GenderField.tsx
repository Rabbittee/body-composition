import { useFormContext } from 'react-hook-form';
import { Gender } from '../../../models';

export default function GenderField() {
  const { register } = useFormContext();

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-blueGray">性別</span>
      </label>

      <select {...register('gender')} className="select select-bordered flex-1 text-blueGray">
        <option value={Gender.Male}>男</option>
        <option value={Gender.Female}>女</option>
      </select>
    </div>
  );
}
