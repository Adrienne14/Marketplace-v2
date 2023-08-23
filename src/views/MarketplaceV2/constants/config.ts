export interface SocialProp {
  name: string
  href: string
}

export const socials: SocialProp[] = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/SparkDeFi',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/SparkDeFi',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sparkdefi',
  },
  {
    name: 'Discord',
    href: 'https://discord.com/invite/Sgc6yDEAAe',
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/c/sparkpointio',
  },
  {
    name: 'Medium',
    href: 'https://medium.com/theecosystem',
  },
  {
    name: 'Reddit',
    href: 'https://www.reddit.com/r/SparkPoint/',
  },
]


export const LOGO = 'MSW Logo'

// Footer
export interface Links {
  [key: string]: {
    [key: string]: string
  }
}
export const links: Links = {
  FOOTER: {
    'Privacy Policy': 'https://www.google.com',
    'Terms and Condition': 'https://www.google.com',
  },
}

export const GoogleDriveLink = 'https://drive.google.com/uc?id='