import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { RiLockPasswordFill, RiUser5Line } from 'react-icons/ri'

import { Page, Grid, Col, Card, Flex, Divider } from '../styles/pages/Login'

import Input from '../components/Input'
import Button from '../components/Button'

function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <>
      <Helmet>
        <title>Atlas Loja - Entrar na conta</title>
      </Helmet>
      <Page>
        <Grid>
          <Col left>
            <img
              src={require('../assets/logo-white.png')}
              alt="Atlas Loja - Login"
            />
            <h1>Faça seu login na plataforma</h1>
          </Col>
          <Col>
            <Card>
              <Input
                leftIcon
                Icon={RiUser5Line}
                inputProps={{
                  placeholder: 'Informe seu e-mail'
                }}
                value={email}
                onChange={setEmail}
              />
              <Input
                leftIcon
                Icon={RiLockPasswordFill}
                inputProps={{
                  placeholder: 'Informe sua senha'
                }}
                isPassword
                value={password}
                onChange={setPassword}
              />
              <Link to="/forgot">Esqueci minha senha</Link>
              <Button backgroundColor="var(--primary)" color="#fff">
                Fazer login
              </Button>
              <Divider />
              <Button backgroundColor="#000" color="#fff">
                Cadastrar com e-mail
              </Button>
              <Flex>
                <Button
                  backgroundColor="rgba(59, 89, 152, 0.2)"
                  color="#3b5998"
                >
                  Facebook
                </Button>
                <Button
                  backgroundColor="rgba(199, 22, 16, 0.2)"
                  color="#c71610"
                >
                  Google
                </Button>
              </Flex>
            </Card>
          </Col>
        </Grid>
      </Page>
    </>
  )
}

export default Login
