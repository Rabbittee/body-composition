import { InformationCircleIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { useStore } from '../../../store';
import { ITEM_TYPE, OptionEntity, ResultItemType } from './Options';

type Props = {
  type: ResultItemType;
};

function ResultItem({ type }: Props) {
  const bodyInfo = useStore((state) => state.bodyInfo);
  const { title, options } = ITEM_TYPE[type];
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
        <InformationCircleIcon className="h-4 w-4 text-teal" />
      </div>
      <div className="text-9xl font-black text-teal">{value}</div>
    </div>
  );
}

export default ResultItem;
