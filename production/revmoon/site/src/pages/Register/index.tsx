import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { Transition, animated } from 'react-spring/renderprops';
import InputMask from 'react-input-mask';

import Default from '../../layouts/Default/index';
import { Wrapper } from '../../components';
import { Container } from './styles';

const Register: React.FC = () => {
  const [step, setStep] = useState(0);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [affiliateCode, setAffiliateCode] = useState('');
  const [terms, setTerms] = useState(false);

  const [t] = useTranslation('common');

  async function handleNext() {
    setStep((oldState) => oldState + 1);
  }

  const steps = [
    (style) => (
      <animated.input
        autoFocus
        style={{ ...style }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleNext();
          }
        }}
      />
    ),
    (style) => (
      <animated.input
        autoFocus
        style={{ ...style }}
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
      <animated.input
        autoFocus
        style={{ ...style }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleNext();
          }
        }}
      />
    ),
    (style) => (
      <animated.div style={{ ...style }}>
        <InputMask
          mask="99/99/9999"
          autoFocus
          value={birthDate}
          onChange={(e) => {
            setBirthDate(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleNext();
            }
          }}
        />
      </animated.div>
    ),
    (style) => (
      <animated.input
        autoFocus
        style={{ ...style }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleNext();
          }
        }}
      />
    ),
    (style) => (
      <animated.input
        autoFocus
        style={{ ...style }}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleNext();
          }
        }}
      />
    ),
    (style) => (
      <animated.input
        autoFocus
        style={{ ...style }}
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleNext();
          }
        }}
      />
    ),
    (style) => (
      <animated.input
        autoFocus
        style={{ ...style }}
        value={affiliateCode}
        onChange={(e) => setAffiliateCode(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleNext();
          }
        }}
      />
    ),
    (style) => (
      <animated.input
        autoFocus
        style={{ ...style }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleNext();
          }
        }}
      />
    ),
  ];

  const messages = [
    t('register.welcome'),
    t('register.enterUsername', { firstName: name.split(' ')[0] }),
    t('register.enterPassword'),
    t('register.enterBirthDate'),
    t('register.enterEmail'),
    t('register.enterAddress'),
    t('register.enterPostalCode'),
    t('register.enterAffiliateCode'),
    t('register.acceptTerms'),
    t('register.success'),
  ];

  return (
    <Default>
      <Wrapper>
        <Container>
          <h1>{messages[step]}</h1>
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
          <br />
          <button type="button" onClick={handleNext}>
            <FiChevronRight />
          </button>
        </Container>
      </Wrapper>
    </Default>
  );
};

export default Register;
