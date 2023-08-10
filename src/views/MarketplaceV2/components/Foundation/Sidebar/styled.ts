import styled from 'styled-components'
import { COLORS, SETTINGS_SIDEBAR } from 'views/MarketplaceV2/styles/constants'

export const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: ${SETTINGS_SIDEBAR.size.width}px;
  background-color: ${COLORS.NAV};
  background: ${COLORS.GRADIENT_NAV};
  padding: 10px;
`

export const StyledPanelBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const StyledPanelFooter = styled.div`
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const BodyWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
`

export const Inner = styled.div`
  flex-grow: 1;
  background-color: ${COLORS.INNER};
  background: ${COLORS.GRADIENT_INNER};
  padding: 24px;
`
