import { OptionType } from './Options';
import { ResultText } from './ResultText';

type Props = {
  optionType: OptionType;
};

export function ResultEntity({ optionType: { options } }: Props) {
  return (
    <div className="space-y-4 pt-14">
      {options.map((option) => (
        <ResultText option={option} key={option.text} />
      ))}
    </div>
  );
}
