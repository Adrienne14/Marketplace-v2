import nodemailer from 'nodemailer'

const email = process.env.REACT_APP_EMAIL
const pass = process.env.REACT_APP_EMAIL_PASSWORD

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass,
  },
})

export const mailOptions = (user) => ({
  from: email,
  to: user,
})
