import React from 'react'
import { Flex } from '@metagg/mgg-uikit'
import { GoogleDriveLink } from 'views/MarketplaceV2/constants/config'
import { QueryType, useQueryAsset } from 'hooks/useMarketplaceV2'
import { Display } from './styled'
import SvgIcon from '../Foundation/SvgIcon'


type Props = {
  spriteName: string
  width?: number
  height?: number
  style?: any
  hideBg?: boolean
}

const getHashId = (str: string): string => {
  const parts = str.split('#');
  return parts.length > 1 ? parts[1] : '';
}
const SpriteDisplay = ({ spriteName, width, height, style, hideBg }: Props) => {
  const spriteId = useQueryAsset({
    name: spriteName,
    type: QueryType.SPRITES,
  })
  const w = width ?? 130
  const h = height ?? 130
  const src = `https://metasaga-warriors-api-o485.vercel.app/api/image/${getHashId(spriteName)}`
  const Img = <img alt="logo" src={src} />
  return !hideBg ? (
    <Display bg={src} style={style}>
      <SvgIcon Img={Img} width={w} height={h} />
    </Display>
  ) : (
    <Flex alignItems='center' justifyContent='center' style={style}>
      <SvgIcon Img={Img} width={w} height={h} />
    </Flex>
  )
}

export default SpriteDisplay

SpriteDisplay.defaultProps = {
  width: 130,
  height: 130,
  style: {},
  hideBg: false,
}
