'use client'

import sendMessage from '@/actions/send-message'
import { useForm } from '@tanstack/react-form'
import { useRef, useState } from 'react'
import Heading from '../ui/heading'
import Label from '../ui/label'
import Input from '../ui/input'
import Textarea from '../ui/textarea'
import Text from '../ui/text'
import Button from '../ui/button'
import {
  validateEmail,
  validateMessage,
  validateName,
  validateSubject,
} from '@/lib/validate-message'
import FieldError from '../ui/field-error'
import Icon from '../ui/icon'

type Props = {
  title: string
  description: string
}

export default function ContactFormClient({ title, description }: Props) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const form = useForm({
    defaultValues: {
      name: '',
      subject: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: async ({ value }) => {
      try {
        setSubmitStatus('loading')

        const response = await sendMessage(value)

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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      ref={formRef}
      method="POST"
      noValidate
      className="z-10 order-1 bg-white md:order-2 md:col-span-2 md:-mt-60 md:border md:border-gray-200 md:p-8 lg:p-16"
    >
      <Heading level="h1" tag="h1">
        {title}
      </Heading>
      <Text className="mb-8">{description}</Text>

      <div className="relative">
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
              <div>
                <Label htmlFor="name">Vor- und Nachname</Label>
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
                <Label htmlFor="email">E-Mail-Adresse</Label>
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

        <form.Field name="phone">
          {(field) => (
            <div className="mb-4 w-1/2 pr-2">
              <Label htmlFor="phone">Telefonnummer</Label>
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
          name="subject"
          validators={{
            onChange: ({ value }) => validateSubject(value),
          }}
        >
          {(field) => (
            <div className="mb-4">
              <Label htmlFor="subject">Betreff</Label>
              <Input
                name={field.name}
                id="subject"
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
          name="message"
          validators={{
            onChange: ({ value }) => validateMessage(value),
          }}
        >
          {(field) => (
            <div className="mb-4">
              <Label htmlFor="message">Ihre Nachricht</Label>
              <Textarea
                name={field.name}
                id="message"
                rows={5}
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

        <Button type="submit" disabled={submitStatus === 'loading' || submitStatus === 'success'}>
          {submitStatus === 'success' ? 'Nachricht erfolgreich gesendet' : null}
          {submitStatus === 'loading' ? 'Wird gesendet...' : null}
          {submitStatus === 'idle' ? 'Nachricht senden' : null}
          {submitStatus === 'error' ? 'Fehler beim Senden' : null}
        </Button>
      </div>
    </form>
  )
}
