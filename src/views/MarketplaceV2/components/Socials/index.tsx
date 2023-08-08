import React from 'react'
import * as IconCollection from 'react-icons/fa'
import styled from 'styled-components'
import { socials } from '../../constants/config'


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  width: inherit;
  & > * {
    color: ${({theme}) => theme.colors.text};
    font-size: 1.5em;
    margin: 0 5px 0 5px;
  }
`

const icons = IconCollection as unknown as { [key: string]: React.FC }
export default function Socials() {
  return (
    <Container>
      {
        socials.map((social) => {
          const res = `Fa${social.name}`
          const Icon = icons[res]
          return (
            <a href={social.href} key={social.name} target="_blank" rel="noreferrer noopener">
              <Icon />
            </a>
          )
        })
      }
    </Container>
  )
}
