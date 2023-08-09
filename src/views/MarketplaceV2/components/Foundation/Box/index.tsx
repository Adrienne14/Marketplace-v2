import React from 'react'
import styled from 'styled-components'
import { COLORS, PADDING } from 'views/MarketplaceV2/styles/constants'
import { useFetchImg } from 'utils/assetFetch'
import useTheme from 'hooks/useTheme'
import SvgIcon from '../SvgIcon'
import { H4, P, TextWrapper } from '../Text'



const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${PADDING.CONTAINER.SP}px;
  justify-content: space-between;
  margin-bottom: 5px;
  border-radius: 4px;
  background-color: ${COLORS.CONTAINER};
  & > * {
    flex: 1;
  }

  ${({theme}) => `
    ${theme.mediaQueries.lg} {
      padding: ${PADDING.CONTAINER.LG}px;
    }
  `}
`



export default function Box() {
  // temporary
  const { theme } = useTheme()
  const image = {name: 'Promotional Art', folder: 'background'}
  const src = useFetchImg(image)
  const Img = <img alt="logo" src={src} />

  return (
    <BoxContainer className='main-drop-shadow'>
      <SvgIcon Img={Img} />
      <TextWrapper align='center'>
        <H4 fsize='0.9em' color={theme.colors.MGG_accent1}>
          Click here to buy
        </H4>
        <P fsize='0.7em'>
          Until x/x lorem ipsum
        </P>
      </TextWrapper>
    </BoxContainer>
  ) 
}
