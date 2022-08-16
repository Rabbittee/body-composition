import { useTranslation } from 'react-i18next';
import { CONFIG } from 'config';

export function Header() {
  const { t } = useTranslation();

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <div className="text-blueGray-light">
          <span>{t('common.source')}</span>
          <a href={CONFIG.sourceLink} target="_blank" rel="noopener noreferrer" className="link">
            {t('meta.source')}
          </a>
        </div>
      </div>

      <div className="text-blueGray">{t('meta.slogan')}</div>

      <div className=" text-2xl font-black uppercase text-teal md:text-5xl">Body Composition</div>
    </div>
  );
}
