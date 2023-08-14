import React from 'react'
import { Props } from './index.d'
import Iconloader from '../Iconloader'
import { StyledButton } from './styled'
import { MiniBox } from '../Box'
import { P, TextWrapper } from '../Text'

const Button = (props: Props) => {
  const { title, iconType, icon, children } = props
  return (
    <StyledButton variant="text" className="icon-button">
      <MiniBox>
        <TextWrapper>
          <P fsize="0.8em">
            {icon && <Iconloader type={iconType} name={icon} />}
            {title ?? children}
          </P>
        </TextWrapper>
      </MiniBox>
    </StyledButton>
  )
}

export default Button
