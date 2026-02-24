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

export type ValidationErrors = {
  name?: string[]
  street?: string[]
  postalCode?: string[]
  city?: string[]
  birthDate?: string[]
  phone?: string[]
  email?: string[]
  annualFee?: string[]
  accountHolder?: string[]
  sepaStreet?: string[]
  sepaPostalCode?: string[]
  sepaCity?: string[]
  iban?: string[]
  bic?: string[]
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const IBAN_REGEX = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{4}[0-9]{7}([A-Z0-9]?){0,16}$/
const BIC_REGEX = /^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/

export function validateName(value: string): string | undefined {
  if (!value || value.trim() === '') {
    return 'Vor- und Nachname sind erforderlich'
  }

  return undefined
}

export function validateStreet(value: string): string | undefined {
  if (!value || value.trim() === '') {
    return 'Straße ist erforderlich'
  }

  return undefined
}

export function validatePostalCode(value: string): string | undefined {
  if (!value || value.trim() === '') {
    return 'PLZ ist erforderlich'
  }

  return undefined
}

export function validateCity(value: string): string | undefined {
  if (!value || value.trim() === '') {
    return 'Wohnort ist erforderlich'
  }

  return undefined
}

export function validateBirthDate(value: string): string | undefined {
  if (!value || value.trim() === '') {
    return 'Geburtsdatum ist erforderlich'
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

export function validateAnnualFee(value: string): string | undefined {
  if (!value || value.trim() === '') {
    return 'Jahresbeitrag ist erforderlich'
  }

  if (isNaN(Number(value))) {
    return 'Jahresbeitrag muss eine Zahl sein'
  }

  if (Number(value) < 10) {
    return 'Der Jahresbeitrag muss mindestens 10 € betragen'
  }

  return undefined
}

export function validateAccountHolder(value: string): string | undefined {
  if (!value || value.trim() === '') {
    return 'Vor- und Nachname des Kontoinhabers sind erforderlich'
  }

  return undefined
}

export function validateSepaStreet(value: string): string | undefined {
  if (!value || value.trim() === '') {
    return 'Straße ist erforderlich'
  }

  return undefined
}

export function validateSepaPostalCode(value: string): string | undefined {
  if (!value || value.trim() === '') {
    return 'PLZ ist erforderlich'
  }

  return undefined
}

export function validateSepaCity(value: string): string | undefined {
  if (!value || value.trim() === '') {
    return 'Wohnort ist erforderlich'
  }

  return undefined
}

export function validateIban(value: string): string | undefined {
  if (!value || value.trim() === '') {
    return 'IBAN ist erforderlich'
  }

  const normalizedIban = value.replace(/\s/g, '').toUpperCase()
  if (!IBAN_REGEX.test(normalizedIban)) {
    return 'Ungültige IBAN'
  }

  return undefined
}

export function validateBic(value: string): string | undefined {
  if (!value || value.trim() === '') {
    return 'BIC ist erforderlich'
  }

  const normalizedBic = value.replace(/\s/g, '').toUpperCase()
  if (!BIC_REGEX.test(normalizedBic)) {
    return 'Ungültiger BIC'
  }

  return undefined
}

/**
 * Validates form input data and returns validation errors
 */
export function validateMembershipForm(data: FormInputData): ValidationErrors {
  const errors: ValidationErrors = {}

  const nameError = validateName(data.name)
  if (nameError) {
    errors.name = [nameError]
  }

  const streetError = validateStreet(data.street)
  if (streetError) {
    errors.street = [streetError]
  }

  const postalCodeError = validatePostalCode(data.postalCode)
  if (postalCodeError) {
    errors.postalCode = [postalCodeError]
  }

  const cityError = validateCity(data.city)
  if (cityError) {
    errors.city = [cityError]
  }

  const birthDateError = validateBirthDate(data.birthDate)
  if (birthDateError) {
    errors.birthDate = [birthDateError]
  }

  const emailError = validateEmail(data.email)
  if (emailError) {
    errors.email = [emailError]
  }

  const annualFeeError = validateAnnualFee(data.annualFee)
  if (annualFeeError) {
    errors.annualFee = [annualFeeError]
  }

  const accountHolderError = validateAccountHolder(data.accountHolder)
  if (accountHolderError) {
    errors.accountHolder = [accountHolderError]
  }

  const sepaStreetError = validateSepaStreet(data.sepaStreet)
  if (sepaStreetError) {
    errors.sepaStreet = [sepaStreetError]
  }

  const sepaPostalCodeError = validateSepaPostalCode(data.sepaPostalCode)
  if (sepaPostalCodeError) {
    errors.sepaPostalCode = [sepaPostalCodeError]
  }

  const sepaCityError = validateSepaCity(data.sepaCity)
  if (sepaCityError) {
    errors.sepaCity = [sepaCityError]
  }

  const ibanError = validateIban(data.iban)
  if (ibanError) {
    errors.iban = [ibanError]
  }

  const bicError = validateBic(data.bic)
  if (bicError) {
    errors.bic = [bicError]
  }

  return errors
}

export function hasValidationErrors(errors: ValidationErrors): boolean {
  return Object.keys(errors).length > 0
}
