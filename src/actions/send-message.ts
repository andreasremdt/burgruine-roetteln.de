'use server'

import config from '@payload-config'
import { getPayload } from 'payload'
import {
  validateMessageForm,
  hasValidationErrors,
  type ValidationErrors,
} from '@/lib/validate-message'

type FormInputData = {
  name: string
  email: string
  subject: string
  phone?: string
  message: string
}

type SendMessageState = {
  success: boolean
  errors?: ValidationErrors
  values?: FormInputData
}

export default async function sendMessage(data: FormInputData): Promise<SendMessageState> {
  // Validate input data
  const errors = validateMessageForm(data)

  if (hasValidationErrors(errors)) {
    return {
      success: false,
      errors,
      values: data,
    }
  }

  const { name, subject, email, phone, message } = data

  try {
    const payload = await getPayload({ config })

    await payload.sendEmail({
      to: 'burgknecht@burgruine-roetteln.de',
      subject: `Anfrage von ${name} - ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nBetreff: ${subject}\nE-Mail: ${email}\nTelefon: ${phone || '-'}\n\n${message}`,
    })

    await payload.create({
      collection: 'messages',
      data: {
        name,
        subject,
        email,
        phone,
        message,
      },
    })

    return { success: true }
  } catch (_) {
    return {
      success: false,
      values: data,
    }
  }
}
