import Head from 'next/head';

import { HeroNilsGeorg } from '@/components/HeroNilsGeorg';
import { NilsGeorg } from '@/components/NilsGeorg';
import { Tilbakemeldinger } from '../components/Tilbakemeldinger';

export default function NilsGeorgNilsen() {
  return (
    <>
      <Head>
        <title>
          Nils Georg Nilsen – Allsidig sanger med imponerende operarepertoar
        </title>
        <meta
          name="description"
          content="Utforsk den allsidige sangeren Nils Georg Nilsen med imponerende operaprestasjoner og bredt repertoar. Les om hans karriere og opptredener."
        />
        <link
          rel="canonical"
          href="https://sangibegravelse.no/nils-georg-nilsen"
          key="canonical"
        />
      </Head>
      <div className="bg-white">
        <main>
          <HeroNilsGeorg />
          <NilsGeorg />
          <Tilbakemeldinger artistName="Nils Georg Nilsen" />
        </main>
      </div>
    </>
  );
}
