import React, { useContext } from 'react'

import Spinner from '@/presentation/components/spinner'
import { FormContext } from '@/presentation/contexts'

import Styles from './styles.scss'

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(FormContext)

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {state.isLoading && <Spinner className={Styles.spinner} />}
      {errorState.main && <span className={Styles.error}>{errorState.main}</span>}
    </div>
  )
}

export default FormStatus
