import '@/styles/globals.css';
import 'focus-visible';
import type { AppProps } from 'next/app';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { BackToTopButton } from '@/components/BackToTopButton'; //

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="relative">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </>
  );
}
