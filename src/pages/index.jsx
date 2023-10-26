import Head from 'next/head';

import { HeroHjem } from '@/components/HeroHjem';
import { Oppdatering } from '@/components/Oppdatering';
import { RepertoarPreview } from '@/components/RepertoarPreview';
import { ArtistsPreview } from '@/components/ArtistsPreview';
import { Testimonial } from '@/components/Testimonial';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Sang i begravelse - Profesjonell begravelsessang og musikktjenester
        </title>
        <meta
          name="description"
          content="Finn de perfekte sangene for begravelser. Profesjonelle sangere og musikere med høy kvalitet er tilgjengelige. Vi hjelper pårørende med passende begravelsesmusikk."
        />
        <link
          rel="canonical"
          href="https://sangibegravelse.no/"
          key="canonical"
        />
      </Head>
      <div className="bg-white">
        <main>
          <HeroHjem />
          <Oppdatering />
          <RepertoarPreview />
          <ArtistsPreview />
          <Testimonial />
        </main>
      </div>
    </>
  );
}
