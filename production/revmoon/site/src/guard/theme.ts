const SESSION_NAME = 'Revmoon@ThemeMode';

const actions = {
  save: (mode: string): void => {
    localStorage.setItem(SESSION_NAME, mode);
  },
  get: (): string => {
    const theme = localStorage.getItem(SESSION_NAME);

    return theme || 'light';
  },
};

export default actions;
