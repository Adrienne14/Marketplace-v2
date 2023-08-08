import React, { useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import useToast from 'hooks/useToast'
import useFirebaseAuth from 'hooks/useFirebaseAuth'
import { sendEmail } from 'hooks/useMarketplaceAuth'
import { TextWrapper, H1} from '../Text'
import Form from '../Form'

const SignInForm: React.FC = () => {
  const { login } = useFirebaseAuth()
  
  return (
    <>
      <H1 fsize="1.5em">User Login</H1>
      <Form name='Login' submitFn={login} />
    </>
  )
}

export default SignInForm
