'use client'

import { useForm } from '@tanstack/react-form'
import { useRef, useState } from 'react'
import Label from '../ui/label'
import Input from '../ui/input'
import Button from '../ui/button'
import {
  validateName,
  validateStreet,
  validatePostalCode,
  validateCity,
  validateBirthDate,
  validateEmail,
  validateAnnualFee,
  validateAccountHolder,
  validateSepaStreet,
  validateSepaPostalCode,
  validateSepaCity,
  validateIban,
  validateBic,
} from '@/lib/validate-membership'
import FieldError from '../ui/field-error'
import sendMembership from '@/actions/send-membership'
import Icon from '../ui/icon'
import Text from '../ui/text'

type Props = {
  description: string
}

export default function MembershipFormClient({ description }: Props) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const form = useForm({
    defaultValues: {
      name: '',
      street: '',
      postalCode: '',
      city: '',
      birthDate: '',
      phone: '',
      email: '',
      annualFee: '10',
      accountHolder: '',
      sepaStreet: '',
      sepaPostalCode: '',
      sepaCity: '',
      iban: '',
      bic: '',
    },
    onSubmit: async ({ value }) => {
      try {
        setSubmitStatus('loading')

        const response = await sendMembership(value)

        if (!response.success) {
          if (response.errors) {
            Object.entries(response.errors).forEach(([fieldName, fieldErrors]) => {
              if (fieldErrors && fieldErrors.length > 0) {
                form.setFieldMeta(fieldName as keyof typeof value, (prev) => ({
                  ...prev,
                  errors: fieldErrors,
                }))
              }
            })
            setSubmitStatus('idle')
            return
          }

          throw new Error('Fehler beim Senden des Antrags')
        }

        setSubmitStatus('success')
      } catch (_) {
        setSubmitStatus('error')
      }
    },
    onSubmitInvalid: () => {
      if (formRef.current) {
        const firstInvalidInput =
          formRef.current.querySelector<HTMLInputElement>('[aria-invalid="true"]')

        if (firstInvalidInput) {
          firstInvalidInput.focus()
        }
      }
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      ref={formRef}
      method="POST"
      noValidate
      className="relative lg:col-span-2"
    >
      <Text className="mb-8">{description}</Text>

      {submitStatus === 'success' ? (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-white/90"
          role="alert"
        >
          <Icon name="check-circle" className="text-kornblau-400 mb-4 size-8" />
          <p className="text-center text-xl">
            <strong className="block">Vielen Dank für Ihren Mitgliedsantrag.</strong>
            Wir werden uns schnellstmöglich bei Ihnen melden.
          </p>
        </div>
      ) : null}

      {submitStatus === 'error' ? (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-white/90"
          role="alert"
        >
          <Icon name="error-circle" className="text-kornblau-400 mb-4 size-8" />
          <p className="text-center text-xl">
            <strong className="block">Das hat leider nicht geklappt...</strong>
            Bitte versuchen Sie es später erneut oder senden Sie uns eine E-Mail an{' '}
            <a href="mailto:info@burgruine-roetteln.de" className="text-kornblau-400 underline">
              info@burgruine-roetteln.de
            </a>
            .
          </p>
        </div>
      ) : null}

      <fieldset className="mb-8">
        <legend className="mb-8 text-3xl">Persönliche Daten</legend>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <form.Field
            name="name"
            validators={{
              onChange: ({ value }) => validateName(value),
            }}
          >
            {(field) => (
              <div>
                <Label htmlFor="name">Vor- und Nachname *</Label>
                <Input
                  id="name"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                  autoComplete="name"
                  error={field.state.meta.errors[0]}
                />
                <FieldError id={field.name} error={field.state.meta.errors[0]} />
              </div>
            )}
          </form.Field>

          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => validateEmail(value),
            }}
          >
            {(field) => (
              <div>
                <Label htmlFor="email">E-Mail-Adresse *</Label>
                <Input
                  type="email"
                  name={field.name}
                  id="email"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                  autoComplete="email"
                  error={field.state.meta.errors[0]}
                />
                <FieldError id={field.name} error={field.state.meta.errors[0]} />
              </div>
            )}
          </form.Field>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
          <form.Field
            name="street"
            validators={{
              onChange: ({ value }) => validateStreet(value),
            }}
          >
            {(field) => (
              <div className="sm:col-span-2">
                <Label htmlFor="street">Straße *</Label>
                <Input
                  id="street"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                  autoComplete="street-address"
                  error={field.state.meta.errors[0]}
                />
                <FieldError id={field.name} error={field.state.meta.errors[0]} />
              </div>
            )}
          </form.Field>

          <form.Field
            name="postalCode"
            validators={{
              onChange: ({ value }) => validatePostalCode(value),
            }}
          >
            {(field) => (
              <div>
                <Label htmlFor="postalCode">PLZ *</Label>
                <Input
                  id="postalCode"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                  autoComplete="postal-code"
                  error={field.state.meta.errors[0]}
                />
                <FieldError id={field.name} error={field.state.meta.errors[0]} />
              </div>
            )}
          </form.Field>

          <form.Field
            name="city"
            validators={{
              onChange: ({ value }) => validateCity(value),
            }}
          >
            {(field) => (
              <div>
                <Label htmlFor="city">Wohnort *</Label>
                <Input
                  id="city"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                  autoComplete="address-level2"
                  error={field.state.meta.errors[0]}
                />
                <FieldError id={field.name} error={field.state.meta.errors[0]} />
              </div>
            )}
          </form.Field>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <form.Field
            name="birthDate"
            validators={{
              onChange: ({ value }) => validateBirthDate(value),
            }}
          >
            {(field) => (
              <div>
                <Label htmlFor="birthDate">Geburtsdatum *</Label>
                <Input
                  type="date"
                  id="birthDate"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                  autoComplete="bday"
                  error={field.state.meta.errors[0]}
                />
                <FieldError id={field.name} error={field.state.meta.errors[0]} />
              </div>
            )}
          </form.Field>

          <form.Field name="phone">
            {(field) => (
              <div>
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  autoComplete="tel"
                  error={field.state.meta.errors[0]}
                />
                <FieldError id={field.name} error={field.state.meta.errors[0]} />
              </div>
            )}
          </form.Field>

          <form.Field
            name="annualFee"
            validators={{
              onChange: ({ value }) => validateAnnualFee(value),
            }}
          >
            {(field) => (
              <div>
                <Label htmlFor="annualFee">Jahresbeitrag (€) *</Label>
                <Input
                  type="number"
                  id="annualFee"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                  min={10}
                  error={field.state.meta.errors[0]}
                />
                {field.state.meta.errors[0] ? <FieldError id={field.name} error={field.state.meta.errors[0]} /> : <p className="text-sm text-gray-500 font-sans mt-1">Mindestbeitrag: 10 €</p>}
              </div>
            )}
          </form.Field>
        </div>
      </fieldset>

      <fieldset className="mb-8">
        <legend className="my-8 text-3xl">SEPA-Lastschriftmandat</legend>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <form.Field
            name="accountHolder"
            validators={{
              onChange: ({ value }) => validateAccountHolder(value),
            }}
          >
            {(field) => (
              <div>
                <Label htmlFor="accountHolder">Vor- und Nachname des Kontoinhabers *</Label>
                <Input
                  id="accountHolder"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                  autoComplete="cc-name"
                  error={field.state.meta.errors[0]}
                />
                <FieldError id={field.name} error={field.state.meta.errors[0]} />
              </div>
            )}
          </form.Field>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
          <form.Field
            name="sepaStreet"
            validators={{
              onChange: ({ value }) => validateSepaStreet(value),
            }}
          >
            {(field) => (
              <div className="sm:col-span-2">
                <Label htmlFor="sepaStreet">Straße *</Label>
                <Input
                  id="sepaStreet"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                  error={field.state.meta.errors[0]}
                />
                <FieldError id={field.name} error={field.state.meta.errors[0]} />
              </div>
            )}
          </form.Field>

          <form.Field
            name="sepaPostalCode"
            validators={{
              onChange: ({ value }) => validateSepaPostalCode(value),
            }}
          >
            {(field) => (
              <div>
                <Label htmlFor="sepaPostalCode">PLZ *</Label>
                <Input
                  id="sepaPostalCode"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                  error={field.state.meta.errors[0]}
                />
                <FieldError id={field.name} error={field.state.meta.errors[0]} />
              </div>
            )}
          </form.Field>

          <form.Field
            name="sepaCity"
            validators={{
              onChange: ({ value }) => validateSepaCity(value),
            }}
          >
            {(field) => (
              <div>
                <Label htmlFor="sepaCity">Wohnort *</Label>
                <Input
                  id="sepaCity"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                  error={field.state.meta.errors[0]}
                />
                <FieldError id={field.name} error={field.state.meta.errors[0]} />
              </div>
            )}
          </form.Field>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <form.Field
            name="iban"
            validators={{
              onChange: ({ value }) => validateIban(value),
            }}
          >
            {(field) => (
              <div>
                <Label htmlFor="iban">IBAN *</Label>
                <Input
                  id="iban"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                  error={field.state.meta.errors[0]}
                />
                <FieldError id={field.name} error={field.state.meta.errors[0]} />
              </div>
            )}
          </form.Field>

          <form.Field
            name="bic"
            validators={{
              onChange: ({ value }) => validateBic(value),
            }}
          >
            {(field) => (
              <div>
                <Label htmlFor="bic">BIC *</Label>
                <Input
                  id="bic"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  required
                  error={field.state.meta.errors[0]}
                />
                <FieldError id={field.name} error={field.state.meta.errors[0]} />
              </div>
            )}
          </form.Field>
        </div>
      </fieldset>

      <Button type="submit" disabled={submitStatus === 'loading' || submitStatus === 'success'}>
        {submitStatus === 'success' ? 'Antrag erfolgreich gesendet' : null}
        {submitStatus === 'loading' ? 'Wird gesendet...' : null}
        {submitStatus === 'idle' ? 'Mitgliedsantrag absenden' : null}
        {submitStatus === 'error' ? 'Fehler beim Senden' : null}
      </Button>
    </form>
  )
}
