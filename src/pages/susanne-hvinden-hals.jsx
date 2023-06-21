import Head from 'next/head';

import { HeroSusanne } from '@/components/HeroSusanne';
import { Susanne } from '@/components/Susanne';

export default function SusanneHvindenHals() {
  return (
    <>
      <Head>
        <title>Sopranen Susanne Hvinden Hals</title>
        <meta
          name="description"
          content="En talentfull sopran med en fortryllende stemme og allsidig repertoar fra pop til opera."
        />
        <link
          rel="canonical"
          href="https://www.sangibegravelse.no/"
          key="canonical"
        />
      </Head>
      <div className="bg-white">
        <main>
          <HeroSusanne />
          <Susanne />
        </main>
      </div>
    </>
  );
}
