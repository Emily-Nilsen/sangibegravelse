import Head from 'next/head';

import { HeroNilsGeorg } from '@/components/HeroNilsGeorg';
import { NilsGeorg } from '@/components/NilsGeorg';

export default function NilsGeorgNilsen() {
  return (
    <>
      <Head>
        <title>Tenor Nils Georg Nilsen</title>
        <meta
          name="description"
          content="Allsidig tenor med imponerende prestasjoner og et omfattende operarepertoar."
        />
        <link
          rel="canonical"
          href="https://www.sangibegravelse.no/"
          key="canonical"
        />
      </Head>
      <div className="bg-white">
        <main>
          <HeroNilsGeorg />
          <NilsGeorg />
        </main>
      </div>
    </>
  );
}
