'use client'

import { useForm } from '@tanstack/react-form'
import { useLayoutEffect, useRef, useState } from 'react'
import Label from '../ui/label'
import Input from '../ui/input'
import Textarea from '../ui/textarea'
import Button from '../ui/button'
import {
  validateEmail,
  validateMessage,
  validateName,
  validateParticipants,
} from '@/lib/validate-booking-form'
import FieldError from '../ui/field-error'
import { getSearchParam } from '@/lib/utils'
import Select from '../ui/select'
import type { Tour } from '@/payload-types'
import sendBookingRequest from '@/actions/send-booking-request'
import Icon from '../ui/icon'

type Props = {
  tours: Tour[]
}

export default function BookingFormClient({ tours }: Props) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const form = useForm({
    defaultValues: {
      name: '',
      type: getSearchParam('type'),
      email: '',
      participants: '',
      message: '',
    },
    onSubmit: async ({ value }) => {
      try {
        setSubmitStatus('loading')

        const response = await sendBookingRequest(value)

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
            return
          }

          throw new Error('Fehler beim Senden der Nachricht')
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

  useLayoutEffect(() => {
    form.setFieldValue('type', getSearchParam('type'))
  }, [])

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
      {submitStatus === 'success' ? (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-white/90"
          role="alert"
        >
          <Icon name="check-circle" className="text-kornblau-400 mb-4 size-8" />
          <p className="text-center text-xl">
            <strong className="block">Vielen Dank für Ihre Nachricht.</strong>
            Wir werden uns schnellstmöglich um Ihre Anfrage kümmern.
          </p>
        </div>
      ) : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
        <form.Field
          name="name"
          validators={{
            onChange: ({ value }) => validateName(value),
          }}
        >
          {(field) => (
            <div className="mb-4">
              <Label htmlFor="name">Vor- und Nachname *</Label>
              <Input
                id="name"
                name={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                required
                autoComplete="given-name"
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
            <div className="mb-4">
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

      <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-4">
        <form.Field name="type">
          {(field) => (
            <div className="mb-4 sm:col-span-2 md:col-span-3">
              <Label htmlFor="type">Art der Führung *</Label>
              <Select
                name="type"
                id="type"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                required
              >
                {tours.map((tour) => (
                  <option key={tour.id} value={tour.title}>
                    {tour.title}
                  </option>
                ))}
              </Select>
            </div>
          )}
        </form.Field>

        <form.Field
          name="participants"
          validators={{
            onChange: ({ value }) => validateParticipants(value),
          }}
        >
          {(field) => (
            <div className="mb-4 sm:col-span-2 md:col-span-1">
              <Label htmlFor="participants">Anzahl Teilnehmer *</Label>
              <Input
                type="number"
                name={field.name}
                id="participants"
                required
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                error={field.state.meta.errors[0]}
              />
              <FieldError id={field.name} error={field.state.meta.errors[0]} />
            </div>
          )}
        </form.Field>
      </div>

      <div className="mb-4">
        <form.Field
          name="message"
          validators={{
            onChange: ({ value }) => validateMessage(value),
          }}
        >
          {(field) => (
            <div className="mb-4">
              <Label htmlFor="message">Ihre Nachricht *</Label>
              <Textarea
                name={field.name}
                id="message"
                rows={5}
                required
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                error={field.state.meta.errors[0]}
              />
              <FieldError id={field.name} error={field.state.meta.errors[0]} />
            </div>
          )}
        </form.Field>
      </div>

      <Button type="submit" disabled={submitStatus === 'loading' || submitStatus === 'success'}>
        {submitStatus === 'success' ? 'Nachricht erfolgreich gesendet' : null}
        {submitStatus === 'loading' ? 'Wird gesendet...' : null}
        {submitStatus === 'idle' ? 'Nachricht senden' : null}
        {submitStatus === 'error' ? 'Fehler beim Senden' : null}
      </Button>
    </form>
  )
}
