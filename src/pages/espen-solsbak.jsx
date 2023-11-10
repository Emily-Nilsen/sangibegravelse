import Head from 'next/head';

import { HeroEspen } from '@/components/HeroEspen';
import { Espen } from '@/components/Espen';
import { Tilbakemeldinger } from '../components/Tilbakemeldinger';

export default function EspenSolsbak() {
  return (
    <>
      <Head>
        <title>
          Espen Solsbak – Mangfoldig sanger med unik formidlingsevne
        </title>
        <meta
          name="description"
          content="Espen Solsbak, talentfull sanger, behersker flere sjangre fra opera til jazz. Erfaren med opptredener og seremonier."
        />
        <link
          rel="canonical"
          href="https://sangibegravelse.no/espen-solsbak"
          key="canonical"
        />
      </Head>
      <div className="bg-white">
        <main>
          <HeroEspen />
          <Espen />
          {/* <Tilbakemeldinger artistName="Espen Solsbak" /> */}
        </main>
      </div>
    </>
  );
}
