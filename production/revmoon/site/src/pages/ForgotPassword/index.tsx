import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Transition, animated } from 'react-spring/renderprops';
import { message } from 'antd';

import Default from '../../layouts/Default/index';
import { Wrapper } from '../../components';
import { Container } from './styles';

const ForgotPassword: React.FC = () => {
  const [step, setStep] = useState(0);

  const [username, setUsername] = useState('');

  const [t] = useTranslation('common');

  async function handleNext() {
    switch (step) {
      case 0:
        if (!username || username.length < 4) {
          return message.error('Informe um usuário válido');
        }

        return setStep(1);
      case 1:
        return setStep(0);
      default:
        return message.error('WTF??');
    }
  }

  const steps = [
    (style) => (
      <animated.input
        autoFocus
        style={{ ...style }}
        placeholder={t('forgotPassword.usernamePlaceholder')}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleNext();
          }
        }}
      />
    ),
    (style) => (
      <animated.div style={{ ...style }}>
        <h2>{t('forgotPassword.email')}</h2>
      </animated.div>
    ),
  ];

  return (
    <Default>
      <Wrapper>
        <Container>
          <h1>{step === 0 ? t('forgotPassword.welcome') : t('forgotPassword.success', { username })}</h1>
          <Transition
            native
            reset
            unique
            items={step}
            from={{ opacity: 0, transform: 'scale(0.8)' }}
            enter={{ opacity: 1, transform: 'scale(1)' }}
            leave={{ opacity: 0, transform: 'scale(0)' }}
          >
            {(idx) => {
              return steps[idx];
            }}
          </Transition>
          {step === 0 && (
            <div>
              <br />
              <button type="button" onClick={handleNext}>
                <FiChevronRight />
              </button>
            </div>
          )}
        </Container>
      </Wrapper>
    </Default>
  );
};

export default ForgotPassword;
