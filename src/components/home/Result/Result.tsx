import { ResultItemType } from './Options';
import ResultItem from './ResultItem';

function Result() {
  return (
    <div>
      <div className="mt-8 grid grid-cols-3 gap-4">
        <ResultItem type={ResultItemType.DailyCalories} />

        <ResultItem type={ResultItemType.BodyMass} />

        <ResultItem type={ResultItemType.BMR} />

        <ResultItem type={ResultItemType.TDEE} />

        <ResultItem type={ResultItemType.BSA} />
      </div>
    </div>
  );
}

export default Result;
