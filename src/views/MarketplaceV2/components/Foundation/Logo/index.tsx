import React from 'react'
import styled from 'styled-components'
import { useFetchImg } from 'utils/assetFetch'
import { PADDING } from 'views/MarketplaceV2/styles/constants'
import { LOGO } from 'views/MarketplaceV2/constants/config'
import SvgIcon from '../SvgIcon'

const LogoHolder = styled.div<{ max?: number }>`
  max-width: ${(props) => props.max ?? 80}px;
  width: ${(props) => (props.max ? `calc(${props.max}px - 5px)` : '70px')};
  padding: ${PADDING.SP}px;

  // ${(props) => `
  //   ${props.theme.mediaQueries.sm} {
  //     max-width: ${props.max ? `calc(${props.max}px + 15px)` : '90px'}; 
  //     width: ${props.max ? `calc(${props.max - 5}px + 15px)` : '85px'};
  //   }
  //   ${props.theme.mediaQueries.xl} {
  //     max-width: ${props.max ? `calc(${props.max}px + 50px)` : '140px'}; 
  //     width: ${props.max ? `calc(${props.max - 5}px + 50px)` : '135px'};
  //   }
  // `}
  
`

export default function Logo({ size }: { size?: number }) {
  const src = useFetchImg({ name: LOGO })
  const Img = <img alt="logo" src={src} />

  return (
    <LogoHolder max={size}>
      <SvgIcon Img={Img} />
    </LogoHolder>
  )
}

Logo.defaultProps = {
  size: null,
}
