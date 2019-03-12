import { Manager } from './Manager';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { CONFIG } from '../config';

const RESOURCES = {
  en: {
    translation: require('../locales/en.json'),
  },
};

export class LocaleManager extends Manager {
  public t = null;

  public reset(): void {}

  public async init(): Promise<any> {
    this.t = await i18n.use(initReactI18next).init({
      resources: RESOURCES,
      lng: CONFIG.DEFAULT_LOCALE,
      fallbackLng: CONFIG.DEFAULT_LOCALE,
      keySeparator: '.',
      interpolation: {
        escapeValue: false,
      },
      react: {
        wait: true,
      },
    });

    return Promise.resolve();
  }
}
