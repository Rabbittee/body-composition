import { Gender, InputType, INPUT_TYPE } from '../models';
import { TDEE } from '../utils';

type Props = {
  type: InputType;
};

function Comp({ type }: Props) {
  const inputType = INPUT_TYPE[type];

  return (
    <label className="input-group">
      <span>{inputType.text}</span>
      <input type="text" placeholder={inputType.placeholder} className="input input-bordered" />
    </label>
  );
}

function Birth() {
  const birth = new Date('2000-01-01');
  const redman = TDEE.calRedman(Gender.Male, 60, birth);
  console.log('🚀 ~ Birth ~ TEDD: redman', redman);

  const fao = TDEE.calFAO(Gender.Male, 60);
  console.log('🚀 ~ Birth ~ TEDD: FAO', fao);

  return <Comp type={InputType.Birth} />;
}

function Height() {
  return <Comp type={InputType.Height} />;
}

function Weight() {
  return <Comp type={InputType.Weight} />;
}

function BodyFat() {
  return <Comp type={InputType.BodyFat} />;
}

const TextField = { Birth, Height, Weight, BodyFat };
export default TextField;
