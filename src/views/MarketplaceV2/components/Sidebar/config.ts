import { Props } from './index.d'

const marketplaceURL = '/marketplace'
export const links: Props = [
  {
    name: 'Home',
    href: marketplaceURL,
  },
  {
    name: 'User',
    href: `${marketplaceURL}/profile`,
  },
  {
    name: 'ShoppingBasket',
    href: `${marketplaceURL}/market`,
  },
  {
    name: 'Globe',
    href: `${marketplaceURL}/web`,
  },
  {
    name: 'Users',
    href: `${marketplaceURL}/groups`,
  },
]
