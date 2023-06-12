import Head from 'next/head';

import { HeroHjem } from '@/components/HeroHjem';
import { RepertoarPreview } from '@/components/RepertoarPreview';
import { ArtistsPreview } from '@/components/ArtistsPreview';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Sang i begravelse - Profesjonell begravelsessang og musikktjenester
        </title>
        <meta
          name="description"
          content="Finn de perfekte sangene for begravelser. Profesjonelle sangere og fiolinister er tilgjengelige. Kontakt oss i dag."
        />
        <link
          rel="canonical"
          href="https://www.sangibegravelse.no/"
          key="canonical"
        />
      </Head>
      <div className="bg-white">
        <main>
          <HeroHjem />
          <RepertoarPreview />
          <ArtistsPreview />
        </main>
      </div>
    </>
  );
}
