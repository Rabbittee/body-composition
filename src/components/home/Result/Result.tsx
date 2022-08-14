import { genList } from 'utils/EnumHelper';
import { ResultItemType } from './Options';
import { ResultItem } from './ResultItem';

export function Result() {
  const list = genList(ResultItemType);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {list.map(({ key }) => (
        <ResultItem key={key} type={ResultItemType[key]} />
      ))}
    </div>
  );
}
