import React from 'react'

import Styles from './styles.scss'

type Props = React.HTMLAttributes<HTMLDivElement>

const Spinner: React.FC<Props> = (props: Props) => (
  <div {...props} className={[Styles.spinner, props.className].join(' ')}>
    <div />
    <div />
    <div />
    <div />
  </div>
)

export default Spinner
