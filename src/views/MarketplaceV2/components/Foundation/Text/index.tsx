import styled from 'styled-components'
import { FONTSIZE, FONTSTYLE, SCREEN_SIZE } from 'views/MarketplaceV2/styles/constants'

type WrapperProps = {
  align?: string
  lineHeight?: string
}

type TextProps = {
  fsize?: string
  fstyle?: string
  weight?: number
}

export const TextWrapper = styled.div<WrapperProps>`
  font-size: ${FONTSIZE.SM};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1em;
  ${(props) =>
    props &&
    `
  text-align: ${props.align};
  line-height: ${props.lineHeight};
  `}

  ${({ theme }) => `
    ${theme.mediaQueries.sm} {
      font-size: ${FONTSIZE.MD};
    }
    ${theme.mediaQueries.md} {
      font-size: ${FONTSIZE.LG};
    }
    ${theme.mediaQueries.xl} {
      font-size: ${FONTSIZE.XL};
    }
  `}
  ${SCREEN_SIZE.xxl} {
    font-size: ${FONTSIZE.XXL};
  }
`

const CommonFontProp = styled.div<TextProps>`
  ${(props) => `
    font-size: ${props.fsize ?? '1em'};
    color: ${props.color ?? props.theme.colors.text}; 
  `}

  ${({ fstyle }) =>
    fstyle &&
    `
    font-family: ${fstyle};
  `}

  ${({ weight }) => weight && `font-weight: ${weight}`};
`

export const H6 = styled(CommonFontProp).attrs({ as: 'h2' })<TextProps>``
export const H5 = styled(CommonFontProp).attrs({ as: 'h2' })<TextProps>``
export const H4 = styled(CommonFontProp).attrs({ as: 'h4' })<TextProps>``
export const H3 = styled(CommonFontProp).attrs({ as: 'h2' })<TextProps>``
export const H2 = styled(CommonFontProp).attrs({ as: 'h2' })<TextProps>``
export const H1 = styled(CommonFontProp).attrs({ as: 'h1' })<TextProps>``
export const P = styled(CommonFontProp).attrs({ as: 'p' })<TextProps>``
