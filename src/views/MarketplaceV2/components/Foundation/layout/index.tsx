import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MARKETPLACE_META, getMarketplaceMeta } from 'config/constants/meta'
import { HEIGHT, COLORS } from '../../../styles/constants'

export const sectionProp = `
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
`

export const backgroundProp = styled.div<{ bg?: string }>`
  :before {
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    background-image: ${(props) => (props.bg ? `url('${props.bg}')` : '')};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    content: ' ';
    z-index: 0;
  }
`

export const StyledPage = styled.div`
  background-color: ${COLORS.BACKGROUND};
`

const StyledSection = styled.main`
  background-color: ${COLORS.MAIN};
  min-height: 60vh;
  height: auto;
  position: relative;
`

export const PageMeta: React.FC = () => {
  const { pathname } = useLocation()
  const pageMeta = getMarketplaceMeta(pathname) ?? {}
  const { title, description, image, favico } = { ...MARKETPLACE_META, ...pageMeta }

  const updateFavicon = (icon: string) => {
    const faviconTag = document.querySelector("link[rel*='icon']") as HTMLLinkElement
    if (faviconTag) {
      faviconTag.href = icon
    } else {
      const newFaviconTag = document.createElement('link')
      newFaviconTag.rel = 'shortcut icon'
      newFaviconTag.type = 'image/x-icon'
      newFaviconTag.href = icon
      document.head.appendChild(newFaviconTag)
    }
  }

  React.useEffect(() => {
    updateFavicon(favico)
  }, [favico])

  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  )
}

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <>
      <PageMeta />
      <StyledSection {...props}>{children}</StyledSection>
    </>
  )
}

export default Page
