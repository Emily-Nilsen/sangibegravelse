import Head from 'next/head';

import { HeroHjem } from '@/components/HeroHjem';
import { RepertoarPreview } from '@/components/RepertoarPreview';
import { ArtistsPreview } from '@/components/ArtistsPreview';
import { VideoList } from '@/components/VideoList';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Sang i begravelse - Profesjonell begravelsessang og musikktjenester
        </title>
        <meta
          name="description"
          content="Finn de perfekte sangene for begravelser. Profesjonelle sangere og musikere med høy kvalitet er tilgjengelige. Kontakt oss i dag."
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
          <RepertoarPreview />
          <ArtistsPreview />
          <VideoList />
        </main>
      </div>
    </>
  );
}