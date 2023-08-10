import styled from 'styled-components'
import { FONTSIZE, FONTSTYLE, SCREEN_SIZE } from 'views/MarketplaceV2/styles/constants'

export const TextWrapper = styled.div<{ align?: string; lineHeight?: string }>`
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

const CommonFontProp = styled.div<{ fsize?: string; color?: string; fstyle?: string }>`
  ${(props) => `
    font-size: ${props.fsize ?? '1em'};
    color: ${props.color ?? props.theme.colors.text}; 
    ${
      props.fstyle &&
      `
    font-family: ${props.fstyle};
  `
    }
  `}
`

export const H6 = styled(CommonFontProp).attrs({ as: 'h2' })<{ fsize?: string; fstyle?: string }>``
export const H5 = styled(CommonFontProp).attrs({ as: 'h2' })<{ fsize?: string; fstyle?: string }>``
export const H4 = styled(CommonFontProp).attrs({ as: 'h4' })<{ fsize?: string; fstyle?: string }>``
export const H3 = styled(CommonFontProp).attrs({ as: 'h2' })<{ fsize?: string; fstyle?: string }>``
export const H2 = styled(CommonFontProp).attrs({ as: 'h2' })<{ fsize?: string; fstyle?: string }>``
export const H1 = styled(CommonFontProp).attrs({ as: 'h1' })<{ fsize?: string; fstyle?: string }>``
export const P = styled(CommonFontProp).attrs({ as: 'p' })<{ fsize?: string; fstyle?: string }>``
