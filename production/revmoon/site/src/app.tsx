import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import Routes from './routes';

import commonPt from './translations/pt/common.json';
import commonEn from './translations/en/common.json';

import languageActions from './guard/language';

i18next.init({
  interpolation: { escapeValue: false },
  lng: languageActions.get(),
  resources: {
    en: {
      common: commonEn,
    },
    pt: {
      common: commonPt,
    },
  },
});

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <Routes />
    </I18nextProvider>
  );
};

export default App;
