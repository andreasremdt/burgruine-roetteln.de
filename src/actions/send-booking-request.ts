'use server'

import config from '@payload-config'
import { getPayload } from 'payload'
import {
  validateBookingForm,
  hasValidationErrors,
  type ValidationErrors,
} from '@/lib/validate-booking-form'

type FormInputData = {
  name: string
  type: string
  email: string
  participants: string
  message: string
}

type SendBookingRequestState = {
  success: boolean
  errors?: ValidationErrors
  values?: FormInputData
}

export default async function sendBookingRequest(
  data: FormInputData,
): Promise<SendBookingRequestState> {
  // Validate input data
  const errors = validateBookingForm(data)

  if (hasValidationErrors(errors)) {
    return {
      success: false,
      errors,
      values: data,
    }
  }

  const { name, type, email, participants, message } = data

  try {
    const payload = await getPayload({ config })

    await payload.sendEmail({
      to: process.env.EMAIL_RECIPIENT_BOOKING_FORM,
      subject: `Anfrage Führung "${type}" von ${name}`,
      replyTo: email,
      text: `Anfrage Führung "${type}" von ${name}\nE-Mail: ${email}\nAnzahl Teilnehmer: ${participants}\n\n${message}`,
    })

    await payload.create({
      collection: 'requests',
      data: {
        name,
        type,
        email,
        participants,
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
