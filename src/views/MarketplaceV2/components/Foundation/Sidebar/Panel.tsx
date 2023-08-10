import React from 'react'
import * as IconCollection from 'react-icons/fa'
import { StyledPanel, StyledPanelBody, StyledPanelFooter } from './styled'
import { Props } from './index.d'
import Navbutton from './Navbutton'

const icons = IconCollection as unknown as { [key: string]: React.FC }
const Panel:React.FC<{links:Props}> = (props) => {
  const ExclamationIcon = icons.FaExclamationCircle;
  const { links } = props
  return (
    <StyledPanel className="sidebar-container nav-drop-shadow">
      <StyledPanelBody className="sidebar-nav">
        {links.map((link) => {
          const src = `Fa${link.name}`
          const Icon = icons[src]
          return (
            <Navbutton key={link.name} href={link.href}>
              <Icon />
            </Navbutton>
          )
        })}
      </StyledPanelBody>
      <StyledPanelFooter className="sidebar-footer">
        <Navbutton href='/help'>
          <ExclamationIcon />
        </Navbutton>
      </StyledPanelFooter>
    </StyledPanel>
  )
}

export default Panel
