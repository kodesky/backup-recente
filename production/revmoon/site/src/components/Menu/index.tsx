/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { Container } from './styles';
import { Wrapper } from '..';

import logoWhite from '../../assets/images/logo-white.png';
import logoBlack from '../../assets/images/logo-black.png';

import languageActions from '../../guard/language';

interface MenuProps {
  theme: string;
  onThemeChange: any;
}

const Menu: React.FC<MenuProps> = ({ theme, onThemeChange }) => {
  const history = useHistory();
  const [t, i18n] = useTranslation('common');

  const [dropdownLanguage, setDropdownLanguage] = React.useState(false);
  const [language, setLanguage] = React.useState(languageActions.get());

  function handleLanguageSelector(lang) {
    i18n.changeLanguage(lang);

    setLanguage(lang);
    setDropdownLanguage(false);
    languageActions.save(lang);
  }

  return (
    <Wrapper>
      <Container>
        <img
          src={theme === 'light' ? logoBlack : logoWhite}
          alt="REVMOON Logo"
          className="logo"
          onClick={() => history.push('/')}
        />
        <ul className="nav">
          <li>
            <Link to="/register">{t('menu.register')}</Link>
          </li>
          <li>
            <button type="button" className="join" onClick={() => history.push('/login')}>
              {t('menu.login')}
            </button>
          </li>
          <li className="language">
            <button type="button" onClick={() => setDropdownLanguage(!dropdownLanguage)}>
              {language === 'pt' ? (
                <img src="https://www.countryflags.io/pt/flat/64.png" alt="REVMOON Portugal" height="24px" />
              ) : (
                <img src="https://www.countryflags.io/us/flat/64.png" alt="REVMOON US" height="24px" />
              )}
              {language === 'pt' ? 'Português' : 'English'}
            </button>
            {dropdownLanguage && (
              <ul>
                {language === 'en' && (
                  <li onClick={() => handleLanguageSelector('pt')}>
                    <img src="https://www.countryflags.io/pt/flat/64.png" alt="REVMOON Portugal" height="24px" />
                    Português
                  </li>
                )}
                {language === 'pt' && (
                  <li onClick={() => handleLanguageSelector('en')}>
                    <img src="https://www.countryflags.io/us/flat/64.png" alt="REVMOON US" height="24px" />
                    English
                  </li>
                )}
              </ul>
            )}
          </li>
          <li>
            <button
              className="theme-mode"
              type="button"
              onClick={() => onThemeChange(theme === 'light' ? 'dark' : 'light')}
            >
              {theme === 'light' ? <FaRegMoon /> : <FaRegSun />}
            </button>
          </li>
        </ul>
      </Container>
    </Wrapper>
  );
};

Menu.propTypes = {
  theme: PropTypes.string.isRequired,
  onThemeChange: PropTypes.func.isRequired,
};

export default Menu;
