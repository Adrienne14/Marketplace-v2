import React from 'react'
import styled from 'styled-components'

const Circle = ({color}:{color?: string}) => {
  return <StyledCircle color={color}/>
}

export default Circle

const StyledCircle = styled.div<{ color?: string }>`
  ${(props) => `
background-color: ${props.color}; 
width: 1.1em;
height: 1.1em;
border-radius: 50%;
margin: 0px 2px;
`}
`

Circle.defaultProps = {
  color: ''
}
