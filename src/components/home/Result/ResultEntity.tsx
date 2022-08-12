import clsx from 'clsx';
import { Tooltip } from 'components/common';
import { useStore } from 'store';
import { OptionType } from './Options';

type Props = {
  option: OptionType;
};

export function ResultEntity({ option: { options } }: Props) {
  const bodyInfo = useStore((state) => state.bodyInfo);

  return (
    <>
      {options.map(({ text, desc, fn }) => {
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
      })}
    </>
  );
}
