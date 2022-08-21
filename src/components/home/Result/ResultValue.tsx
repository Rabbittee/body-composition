import clsx from 'clsx';
import { Tooltip } from 'components/common';
import { useMemo } from 'react';
import { useStore } from 'store';
import { OptionEntity } from './Options';

type Props = {
  option: OptionEntity;
  title?: string;
};

export function ResultValue({ option, title }: Props) {
  const bodyInfo = useStore((state) => state.bodyInfo);
  const { text, desc, fn } = option;

  const value = useMemo(() => fn(bodyInfo), [bodyInfo, fn]);

  return (
    <div>
      <div className="flex items-center space-x-1 text-sm font-black text-teal md:text-3xl">
        {title ?? text}

        <Tooltip text={desc} />
      </div>

      <div
        className={clsx(
          'font-bold text-teal md:font-black',
          value.length > 7 ? 'text-2xl leading-snug md:text-5xl' : 'text-4xl md:text-7xl'
        )}
      >
        {value}
      </div>
    </div>
  );
}
