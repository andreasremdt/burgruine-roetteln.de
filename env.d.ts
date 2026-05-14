/// <reference types="node" />

declare module '@payloadcms/next/css'

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SERVER_URL: string
    PAYLOAD_SECRET: string
    DATABASE_URI: string
    DATABASE_NAME: string
    DATABASE_APP_NAME: string
    IMAGEKIT_PRIVATE_KEY: string
    IMAGEKIT_FOLDER: string

    EMAIL_SMTP_HOST: string
    EMAIL_SMTP_USER: string
    EMAIL_SMTP_PASSWORD: string
    EMAIL_RECIPIENT_BOOKING_FORM: string
    EMAIL_RECIPIENT_CONTACT_FORM: string
    GOOGLE_ANALYTICS_ID: string
  }
}
