import Head from 'next/head';

import { HeroAbout } from '@/components/HeroAbout';
import { OmOss } from '@/components/OmOss';
import { RepertoarPreview } from '@/components/RepertoarPreview';
import { Tilbakemeldinger } from '../components/Tilbakemeldinger';

export default function Om() {
  return (
    <>
      <Head>
        <title>
          Om Sang i begravelse – Salmer og fellessanger for en verdig avskjed
        </title>
        <meta name="description" content="TEXT HERE" />
        <link
          rel="canonical"
          href="https://sangibegravelse.no/susanne-hvinden-hals"
          key="canonical"
        />
      </Head>
      <div className="bg-white">
        <main>
          <HeroAbout />
          <OmOss />
          {/* <RepertoarPreview /> */}
          {/* <Tilbakemeldinger artistName="Susanne Hvinden Hals" /> */}
        </main>
      </div>
    </>
  );
}
