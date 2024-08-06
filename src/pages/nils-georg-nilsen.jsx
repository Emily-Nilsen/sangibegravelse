import Head from 'next/head';

import { HeroNilsGeorg } from '@/components/HeroNilsGeorg';
import { NilsGeorg } from '@/components/NilsGeorg';
import { Tilbakemeldinger } from '@/components/Tilbakemeldinger';
import { ArtistSamples } from '@/components/ArtistSamples';
import NGSamples from '../images/profiles/NG-samples.webp';

const features = [
  {
    title: 'Caruso',
    description: 'En klassisk italiensk sang av Lucio Dalla.',
    audio: true,
    audioUrl: '/audio/Caruso_with_piano.mp3',
  },
  {
    title: 'Crazy',
    description: 'En pop sang av Willie Nelson.',
    audio: true,
    audioUrl: '/audio/Crazy.mp3',
  },
  {
    title: 'Vise i vinterlys',
    description: 'En vinter og jul sang av Finn Ludt og Erik Bye.',
    audio: true,
    audioUrl: '/audio/Vinterlyset.mp3',
  },
  {
    title: 'Unchained melody',
    description: 'En pop sang av Alex North og Hy Zaret.',
    audio: true,
    audioUrl: '/audio/Unchained_melody.mp3',
  },
];

const imageUrl = NGSamples;
const imageAlt = 'Nils Georg Nilsen';
const subtitle = 'Nils Georg Nilsen';
const title = 'Allsidig sanger med et bredt repertoar';

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
          <ArtistSamples
            features={features}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            subtitle={subtitle}
            title={title}
          />
          <Tilbakemeldinger artistName="Nils Georg Nilsen" />
        </main>
      </div>
    </>
  );
}
