import Head from 'next/head';

import { HeroSusanne } from '@/components/HeroSusanne';
import { Susanne } from '@/components/Susanne';

export default function SusanneHvindenHals() {
  return (
    <>
      <Head>
        <title>
          Susanne Hvinden Hals – Talentfull sanger med forskjønnende stemme og
          allsidig repertoar
        </title>
        <meta
          name="description"
          content="Opplev den talentfulle sangeren Susanne Hvinden Hals med en fortryllende stemme og allsidig repertoar fra pop til opera. Les om hennes imponerende karriere."
        />
        <link
          rel="canonical"
          href="https://www.sangibegravelse.no/susanne-hvinden-hals"
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
