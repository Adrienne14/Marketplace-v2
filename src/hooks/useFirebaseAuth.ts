import React, { useContext } from 'react'
import { AuthContext } from 'contexts/AuthContext'

const useFirebaseAuth = () => {
  return useContext(AuthContext)
}

export default useFirebaseAuth;