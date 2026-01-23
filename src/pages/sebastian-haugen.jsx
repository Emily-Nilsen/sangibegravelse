import Head from 'next/head';

import { HeroSebastian } from '@/components/HeroSebastian';
import { Sebastian } from '@/components/Sebastian';
// import { Tilbakemeldinger } from '@/components/Tilbakemeldinger';
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

const imageUrl = SHSamples;
const imageAlt = 'Sebastian Haugen';
const subtitle = 'Sebastian Haugen';
const title = 'Allsidig bassist med jazzbakgrunn';
const imageCredit = 'Randi Huseby';

export default function SebastianHaugen() {
  return (
    <>
      <Head>
        <title>
          Sebastian Haugen – Allsidig bassist med bredt repertoar og
          jazzbakgrunn.
        </title>
        <meta
          name="description"
          content="Utforsk den allsidige bassist Sebastian Haugen med med bredt repertoar og jazzbakgrunn. Les om hans bakgrunn og karriere."
        />
        <link
          rel="canonical"
          href="https://sangibegravelse.no/sebastian-haugen"
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
            imageCredit={imageCredit}
          />
          {/* <Tilbakemeldinger artistName="Nils Georg Nilsen" /> */}
        </main>
      </div>
    </>
  );
}
