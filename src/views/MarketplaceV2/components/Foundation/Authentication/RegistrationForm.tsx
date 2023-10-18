import React, { useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import useToast from 'hooks/useToast'
import useFirebaseAuth from 'hooks/useFirebaseAuth'
import { sendEmail } from 'hooks/useMarketplaceAuth'
import { TextWrapper } from '../Text'
import Form from '../Form'

const RegistrationForm: React.FC = () => {
  const { register } = useFirebaseAuth()
  return (
    <>
      <h2>New Registration:</h2>
      <Form name="Register" submitFn={register} />
    </>
  )
}

export default RegistrationForm
