import React from 'react'
import { Props } from './index.d'
import Iconloader from '../Iconloader'
import { StyledButton, StyledMiniBox } from './styled'
import { P, TextWrapper } from '../Text'

const Button = ({ title, iconType, icon, children, style }: Props) => {
  return (
    <StyledButton variant="text" className="icon-button" >
      <StyledMiniBox style={style}>
        <TextWrapper className="with-animation-enlarge">
          <P fsize="0.7em">
            {icon && <Iconloader type={iconType} name={icon} />}
            {title ?? children}
          </P>
        </TextWrapper>
      </StyledMiniBox>
    </StyledButton>
  )
}

export default Button
