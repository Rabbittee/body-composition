import { useState } from 'react';
import { OptionEntity, OptionType } from './Options';
import { ResultValue } from './ResultValue';

type Props = {
  optionType: OptionType;
};

export function ResultList({ optionType: { title, options } }: Props) {
  const [selected, setSelected] = useState<OptionEntity>(options[0]);

  return (
    <div className="flex flex-col-reverse md:flex-col">
      <select
        className="select select-ghost pl-1 text-xs text-blueGray focus:outline-0 md:mb-1 md:text-base"
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

      <ResultValue option={selected} title={title} />
    </div>
  );
}
