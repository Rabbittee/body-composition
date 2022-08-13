import { useState } from 'react';
import { OptionEntity, OptionType } from './Options';
import { ResultText } from './ResultText';

type Props = {
  optionType: OptionType;
};

export function ResultList({ optionType: { title, options } }: Props) {
  const [selected, setSelected] = useState<OptionEntity>(options[0]);

  return (
    <div>
      <select
        className="select select-ghost min-h-8 mb-2 h-8 border-teal/20 text-blueGray focus:outline-0"
        value={selected.text}
        onChange={(e) => {
          const option = options.find(({ text }) => text === e.target.value) as OptionEntity;
          setSelected(option);
        }}
      >
        {options.map((o) => (
          <option key={o.text} value={o.text}>
            {o.text}
          </option>
        ))}
      </select>

      <ResultText option={selected} title={title} />
    </div>
  );
}
