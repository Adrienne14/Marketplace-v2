import React from 'react'
import styled from 'styled-components'
import useMarketplaceV2 from 'hooks/useMarketplaceV2'
import useTheme from 'hooks/useTheme'
import { FaChevronDown } from 'react-icons/fa'
import Button from '../Foundation/Button'
import { MiniBox } from '../Foundation/Box'
import { P, TextWrapper } from '../Foundation/Text'
import Filter from './Filter'


const Filters = () => {
  const { theme } = useTheme()
  const { controllers: {drawer: {toggleDrawer }}} = useMarketplaceV2()

  return (
    <Container>
      <TextWrapper className="filter-actions">
        <MiniBox style={{ justifyContent: 'space-between'}}>
          <P fsize="0.7em">Recently Added </P> &nbsp;
          <FaChevronDown color={theme.colors.MGG_accent2} />
        </MiniBox>
        <Button onClick={toggleDrawer('right', true)} variant='text' iconType="fa" icon="Filter" title="Filters"/>
      </TextWrapper>
      <Filter />
    </Container>
  )
}

export default Filters

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .filter-actions {
    display: flex;
    align-items: center;

    & > * {
      height: 30px;
    }
  }
`
