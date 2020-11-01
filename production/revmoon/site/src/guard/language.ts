const SESSION_NAME = 'Revmoon@Language';

const actions = {
  save: (lang: string): void => {
    localStorage.setItem(SESSION_NAME, lang);
  },
  get: (): string => {
    const language = localStorage.getItem(SESSION_NAME);

    return language || 'pt';
  },
};

export default actions;
