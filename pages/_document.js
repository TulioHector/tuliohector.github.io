'use client';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
      <Html lang='en'>
        <Head>
          {/* <link rel="stylesheet preload" href="./assets/icons/fa/css/all.min.css" as="style" type="text/css" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }