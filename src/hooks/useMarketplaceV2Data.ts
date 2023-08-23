import React, { useState, useEffect } from 'react';

export type Price = {
  token: string;
  fiat: string;
}

export type CardType = {
    name: string;
    spriteName: string;
    rarity: string;
    badge: string;
    price: Price;
}


export const useMarketplaceV2FetchData = () => {
  const [ data, setData ] = useState<CardType[] | []>([]);

  useEffect(() => {
    setData(placeholder);
  }, []) 

  return {
    data
  }
}

const placeholder: CardType[] = [
  {
    name: 'Voidmancer',
    spriteName: 'Voidmancer- Wizard',
    rarity: 'Rare',
    badge: 'Wizard',
    price: {
      token: '100 MGG',
      fiat: '1000',
    },
  },
  {
    name: 'Voidmancer2',
    spriteName: 'Voidmancer- Wizard',
    rarity: 'Rare',
    badge: 'Wizard',
    price: {
      token: '100 MGG',
      fiat: '1000',
    },
  },
  {
    name: 'Voidmancer3',
    spriteName: 'Voidmancer- Wizard',
    rarity: 'Rare',
    badge: 'Wizard',
    price: {
      token: '100 MGG',
      fiat: '1000',
    },
  },
  {
    name: 'Voidmancer4',
    spriteName: 'Voidmancer- Wizard',
    rarity: 'Rare',
    badge: 'Wizard',
    price: {
      token: '100 MGG',
      fiat: '1000',
    },
  },
  {
    name: 'Voidmancer5',
    spriteName: 'Voidmancer- Wizard',
    rarity: 'Rare',
    badge: 'Wizard',
    price: {
      token: '100 MGG',
      fiat: '1000',
    },
  },
]