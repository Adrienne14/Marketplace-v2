
import { GuildpadConfig, GUILDPAD_STATUS, TYPE, DISTRIBUTION } from "../types";
import tokens from '../tokens';


const socials = {
    website: 'https://acknoledger.com/',
    twitter: 'https://twitter.com/acknoledger',
    telegram: 'https://t.me/acknoledgercommunity',
    medium: 'https://medium.com/@acknoledger'
}

const guildpad: GuildpadConfig = {
    id: 4,
    title: 'Acknoledger',
    description: ' AcknoLedger is the NFT Search Engine for Metaverses & Gaming Platforms. It is a Global Consortium that maps, monetizes, and distributes Web 3.0 Digital Assets Seamlessly across all the Metaverses and Gaming NFTs.',
    date: 'February 15, 2022  1:00 PM UTC',
    socials,
    type: TYPE.INO,
    distribution: DISTRIBUTION.AIRDROP,
    status: GUILDPAD_STATUS.upcoming,
    contractAddress: {
      97: '0x003',
      56: '0x003',
    },
    buyingCoin: tokens.bnb,
    sellingCoin: tokens.acknoledger,
    inoDetails: {
        ratio: '1:1',
        price: '0.99'
    }
}

export default guildpad
