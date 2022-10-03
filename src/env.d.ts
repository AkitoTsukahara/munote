/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MACLOUD_API_BASE_URL: string
  readonly VITE_DEV_CF_COGNITO_PASS: ?string
  readonly VITE_ROLLBAR_SERVER_TOKEN: string
  readonly VITE_ROLLBAR_CLIENT_TOKEN: string
  readonly VITE_ROLLBAR_ENVIRONMENT: string
  readonly VITE_MACLOUD_BASE_URL: string
  readonly VITE_MACLOUD_DOMAIN: string
  readonly VITE_GTM_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
