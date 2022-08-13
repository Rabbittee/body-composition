import clsx from 'clsx';
import { Tooltip } from 'components/common';
import { useStore } from 'store';
import { OptionEntity } from './Options';

type Props = {
  option: OptionEntity;
};

export function ResultText({ option }: Props) {
  const bodyInfo = useStore((state) => state.bodyInfo);
  const { text, desc, fn } = option;
  const value = fn(bodyInfo);

  return (
    <div key={text}>
      <div className="flex items-center space-x-1 text-3xl font-black text-teal">
        {text}

        <Tooltip text={desc} />
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
