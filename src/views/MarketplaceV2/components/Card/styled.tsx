import React from 'react'
import styled from 'styled-components'
import { Button as MGGButton } from '@metagg/mgg-uikit'
import { COLORS } from 'views/MarketplaceV2/styles/constants'
import { TextWrapper } from '../Foundation/Text'
import { backgroundProp } from '../Foundation/layout'


export const CardContainer = styled.div`
  background-color: ${COLORS.CARD};
  border: 2px solid #3f5789;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
`
const commonSectionStyle = (props?: { justify?: string; align?: string; padding?: string }) => {
  return `
  display: flex;
  align-items: ${props.align};
  justify-content: ${props.justify};
  ${
    props.padding &&
    `
    padding: ${props.padding};
  `
  }

`
}

const PADDING = '10px'

export const CardHeader = styled.div`
  ${commonSectionStyle({ justify: 'space-around', align: 'center', padding: PADDING })}
`

export const CardText = styled(TextWrapper)`
  margin-right: 5px;
  line-height: 1.5em;
`

export const HeaderTxt = styled(CardText)``
export const DetailsTxt = styled(CardText)``

export const Display = styled(backgroundProp)<{ bg?: string }>`
  ${commonSectionStyle({ justify: 'center', align: 'center' })}
  flex: 3;
  border: 2px solid #5aa2cf;
  position: relative;
  border-radius: 10px;
  & img {
    margin: 0 auto;
    z-index: 1;
  }
  :before {
    opacity: 0.2;
  }
`

export const Details = styled.div`
  ${commonSectionStyle({padding: PADDING, justify: 'space-around', align: 'center'})}
  flex: 1;
  border: 1px solid blue;
`

export const Button = styled(MGGButton)`
  border-radius: 5px;
`