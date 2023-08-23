import React from 'react'
import { Grid } from '@mui/material'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import { Button, Flex, IconButton } from '@metagg/mgg-uikit'
import { FaChevronCircleLeft } from 'react-icons/fa'
import { H1, H3, P, P as Text, TextWrapper } from '../Foundation/Text'
import Iconloader from '../Foundation/Iconloader'
import { MiniBox } from '../Foundation/Box'

type Props = {
  returnFn: {
    option: string | null
    setOption: React.Dispatch<React.SetStateAction<string | null>>
  }
}

const BuyExtended: React.FC<Props> = (props) => {
  const { theme } = useTheme()
  const { returnFn } = props
  const [buySuccess, setBuySuccess] = React.useState<boolean>(false)
  const handleBuy = () => {
    setBuySuccess(true)
  }
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
            <Text>Amount</Text>
          </Grid>
          <Grid item xs={2}>
            <Text>:</Text>
          </Grid>
        </Label>
        <Grid item xs={8}>
          <Value>$0.00</Value>
        </Grid>
      </Field>
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
          <Value>ETC Chain ( ERC-20 )</Value>
        </Grid>
      </Field>
      <Field container item xs={12}>
        <Label item xs={4} container>
          <Grid item xs={10}>
            <Text>Transfer Currency</Text>
          </Grid>
          <Grid item xs={2}>
            <Text>:</Text>
          </Grid>
        </Label>
        <Grid item xs={8}>
          <Value>USDT</Value>
        </Grid>
      </Field>
      <Field container item xs={12}>
        <Label item xs={4} container>
          <Grid item xs={10}>
            <Text>Token Consumed</Text>
          </Grid>
          <Grid item xs={2}>
            <Text>:</Text>
          </Grid>
        </Label>
        <Grid item xs={8}>
          <Value>0.00 USDT</Value>
        </Grid>
      </Field>
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

  const renderBuySuccess = () => (
    <Flex alignItems="center" justifyContent="center" flexDirection="column" className='success-container'>
      <H1 fsize="1.5em">SUCCESS!</H1>
      <Iconloader type="fa" name="CheckCircle" style={{ color: theme.colors.MGG_accent1, fontSize: '5em', margin: '0.5em' }} />
      <TextWrapper align="center" >
        <P>
          Your crpyto currency remittance instruction has been completed. The remittance time varies depending on
          network conditions, so it may take a few minutes to several tens of minutes to confirm receipt of payment.
        </P>
      </TextWrapper>
      <MiniBox style={{ height: '40px', padding: '15px', margin: '25px 0' }}>
        <Button className="icon-button" variant="text" margin="0 auto" padding="0">
          <H3>Okay</H3>
        </Button>
      </MiniBox>
    </Flex>
  )

  return (
    <StyledDiv>
      <TextWrapper>
        {!buySuccess ? (
          <>
            <Flex alignItems="center" justifyContent="center">
              <IconButton onClick={() => returnFn.setOption(null)} variant="text" className="icon-button">
                <FaChevronCircleLeft />
              </IconButton>

              <H3 fsize="1.2em">BUY MARKET MONEY</H3>
            </Flex>
            {renderFields()}
            <Flex justifyContent="center">
              <Button type="button" onClick={handleBuy} style={{ height: '30px' }}>
                BUY
              </Button>
            </Flex>
          </>
        ) : (
          renderBuySuccess()
        )}
      </TextWrapper>
    </StyledDiv>
  )
}

export default BuyExtended

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  .success-container {
    width: 80%;
    margin: 0 auto;
  }
`
const Fields = styled(Grid)`
  margin: 10px 0px;
  padding: 10px 0px;
`
const Label = styled(Grid)`
  align-items: center;
`
const Field = styled(Grid)`
  padding: 10px 0px;
`
const Value = styled(Text)`
  overflow-wrap: break-word;
`
