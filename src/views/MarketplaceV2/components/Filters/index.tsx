import React from 'react'
import styled from 'styled-components'
import { ChevronDown } from 'react-feather'
import useTheme from 'hooks/useTheme'
import { FaChevronDown } from 'react-icons/fa'
import Button from '../Foundation/Button'
import { MiniBox } from '../Foundation/Box'
import { P } from '../Foundation/Text'


const Filters = () => {
  const { theme } = useTheme()

  return (
    <Container>
      <div className="filter-actions">
        <MiniBox>
          <P>Recently Added</P>
          <FaChevronDown color={theme.colors.MGG_accent2}/>
        </MiniBox>
        <Button iconType="fa" icon="Filter">
          Filter
        </Button>
      </div>
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
      font-size: 1em;
      margin: 0 5px;

      p {
        margin: 0 5px;
      }
    }
  }
`
