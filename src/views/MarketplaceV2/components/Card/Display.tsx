import React from 'react'
import { GoogleDriveLink } from 'views/MarketplaceV2/constants/config'
import { QueryType, useQueryAsset } from 'hooks/useMarketplaceV2'
import { Display } from './styled'
import SvgIcon from '../Foundation/SvgIcon'

type Props = {
  spriteName: string
  width?: number
  height?: number
  style?: any
}

const SpriteDisplay = ({ spriteName, width, height, style }: Props) => {
  const spriteId = useQueryAsset({
    name: spriteName,
    type: QueryType.SPRITES,
  })
  const w = width ?? 130
  const h = height ?? 130
  const src = GoogleDriveLink + spriteId
  const Img = <img alt="logo" src={src} />
  return (
    <Display bg={src} style={style}>
      <SvgIcon Img={Img} width={w} height={h} />
    </Display>
  )
}

export default SpriteDisplay

SpriteDisplay.defaultProps = {
  width: 130,
  height: 130,
  style: {},
}
