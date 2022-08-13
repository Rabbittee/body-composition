import { OptionType } from './Options';
import { ResultText } from './ResultText';

type Props = {
  optionType: OptionType;
};

export function ResultEntity({ optionType: { options } }: Props) {
  return (
    <>
      {options.map((option) => (
        <ResultText key={option.text} option={option} />
      ))}
    </>
  );
}
