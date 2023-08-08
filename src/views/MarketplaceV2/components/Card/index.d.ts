

export enum RarityColors{
  LEGENDARY = '#ecb602',
  EPIC = '#a535ca',
  RARE = '#35d247'
}

export type Price = {
  token: string;
  fiat: string;
}

export type Props = {
  name: string;
  spriteName: string;
  rarity: string;
  badge: string;
  price: Price;
}