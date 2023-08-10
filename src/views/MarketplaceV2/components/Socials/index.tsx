import React from 'react'
import * as IconCollection from 'react-icons/fa'
import styled from 'styled-components'
import { SocialProp } from '../../constants/config'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  width: inherit;
  & > * {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5em;
    margin: 0 5px 0 5px;
  }
`

const icons = IconCollection as unknown as { [key: string]: React.FC }
export default function Socials({ links }: { links: SocialProp[] }) {
  return (
    <Container>
      {links.map((link) => {
        const src = `Fa${link.name}`
        const Icon = icons[src] ?? icons.FaGlobe
        return (
          <a href={link.href} key={link.name} target="_blank" rel="noreferrer noopener">
            <Icon />
          </a>
        )
      })}
    </Container>
  )
}
