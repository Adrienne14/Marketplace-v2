import React from 'react'
import styled from 'styled-components'
import useFirebaseAuth from 'hooks/useFirebaseAuth'

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  color: white;
`

export default function Login() {
  const { googleSignIn, user, logOut } = useFirebaseAuth()
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (err) {
      console.error(err)
    }
  }

  const handleLogOut = async () => {
    try {
      await logOut()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Container>
      Login
    </Container>
  )
}
