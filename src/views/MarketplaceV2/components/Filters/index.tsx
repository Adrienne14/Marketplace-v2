import React from 'react'
import styled from 'styled-components'
import { ChevronDown } from 'react-feather'
import useTheme from 'hooks/useTheme'
import { FaChevronDown } from 'react-icons/fa'
import Button from '../Foundation/Button'
import { MiniBox } from '../Foundation/Box'
import { P, TextWrapper } from '../Foundation/Text'

const Filters = () => {
  const { theme } = useTheme()

  return (
    <Container>
      <TextWrapper className="filter-actions">
        <MiniBox style={{ justifyContent: 'space-between'}}>
          <P fsize="0.7em">Recently Added </P> &nbsp;
          <FaChevronDown color={theme.colors.MGG_accent2} />
        </MiniBox>
        <Button iconType="fa" icon="Filter" title="Filters"/>
      </TextWrapper>
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
  }
`
