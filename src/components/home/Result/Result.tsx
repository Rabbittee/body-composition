import { ResultItemType } from './Options';
import { ResultItem } from './ResultItem';

export function Result() {
  const isEnum = (type: number | string) => isNaN(Number(type));
  const types = Object.keys(ResultItemType) as Array<keyof typeof ResultItemType>;
  const list = types.filter(isEnum);

  return (
    <div className=" -mx-12">
      <div className="carousel overflow-y-hidden">
        {list.map((type) => (
          <div className="carousel-item pl-12 pr-8">
            <div>
              <ResultItem type={ResultItemType[type]} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
