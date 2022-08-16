import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import TRANSLATIONS_ZH from 'locales/zhTW.json';
import TRANSLATIONS_EN from 'locales/en.json';

const resources = {
  en: {
    translation: TRANSLATIONS_EN,
  },
  zh: {
    translation: TRANSLATIONS_ZH,
  },
};

i18n
  .use(detector) //偵測瀏覽器語言
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection: {
      order: [
        'querystring',
        'subdomain',
        'path',
        'navigator',
        'cookie',
        'localStorage',
        'sessionStorage',
        'htmlTag',
      ],
    },
    resources,
    fallbackLng: 'zh',
    saveMissing: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
