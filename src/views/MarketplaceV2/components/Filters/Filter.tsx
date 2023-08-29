import React from 'react'
import { Grid } from '@mui/material'
import useMarketplaceV2 from 'hooks/useMarketplaceV2'
import { Button, Flex } from '@metagg/mgg-uikit'
import useTheme from 'hooks/useTheme'
import Drawer from '../Foundation/Drawer'
import { P, H1, TextWrapper } from '../Foundation/Text'
import Iconloader from '../Foundation/Iconloader'
import Accordion from '../Foundation/Accordion'
import { OptionBox } from '../Foundation/Box'
import Option from './Option'

const Filter = () => {
  const { theme } = useTheme()
  const {
    controllers: {
      drawer: { stateAnchor, toggleDrawer },
    },
  } = useMarketplaceV2()

  const renderSample = () => {
    return (
      <Accordion name="Class">
        <Grid container spacing={{xs: 1}} pt={2} pb={2}>
          <Grid item xs={6}>
            <Option />
          </Grid>
          <Grid item xs={6}>
            <Option />
          </Grid>
          <Grid item xs={6}>
            <Option />
          </Grid>
          <Grid item xs={6}>
            <Option />
          </Grid>
        </Grid>
        
      </Accordion>
    )
  }

  const renderContent = ({ content }: { content: JSX.Element }) => (
    <TextWrapper>
      <Flex flexDirection="column">
        <P>
          <Iconloader type="fa" name="Filter" />
          Filters
        </P>
        <Flex justifyContent="flex-end">
          <Button variant="text" style={{ padding: '0.5em', height: '25px' }}>
            <P fsize="0.6em" color={theme.colors.textSubtle}>
              Clear All
            </P>
          </Button>
        </Flex>
        {content}
      </Flex>
    </TextWrapper>
  )

  return (
    <Drawer
      anchor="right"
      openState={stateAnchor.right}
      handleClose={toggleDrawer('right', false)}
      handleOpen={toggleDrawer('right', true)}
    >
      {renderContent({ content: renderSample() })}
    </Drawer>
  )
}

export default Filter
