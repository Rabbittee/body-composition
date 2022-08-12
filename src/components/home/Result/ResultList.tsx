import clsx from 'clsx';
import { Tooltip } from 'components/common';
import { useEffect, useState } from 'react';
import { useStore } from '../../../store';
import { OptionEntity, OptionType } from './Options';

type Props = {
  option: OptionType;
};

export function ResultList({ option: { title, options } }: Props) {
  const bodyInfo = useStore((state) => state.bodyInfo);
  const [value, setValue] = useState<string | string[]>('');
  const [selected, setSelected] = useState<OptionEntity>(options[0]);

  useEffect(() => {
    if (!bodyInfo) return;
    const result = selected.fn(bodyInfo);
    setValue(result);
  }, [bodyInfo, selected]);

  return (
    <div>
      <select
        className="select select-ghost mb-2 text-blueGray focus:outline-0"
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

      <div className="flex items-center space-x-1 text-3xl font-black text-teal">
        {title}
        <Tooltip text={selected.desc} />
      </div>

      <div
        className={clsx(
          'font-black text-teal',
          value.length > 7 ? 'text-5xl leading-snug' : 'text-9xl'
        )}
      >
        {Array.isArray(value) ? value[0] : value}
      </div>
    </div>
  );
}
