import Head from 'next/head';

import { HeroAudun } from '@/components/HeroAudun';
import { Audun } from '@/components/Audun';
import { ArtistSamples } from '@/components/ArtistSamples';
import SHSamples from '../images/profiles/SH-samples.webp';

const features = [
  {
    title: 'Nordlys',
    description: 'Komposisjon av Sebastian.',
    audio: true,
    audioUrl: '/audio/Nordlys.mp3',
  },
  {
    title: 'Psalme',
    description: 'Komposisjon av Sebastian.',
    audio: true,
    audioUrl: '/audio/Psalme.mp3',
  },
  {
    title: 'Skarvesteinen',
    description: 'Komposisjon av Sebastian.',
    audio: true,
    audioUrl: '/audio/Skarvesteinen.mp3',
  },
  {
    title: 'Storskaden',
    description: 'Komposisjon av Sebastian.',
    audio: true,
    audioUrl: '/audio/Storskaden.mp3',
  },
];

export default function AudunSandvik() {
  return (
    <>
      <Head>
        <title>
          Audin Sandvik – Cellist som fortryller oss med instrumentets rikdom av
          klang.
        </title>
        <meta
          name="description"
          content="Utforsk den allsidige cellist Audin Sandvik som fengsler oss med instrumentets rikdom av klang. Med sitt inderlige, personlige uttrykk formidler han våre dypeste følelser."
        />
        <link
          rel="canonical"
          href="https://sangibegravelse.no/sebastian-haugen"
          key="canonical"
        />
      </Head>
      <div className="bg-white">
        <main>
          <HeroAudun />
          <Audun />
          {/* <ArtistSamples
            features={features}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            subtitle={subtitle}
            title={title}
            imageCredit={imageCredit}
          /> */}
          {/* <Tilbakemeldinger artistName="Nils Georg Nilsen" /> */}
        </main>
      </div>
    </>
  );
}
