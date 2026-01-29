'use server'

import config from '@payload-config'
import { getPayload } from 'payload'
import {
  validateMembershipForm,
  hasValidationErrors,
  type ValidationErrors,
} from '@/lib/validate-membership'

type FormInputData = {
  name: string
  street: string
  postalCode: string
  city: string
  birthDate: string
  phone: string
  email: string
  annualFee: string
  accountHolder: string
  sepaStreet: string
  sepaPostalCode: string
  sepaCity: string
  iban: string
  bic: string
}

type SendMembershipState = {
  success: boolean
  errors?: ValidationErrors
  values?: FormInputData
}

export default async function sendMembership(data: FormInputData): Promise<SendMembershipState> {
  // Validate input data
  const errors = validateMembershipForm(data)

  if (hasValidationErrors(errors)) {
    return {
      success: false,
      errors,
      values: data,
    }
  }

  const {
    name,
    street,
    postalCode,
    city,
    birthDate,
    phone,
    email,
    annualFee,
    accountHolder,
    sepaStreet,
    sepaPostalCode,
    sepaCity,
    iban,
    bic,
  } = data

  try {
    const payload = await getPayload({ config })

    await payload.sendEmail({
      to: process.env.EMAIL_RECIPIENT_MEMBERSHIP_FORM,
      subject: `Neuer Mitgliedsantrag von ${name}`,
      replyTo: email,
      text: `Neuer Mitgliedsantrag

Persönliche Daten:
Name: ${name}
Straße: ${street}
PLZ: ${postalCode}
Wohnort: ${city}
Geburtsdatum: ${birthDate}
Telefon: ${phone || '-'}
E-Mail: ${email}
Jahresbeitrag: ${annualFee} €

SEPA-Lastschriftmandat:
Kontoinhaber: ${accountHolder}
Straße: ${sepaStreet}
PLZ: ${sepaPostalCode}
Wohnort: ${sepaCity}
IBAN: ${iban}
BIC: ${bic}`,
    })

    await payload.create({
      collection: 'memberships',
      data: {
        name,
        street,
        postalCode,
        city,
        birthDate,
        phone,
        email,
        annualFee: Number(annualFee),
        accountHolder,
        sepaStreet,
        sepaPostalCode,
        sepaCity,
        iban,
        bic,
      },
    })

    return { success: true }
  } catch (ex) {
    console.error(ex)
    return {
      success: false,
      values: data,
    }
  }
}
