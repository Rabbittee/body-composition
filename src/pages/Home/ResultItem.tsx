import { ITEM_TYPE, ResultItemType } from './Options';

type Props = {
  type: ResultItemType;
  value: number;
};

function ResultItem({ type, value }: Props) {
  const { text, options } = ITEM_TYPE[type];

  return (
    <div>
      <select className="select select-ghost mb-2 text-blueGray focus:outline-0">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <div className="text-3xl font-black text-teal">{text}</div>
      <div className="text-9xl font-black text-teal">{value}</div>
    </div>
  );
}

export default ResultItem;
