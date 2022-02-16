/* eslint-disable import/prefer-default-export */

import tokens from 'config/constants/tokens';
import { Token } from 'config/constants/types';
import { getAddress } from './addressHelpers';

export const useFetchBanner = (symbol:string) => {
    return `/images/guildpad-assets/${symbol}Banner.png`
}

export const useFetchPadBG = (symbol:string) => {
    return `/images/guildpad-assets/${symbol}PadBG.png`
}

export const getImageUrlFromToken = (token: Token) => {
    const address = getAddress(token.symbol === 'BNB' ? tokens.wbnb.address : token.address)
    return `/images/tokens/${address}.${token.iconExtension ?? 'svg'}`
  }