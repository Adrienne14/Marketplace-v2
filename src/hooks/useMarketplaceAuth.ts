import React, { useContext } from 'react'
import axios from 'axios'
import { mailOptions, transporter } from 'utils/nodemailer'
import { AuthContext } from 'contexts/AuthContext'

export type Payload = {
  email: string
}

const useMarketplaceAuth = () => {
  return useContext(AuthContext)
}

export default useMarketplaceAuth

const url = 'http://localhost:8000'

export const signUp = async (payload: Payload) => {
  try {
    const response = await axios.post(`${url}/list`, payload)
    return response
  } catch (err: any) {
    throw new Error(err.message)
  }
}

export const signIn = async (payload: Payload) => {
  const { email } = payload
  try {
    const response = await axios.get(`${url}/list`)
    const user = response.data.find((u) => u.email === email)
    return user
  } catch (err: any) {
    throw new Error(err.message)
  }
}

export const otpChecker = (code) => {
  if (!code) {
    throw new Error('Please input code!')
  }
  const otp = sessionStorage.getItem('otp')
  const response: boolean = code === otp
  return response
}

export const sendEmail = async (payload) => {
  // development - not recommended for production

  try {
    await transporter.sendMail({
      ...mailOptions(payload.email),
      subject: 'OTP Code',
      text: payload.code,
    })

    return 'Success!'
  } catch (e: any) {
    console.error(e.message)
    throw new Error(e.message)
  }
}
