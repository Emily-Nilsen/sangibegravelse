import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="no">
      <Head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dt3k2apqd/image/upload/v1698149656/Sang%20i%20begravelse/Sang_i_begravelse_logo_l0ipsd.svg"
        />
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
