import React from 'react';

import NoSSR from 'react-no-ssr';

import App from '@/App';

import '@/App.css';

export function AppPage({ Component, pageProps }) {
  return (
    <NoSSR>
      <App Component={Component} pageProps={pageProps} />
    </NoSSR>
  )
}

export default AppPage;