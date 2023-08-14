import { Button as MGGButton} from '@metagg/mgg-uikit'
import React from 'react'
import { Props } from './index.d'


const Button = (props:Props) => {
  return (
    <MGGButton>
      {props.title}
    </MGGButton>
  )
}

export default Button