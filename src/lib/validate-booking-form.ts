type FormInputData = {
  name: string
  type: string
  email: string
  participants: string
  message: string
}

export type ValidationErrors = {
  name?: string[]
  type?: string[]
  email?: string[]
  participants?: string[]
  message?: string[]
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_MESSAGE_LENGTH = 10

export function validateName(value: string): string | undefined {
  if (!value || value.trim() === '') {
    return 'Vor- und Nachname sind erforderlich'
  }

  return undefined
}

export function validateParticipants(value: string): string | undefined {
  if (!value || value.trim() === '') {
    return 'Anzahl Teilnehmer ist erforderlich'
  }

  if (isNaN(Number(value))) {
    return 'Anzahl Teilnehmer muss eine Zahl sein'
  }

  if (Number(value) <= 0) {
    return 'Anzahl Teilnehmer muss größer als 0 sein'
  }

  return undefined
}

export function validateEmail(value: string): string | undefined {
  if (!value || value.trim() === '') {
    return 'E-Mail ist erforderlich'
  }

  if (!EMAIL_REGEX.test(value)) {
    return 'Ungültige E-Mail-Adresse'
  }

  return undefined
}

export function validateMessage(value: string): string | undefined {
  if (!value || value.trim() === '') {
    return 'Nachricht ist erforderlich'
  }

  if (value.length < MIN_MESSAGE_LENGTH) {
    return 'Nachricht muss mindestens 10 Zeichen lang sein'
  }

  return undefined
}

/**
 * Validates form input data and returns validation errors
 */
export function validateBookingForm(data: FormInputData): ValidationErrors {
  const errors: ValidationErrors = {}

  const nameError = validateName(data.name)
  if (nameError) {
    errors.name = [nameError]
  }

  const emailError = validateEmail(data.email)
  if (emailError) {
    errors.email = [emailError]
  }

  const participantsError = validateParticipants(data.participants)
  if (participantsError) {
    errors.participants = [participantsError]
  }

  const messageError = validateMessage(data.message)
  if (messageError) {
    errors.message = [messageError]
  }

  return errors
}

export function hasValidationErrors(errors: ValidationErrors): boolean {
  return Object.keys(errors).length > 0
}
