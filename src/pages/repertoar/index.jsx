import Head from 'next/head';

import { HeroRepertoar } from '@/components/HeroRepertoar';
import { RepertoarToggle } from '@/components/RepertoarToggle';

export default function Repertoar() {
  return (
    <>
      <Head>
        <title>
          Repertoar av begravelsessanger – Klassisk, pop, salmer, viser og mer
        </title>
        <meta
          name="description"
          content="Utforsk vårt varierte repertoar av klassisk, pop, salmer, viser-sanger og mer med beskrivelser og arrangementer. Skap følelsesladet musikk til minnesverdige øyeblikk."
        />
        <link
          rel="canonical"
          href="https://sangibegravelse.no/repetoar"
          key="canonical"
        />
      </Head>
      <div>
        <main>
          <HeroRepertoar />
          <RepertoarToggle />
        </main>
      </div>
    </>
  );
}
