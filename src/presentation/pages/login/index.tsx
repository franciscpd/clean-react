import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'
import { FormContext } from '@/presentation/contexts'
import { Validation } from '@/presentation/protocols'
import { Authentication } from '@/domain/usecases'

import Styles from './styles.scss'

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const history = useHistory()
  const [state, setState] = useState({
    isLoading: false,
    data: {
      email: '',
      password: ''
    },
    errors: {
      email: '',
      password: '',
      main: ''
    }
  })

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        email: validation.validate('email', state.data.email),
        password: validation.validate('password', state.data.password)
      }
    }))
  }, [state.data.email, state.data.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.errors.email || state.errors.password) {
        return
      }

      setState({ ...state, isLoading: true })
      const account = await authentication.auth({
        email: state.data.email,
        password: state.data.password
      })

      localStorage.setItem('accessToken', account.accessToken)
      history.replace('/')
    } catch (error) {
      setState({ ...state, isLoading: false, errors: { ...state.errors, main: error.message } })
    }
  }

  return (<div className={Styles.login}>
    <LoginHeader />
    <FormContext.Provider value={{ state, setState }}>
      <form className={Styles.form} onSubmit={handleSubmit} data-testid="form">
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <button data-testid="submit" disabled={Boolean(state.errors.email || state.errors.password)} className={Styles.submit} type="submit">Entrar</button>
        <Link className={Styles.link} to="/signup" data-testid="signup">
          Criar conta
        </Link>
        <FormStatus />
      </form>
    </FormContext.Provider>
    <Footer />
  </div>)
}

export default Login
