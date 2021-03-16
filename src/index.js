import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import './reset.css';
import './bootstrap.css';
import './estilos.css';

import './fontawesome/all.css';

Sentry.init({
  dsn:
    'https://97dee2022485474498fe9dc5adc3ccc7@o255599.ingest.sentry.io/5525614',
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
