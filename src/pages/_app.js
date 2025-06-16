// pages/_app.js
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics /> {/* This enables Vercel analytics tracking */}
    </>
  );
}

export default MyApp;

