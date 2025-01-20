import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="no">
      <Head>
        <link rel="icon" href="/images/general/meta-logo.svg" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/sth1kfg.css"
        ></link>
      </Head>
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
