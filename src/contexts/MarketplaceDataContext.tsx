import React, { createContext } from 'react'
import { CardType, CLASSES } from './index.d'
import useSubgraphQuery from '../hooks/useSubgraph';
import {getBalanceAmount} from '../utils/formatBalance';

const getRarity = (attributes: any[]) => {
  if (attributes.find((attr) => attr.trait_type === "1/1")) {
    return 'Legendary';
  }
  
  switch (attributes.find((attr) => attr.trait_type === "Class").value) {
    case 'Archer':
      return 'Common'
    case 'Artillery':
      return 'Rare'
    case 'Berserker':
      return 'Uncommon'
    case 'Dark Knight':
      return 'Epic'
    case 'Elemental':
      return 'Rare'
    case 'Engineer':
      return 'Uncommon'
    case 'Knight':
      return 'Common'
    case 'Magitek':
      return 'Epic'
    case 'Musketeer':
      return 'Common'
    case 'Plague Doctor':
      return 'Uncommon'
    case 'Vicar':
      return 'Uncommon'
    case 'Wizard':
      return 'Common'
  }

  // If none of the above, return undefined or some default value
  return "Unknown";
}

export const MarketplaceV2DataContext = createContext(null)
export const MarketplaceV2DataProvider = ({ children }) => {
  const [nftsState, setNftsState] = React.useState<CardType[] | []>([])
  const [classesState, setClassesState] = React.useState([])

  const { data, loading, error } = useSubgraphQuery(`
    query {
      listings(first: 10, where: { status: "0" }, orderBy: id, orderDirection: desc) {
        id
        seller
        tokenId
        price
        blockTimestamp
      }
    }
  `);

  React.useEffect(() => {
    if (!loading && !error) {
      console.log(data.data.listings)
      
      let nfts = []
      for ( let x = 0 ; x < data.data.listings.length ; x++ ) {
        nfts.push({
          name: `${data.data.listings[x].name}`,
          spriteName: `Warrior- ${data.data.listings[x].attributes.find((attr) => attr.trait_type === "Class").value}`,
          rarity: getRarity(data.data.listings[x].attributes),
          badge: data.data.listings[x].attributes.find((attr) => attr.trait_type === "Class").value,
          price: {
            token: `${getBalanceAmount(data.data.listings[x].price)} MATIC`,
            fiat: 'Not available',
          }
        })
      }
  
      setNftsState(nfts)
    }
  }, [data, loading, error])

  React.useEffect(() => {
    setClassesState(classes)
  }, [])

  return (
    <MarketplaceV2DataContext.Provider
      value={{
        data: {
          nfts: nftsState,
          classes: classesState,
        },
      }}
    >
      {children}
    </MarketplaceV2DataContext.Provider>
  )
}

const classes = [
  'Archer',
  'Artillery',
  'Berserker',
  'Dark Knight',
  'Elemental',
  'Engineer',
  'Knight',
  'Magitek',
  'Musketeer',
  'Plague Doctor',
  'Vicar',
  'Wizard',
]

const placeholder: CardType[] = [
  {
    name: 'Voidmancer',
    spriteName: 'Voidmancer- Wizard',
    rarity: 'Rare',
    badge: CLASSES.wizard,
    price: {
      token: '100 MGG',
      fiat: '1000',
    },
  },
  {
    name: 'Voidmancer2',
    spriteName: 'Voidmancer- Wizard',
    rarity: 'Rare',
    badge: CLASSES.wizard,
    price: {
      token: '100 MGG',
      fiat: '1000',
    },
  },
  {
    name: 'Voidmancer3',
    spriteName: 'Voidmancer- Wizard',
    rarity: 'Rare',
    badge: CLASSES.wizard,
    price: {
      token: '100 MGG',
      fiat: '1000',
    },
  },
  {
    name: 'Voidmancer4',
    spriteName: 'Voidmancer- Wizard',
    rarity: 'Rare',
    badge: CLASSES.wizard,
    price: {
      token: '100 MGG',
      fiat: '1000',
    },
  },
  {
    name: 'Voidmancer5',
    spriteName: 'Voidmancer- Wizard',
    rarity: 'Rare',
    badge: CLASSES.wizard,
    price: {
      token: '100 MGG',
      fiat: '1000',
    },
  },
]
