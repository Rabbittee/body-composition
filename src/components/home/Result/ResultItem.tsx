import { InformationCircleIcon } from '@heroicons/react/solid';
import { ITEM_TYPE, ResultItemType } from './Options';

type Props = {
  type: ResultItemType;
  value: number;
};

function ResultItem({ type, value }: Props) {
  const { title, options } = ITEM_TYPE[type];

  return (
    <div>
      <select className="select select-ghost mb-2 text-blueGray focus:outline-0">
        {options.map((o) => (
          <option key={o.text}>{o.text}</option>
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
