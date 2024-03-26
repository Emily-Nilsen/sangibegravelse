import '@/styles/globals.css';
import 'focus-visible';
import { useRouter } from 'next/router';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { BackToTopButton } from '@/components/BackToTopButton'; //

export default function App({ Component, pageProps }) {
  const router = useRouter();
  let textColour;

  if (
    router.pathname === '/' ||
    router.pathname === '/repertoar' ||
    router.pathname === '/tilbakemeldinger' ||
    router.pathname === '/personvernerklaering' ||
    router.pathname === '/kontakt' ||
    router.pathname === '/artister' ||
    router.pathname === '/om' ||
    router.pathname === '/salmer'
  ) {
    textColour = 'dark';
  } else if (router.pathname.startsWith('/repertoar/')) {
    textColour = 'white';
  } else {
    textColour = 'white'; // Default to white for all other pages
  }

  return (
    <>
      <div className="relative bg-white">
        <Header textColour={textColour} />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </>
  );
}
