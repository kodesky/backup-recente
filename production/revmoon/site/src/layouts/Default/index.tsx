import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { Styles } from '../../components';
import themes from '../../components/themes';

import Menu from '../../components/Menu/index';
import Footer from '../../components/Footer/index';

import themeGuard from '../../guard/theme';

interface DefaultProps {
  children: React.ReactNode;
}

const Default: React.FC<DefaultProps> = ({ children }) => {
  const [theme, setTheme] = React.useState(themeGuard.get());

  React.useEffect(() => {
    themeGuard.save(theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === 'light' ? themes.light : themes.dark}>
      <Styles />
      <Menu theme={theme} onThemeChange={setTheme} />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

Default.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Default;
