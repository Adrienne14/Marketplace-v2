import React from 'react'
import { Props } from './index.d'
import Iconloader from '../Iconloader'
import { StyledButton } from './styled'
import { MiniBox } from '../Box'
import { P, TextWrapper } from '../Text'

const Button = (props: Props) => {
  const { title, iconType, icon } = props
  return (
    <StyledButton variant="text" className='icon-button'>
      <MiniBox>
        <TextWrapper>
        <Iconloader type={iconType} name={icon} /> 
        {title}
        </TextWrapper>
      </MiniBox>
    </StyledButton>
  )
}

export default Button
