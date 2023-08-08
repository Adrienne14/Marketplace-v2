import React, { useState, useEffect } from 'react'
import useMarketplaceV2 from 'hooks/useMarketplaceV2'
import Section, { StyledPage } from './components/Foundation/layout'
import Login from './components/Foundation/Login'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import './styles/Marketplace.css'
import Footer from './components/Footer'
import Featured from './components/Featured'
import * as SECTIONS from './components/Sections'
import PageLoader from './components/Foundation/Loader'
// import Authentication from './components/Authentication'

const sections = SECTIONS as unknown as { [key: string]: React.FC }

const MarketplaceV2: React.FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false)
  const { badges, sprites } = useMarketplaceV2()

  useEffect(() => {
    if (badges.length !== 0 && sprites.length !== 0) {
      setTimeout(() => setLoaded(true), 3000)
    }
  }, [badges, sprites])

  return !loaded ? (
    <PageLoader />
  ) : (
    <StyledPage>
      <Navbar />
      {Object.keys(sections).map((key) => {
        const Sec = sections[key] as React.FC
        return (
          <Section key={key}>
            <Sec />
          </Section>
        )
      })}
      <Footer />
    </StyledPage>
  )
}

export default MarketplaceV2
