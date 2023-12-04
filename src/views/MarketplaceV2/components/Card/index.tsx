import React, { useMemo, useCallback } from 'react'
import Web3 from 'web3'
import { useHistory } from 'react-router-dom'
import useMarketplaceV2, { useQueryAsset, QueryType } from 'hooks/useMarketplaceV2'
import useTheme from 'hooks/useTheme'
import { Props } from './index.d'
import { CardContainer, Details, CardText as TextBox, Button } from './styled'
import { H5, P } from '../Foundation/Text'
import PurchaseNFT from '../Modals/Buy-nft'
import Header from './Header'
import SpriteDisplay from './Display'
import ABI from '../../constants/abi.json'

export default function Card(props: Props) {
  const { theme } = useTheme()
  const { id, listingId, name, spriteName, rarity, price, badge } = props
  const { controllers } = useMarketplaceV2()
  const { modal } = controllers
  const history = useHistory()

  const handleNav = (event) => {
    event.preventDefault()

    history.push(`/marketplace/${badge}/${id}`)
  }

  const handleBuy = async (event) => {
    event.stopPropagation()

    if (typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
  
      const accounts = await web3.eth.getAccounts();
      if (accounts.length === 0) {
        // MetaMask is installed, but user is not connected - request connection
        try {
          await window.ethereum.enable();
        } catch (error) {
          console.error("User rejected connection request");
          return;
        }
      }
  
      // Interact with the smart contract
      const contract = new web3.eth.Contract(ABI as any[], process.env.REACT_APP_MARKETPLACE_ADDRESS);
      try {
        const response = await contract.methods.buy(listingId).send({ from: accounts[0], value: price.raw });
        console.log('Transaction response:', response);
      } catch (error) {
        console.error('Transaction failed:', error);
      }
    } else {
      console.log('MetaMask is not installed');
    }
  };  

  return (
    <>
      <CardContainer className="secondary-drop-shadow">
        <Header {...{ name, rarity, badge }} />
        <SpriteDisplay {...{ id, spriteName }} style={{margin: '0 10px'}} />
        <Details>
          <TextBox>
            <H5 fsize="0.8em">Current Price</H5>
            <P fsize="1em" color={theme.colors.MGG_accent2}>
              {price.token}
            </P>
          </TextBox>
          <Button onClick={handleBuy} className='with-animation-tilt-n-move-shaking'>BUY</Button>
        </Details>
      </CardContainer>
      {modal.openModal[`buy-${listingId}`] && <PurchaseNFT {...props} />}
    </>
  )
}
