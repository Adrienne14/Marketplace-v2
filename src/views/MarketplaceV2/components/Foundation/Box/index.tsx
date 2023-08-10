import React from 'react'
import styled from 'styled-components'
import { COLORS, DEFAULT_BORDERS, PADDING } from 'views/MarketplaceV2/styles/constants'
import { useFetchImg } from 'utils/assetFetch'
import useTheme from 'hooks/useTheme'
import SvgIcon from '../SvgIcon'
import { H4, P, TextWrapper } from '../Text'
import Link from '../Anchor'

export default function Box() {
  // temporary
  const { theme } = useTheme()
  const image = { name: 'Promotional Art', folder: 'background' }
  const src = useFetchImg(image)
  const Img = <img alt="logo" src={src} />

  return (
    <BoxContainer className="main-drop-shadow">
      <SvgIcon Img={Img} />
      <TextWrapper align="center">
        <Link href="/marketplace/nft" className='shc-nav'>
          <H4 fsize="0.9em" color={theme.colors.MGG_accent1}>
            Click here to buy
          </H4>
        </Link>
        <P fsize="0.7em">Until x/x lorem ipsum</P>
      </TextWrapper>
    </BoxContainer>
  )
}

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

  ${({ theme }) => `
    ${theme.mediaQueries.lg} {
      padding: ${PADDING.CONTAINER.LG}px;
    }
  `}
`

export const MiniBox = styled.div`
  border-radius: 5px;
  border: ${DEFAULT_BORDERS};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => (theme.colors.text)};
  padding: 5px;
  margin: 5px 0;
  font-size: 1em;
  background-color: #131737;
`
