import { ITEM_TYPE, ResultItemType } from './Options';
import { ResultEntity } from './ResultEntity';
import { ResultList } from './ResultList';

type Props = {
  type: ResultItemType;
};

function ResultItem({ type }: Props) {
  const option = ITEM_TYPE[type];

  return <>{option.expanded ? <ResultEntity option={option} /> : <ResultList option={option} />}</>;
}

export default ResultItem;
