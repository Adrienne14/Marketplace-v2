import styled from 'styled-components'
import { DefaultButton } from 'views/MarketplaceV2/components/Foundation/Button/styled'

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > * {
    margin: 1em 0px;
  }
`
export const Button = styled(DefaultButton)<{ w?: string; h?: string }>`
  width: 100%;
  font-size: 1.2em;
  font-weight: 300;
  padding: 0px;
  ${({ w }) =>
    w &&
    `
    width: ${w};
  `}
  ${({ h }) => `
    height: ${h};
  `}
`
