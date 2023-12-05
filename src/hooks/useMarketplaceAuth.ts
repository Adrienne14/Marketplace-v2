import axios from 'axios'

export type Payload = {
  email: string
}

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

 return 'success'
}
