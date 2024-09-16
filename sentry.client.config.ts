import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://fe8aba6db40955649b882a7813ea9714@o4507915161436160.ingest.us.sentry.io/4507964504145920",

  integrations: [Sentry.replayIntegration()],

  tracesSampleRate: 1,

  replaysSessionSampleRate: 0.1,

  replaysOnErrorSampleRate: 1.0,

  debug: false,
});
