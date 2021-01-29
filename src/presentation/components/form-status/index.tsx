import React, { useContext } from 'react'

import Spinner from '@/presentation/components/spinner'
import { FormContext } from '@/presentation/contexts'

import Styles from './styles.scss'

const FormStatus: React.FC = () => {
  const { state: { errors, isLoading } } = useContext(FormContext)

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {errors.main && <span className={Styles.error}>{errors.main}</span>}
    </div>
  )
}

export default FormStatus
