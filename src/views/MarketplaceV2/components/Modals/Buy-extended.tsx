import React from 'react'
import { Grid } from '@mui/material'
import styled from 'styled-components'
import { Button, Flex, IconButton } from '@metagg/mgg-uikit'
import { FaChevronCircleLeft } from 'react-icons/fa'
import { H3, P as Text, TextWrapper } from '../Foundation/Text'

type Props = {
  returnFn: {
    option: string | null
    setOption: React.Dispatch<React.SetStateAction<string | null>>
  }
}

const BuyExtended: React.FC<Props> = (props) => {
  const { returnFn } = props

  const renderFields = () => (
    <Fields container>
      {/* <Field container item xs={12}>
          <Label item xs={6} container>
            <Grid item xs={6}>
              <Text>Quantity</Text>
            </Grid>
            <Grid item xs={2}>
              <Text>:</Text>
            </Grid>
          </Label>
          <Grid item xs={6}>
            <Value>$0.00</Value>
          </Grid>
        </Field> */}
      <Field container item xs={12}>
        <Label item xs={4} container>
          <Grid item xs={10}>
            <Text>Transfer Address</Text>
          </Grid>
          <Grid item xs={2}>
            <Text>:</Text>
          </Grid>
        </Label>
        <Grid item xs={8}>
          <Value>0xD1d6bF74282782B0b3eb1413c901D6eCF02e8e28</Value>
        </Grid>
      </Field>
    </Fields>
  )
  return (
    <StyledDiv>
      <TextWrapper>
        <Flex alignItems="center" justifyContent="center">
          <IconButton onClick={() => returnFn.setOption(null)} variant="text" className="icon-button">
            <FaChevronCircleLeft />
          </IconButton>

          <H3 fsize="1.2em">BUY MARKET MONEY</H3>
        </Flex>
        {renderFields()}
        <div>
          <Button style={{ height: '30px' }}>BUY</Button>
        </div>
      </TextWrapper>
    </StyledDiv>
  )
}

export default BuyExtended

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const Fields = styled(Grid)`
  margin: 10px 0px;
  padding: 10px 0px;
`
const Label = styled(Grid)`
  align-items: center;
`
const Field = styled(Grid)`
  border: 1px solid red;
  padding: 10px 0px;
`
const Value = styled(Text)`
  overflow-wrap: break-word;
`
