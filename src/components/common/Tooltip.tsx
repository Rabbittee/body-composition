import { useTranslation } from 'react-i18next';
import { InformationCircleIcon } from '@heroicons/react/solid';
import { isNil } from 'ramda';

type Props = {
  text?: string;
};

export function Tooltip({ text }: Props) {
  const { t } = useTranslation();
  if (isNil(text)) {
    return null;
  }

  return (
    <div className="tooltip ml-1" data-tip={t(text)}>
      <InformationCircleIcon className="h-4 w-4 text-teal" />
    </div>
  );
}
