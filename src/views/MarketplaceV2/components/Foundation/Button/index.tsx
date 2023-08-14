import React from 'react'
import { Props } from './index.d'
import Iconloader from '../Iconloader'
import { StyledButton } from './styled'
import { MiniBox } from '../Box'
import { P } from '../Text'

const Button = (props: Props) => {
  const { children, iconType, icon } = props
  return (
    <StyledButton variant="text">
      <MiniBox>
        <Iconloader type={iconType} name={icon} /> { children }
      </MiniBox>
    </StyledButton>
  )
}

export default Button
