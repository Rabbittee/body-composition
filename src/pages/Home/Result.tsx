import { ResultItemType } from './Options';
import ResultItem from './ResultItem';

function Result() {
  return (
    <div>
      <div className="mt-8 grid grid-cols-3 gap-4">
        <ResultItem type={ResultItemType.BMR} value={1760} />

        <ResultItem type={ResultItemType.TDEE} value={4059} />

        <ResultItem type={ResultItemType.BSA} value={2.03} />
      </div>
    </div>
  );
}

export default Result;
