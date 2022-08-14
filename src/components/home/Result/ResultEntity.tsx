import { OptionType } from './Options';
import { ResultValue } from './ResultValue';

type Props = {
  optionType: OptionType;
};

export function ResultEntity({ optionType: { options } }: Props) {
  return (
    <>
      {options.map((option) => (
        <ResultValue option={option} key={option.text} />
      ))}
    </>
  );
}
