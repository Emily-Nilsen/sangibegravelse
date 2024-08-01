import Head from 'next/head';

import { HeroSebastian } from '@/components/HeroSebastian';
import { Sebastian } from '@/components/Sebastian';
import { Tilbakemeldinger } from '@/components/Tilbakemeldinger';
import { ArtistSamples } from '@/components/ArtistSamples';

const features = [
  {
    title: 'Nordlys',
    description: 'En jazz sang av Sebastian.',
    audio: true,
    audioUrl: '/audio/Nordlys.mp3',
  },
  {
    title: 'Psalme',
    description: 'En folkemusikk sang av Sebastian.',
    audio: true,
    audioUrl: '/audio/Psalme.mp3',
  },
  {
    title: 'Skarvesteinen',
    description: 'En jazz sang av Sebastian.',
    audio: true,
    audioUrl: '/audio/Skarvesteinen.mp3',
  },
  {
    title: 'Storskaden',
    description: 'En jazz sang av Sebastian.',
    audio: true,
    audioUrl: '/audio/Storskaden.mp3',
  },
];

const imageUrl = '/images/artists/sebastian-haugen-profile.webp';
const imageAlt = 'Sebastian Haugen';
const subtitle = 'Allsidig bassist med bredt';
const title = 'Repertoar og jazzbakgrunn';

export default function SebastianHaugen() {
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
          <HeroSebastian />
          <Sebastian />
          <ArtistSamples
            features={features}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            subtitle={subtitle}
            title={title}
          />
          {/* <Tilbakemeldinger artistName="Nils Georg Nilsen" /> */}
        </main>
      </div>
    </>
  );
}
