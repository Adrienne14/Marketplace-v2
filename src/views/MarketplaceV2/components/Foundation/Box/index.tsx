import React from 'react'
import styled from 'styled-components'
import { Margins, Paddings } from 'views/MarketplaceV2/styles/index.d'
import { COLORS, DEFAULT_BORDERS, customSpacingProps } from 'views/MarketplaceV2/styles/constants'

const Box: React.FC<React.HTMLAttributes<HTMLDivElement>>= ({children, ...props}):JSX.Element => {
  return (
    <Container {...props}>
      <Wrapper>
      {children}
      </Wrapper>
    </Container>
  )
}

export default Box

const Container = styled.div`
  background: ${COLORS.CARD};
  background: ${COLORS.GRADIENT_CARD};
  padding: 2em;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  width: 100%;
`
const Wrapper = styled.div`
  width: 100%;

  // ${({theme}) => theme.mediaQueries.md} {
  //   width: 55%;
  // }
`

type MiniBoxProps = {
  justify?: string;
  align?: string
} & Margins & Paddings

export const MiniBox = styled.div<MiniBoxProps>`
  border-radius: 5px;
  border: ${DEFAULT_BORDERS};
  display: flex;
  justify-content: ${({justify}) => (justify ?? 'center')};
  align-items: ${({align}) => (align ?? 'center')};
  color: ${({theme}) => (theme.colors.text)};
  padding: 5px;
  margin: 5px 0;
  ${({ p, pt, pb, pl, pr }) => customSpacingProps({ p, pt, pb, pl, pr })}
  ${({ m, mt, mb, ml, mr }) => customSpacingProps({ m, mt, mb, ml, mr })}
  
  font-size: 1em;
  background-color: #131737;
`
export const OptionBox = styled.div`
  background-color: ${COLORS.CONTAINER};
`