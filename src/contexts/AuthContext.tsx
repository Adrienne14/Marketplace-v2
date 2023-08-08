import React, { useContext, createContext, useEffect, useState } from 'react'
// import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from 'firebase/auth'
import {
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
} from 'firebase/auth'
import usePersistState from 'hooks/usePersistState'
import { signUp, otpChecker, signIn } from 'hooks/useMarketplaceAuth'
import { auth, actionCodeSettings } from '../Firebase'

export const AuthContext = createContext(null)

export const AuthContextProvider = ({ children }) => {
  // const [ user, setUser ] = useState({});
  // const googleSignIn = async() => {
  //   try {
  //     const provider = new GoogleAuthProvider()
  //     await signInWithPopup(auth, provider)
  //   } catch (e) {
  //       console.error(e)
  //   }
  // }

  // const logOut = () => {
  //   signOut(auth)
  // }

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, currUser => {
  //     setUser(currUser)
  //   })

  //   return () => unsubscribe();
  // }, [])
  // const createUser = (email, password) => {
  //   return createUserWithEmailAndPassword(auth, email, password)
  // }

  // const verifyEmail = (email) => {
  //   return sendSignInLinkToEmail(auth, email, actionCodeSettings)
  // }

  // useEffect(() => {
  //   const unsubscribe = isSignInWithEmailLink
  //   return () => {
  //     unsubscribe()
  //   }
  // }, [])

  /* Temporary logic for registration */

  const [user, setUser] = useState()

  // temp otp generator
  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      result += characters.charAt(randomIndex)
    }
    return result
  }

  const register = async (payload, code) => {
    if (!otpChecker(code)) {
      throw new Error('Invalid code')
    }
    try {
      const res = await signUp(payload)
      return {
        status: 'User Created'
      }
    } catch (e:any) {
      throw new Error(e.message)
    }
  }

  const login = async (payload, code) => {
    if (!otpChecker(code)) {
      throw new Error('Invalid code')
    }
    try {
      const res = await signIn(payload)
      if (!res) {
        throw new Error('Please register!')
      }
      return {
        status: `Hello ${res.email}!`
      }
    } catch(e:any) {
      throw new Error(e.message)
    }
  }

  const requestOtp = (): null | string => {
    const code = generateRandomString(6)
    return code
  }

  return <AuthContext.Provider value={{ user, register, requestOtp, login}}>{children}</AuthContext.Provider>
}
