import React from 'react'
import * as FaIconModule from 'react-icons/fa'
import * as FiIconModule from 'react-icons/fi'
import { Props } from './index.d'

const faIcons = FaIconModule as unknown as { [key: string]: React.FC }
const fiIcons = FiIconModule as unknown as { [key: string]: React.FC }

const Iconloader = ({ type, name, ...otherProps }: Props) => {
  const capitalizeFirstLetter = (input: string): string => {
    return input.charAt(0).toUpperCase() + input.slice(1)
  }

  const src = capitalizeFirstLetter(type) + name
  const [icon, setIcon] = React.useState<React.FC | null>(null)

  React.useEffect(() => {
    const activeModule = (op: string) => {
      switch (op.toLowerCase()) {
        case 'fa':
          return setIcon(faIcons[src])
        case 'fi':
          return setIcon(fiIcons[src])
        default:
          return setIcon(faIcons[src])
      }
    }
    activeModule(type)
  }, [type, src])

  return <span {...otherProps}>{icon}</span>
}

export default Iconloader
