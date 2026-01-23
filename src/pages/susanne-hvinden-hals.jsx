import Head from 'next/head';

import { HeroSusanne } from '@/components/HeroSusanne';
import { Susanne } from '@/components/Susanne';
import { ArtistSamples } from '@/components/ArtistSamples';
import { SusanneVideoShowcase } from '@/components/SusanneVideoShowcase';
import { Tilbakemeldinger } from '../components/Tilbakemeldinger';
import SHHSamples from '../images/profiles/SHH-samples.webp';

const features = [
  {
    title: 'Hvem jeg er',
    description: 'En pop sang av Christian Heggen.',
    audio: true,
    audioUrl: '/audio/Hvem_Jeg_Er.mp3',
  },
  {
    title: 'Ach, ich fühl’s (liveopptak)',
    description: 'En klassisk sang av Wolfgang Amadeus Mozart.',
    audio: true,
    audioUrl: '/audio/Ach_ich_fuhls.mp3',
  },
  {
    title: 'Kjærlighet (liveopptak)',
    description: 'En pop sang av Vladimir Cosma og Rolf Tofte.',
    audio: true,
    audioUrl: '/audio/kjærlighet.mp3',
  },
  {
    title: 'O mio babbino caro (liveopptak)',
    description:
      'En sopran aria av Giacomo Puccini fra operaen Gianni Schicchi.',
    audio: true,
    audioUrl: '/audio/O_mio_babbino_caro.mp3',
  },
];

const imageUrl = SHHSamples;
const imageAlt = 'Susanne Hvinden Hals';
const subtitle = 'Susanne Hvinden Hals';
const title = 'Fra pop til opera';

export default function SusanneHvindenHals() {
  return (
    <>
      <Head>
        <title>
          Susanne Hvinden Hals – Talentfull sanger med forskjønnende stemme og
          allsidig repertoar
        </title>
        <meta
          name="description"
          content="Opplev den talentfulle sangeren Susanne Hvinden Hals med en fortryllende stemme og allsidig repertoar fra pop til opera. Les om hennes imponerende karriere."
        />
        <link
          rel="canonical"
          href="https://sangibegravelse.no/susanne-hvinden-hals"
          key="canonical"
        />
      </Head>
      <div className="bg-white">
        <main>
          <HeroSusanne />
          <Susanne />
          <ArtistSamples
            features={features}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            subtitle={subtitle}
            title={title}
          />
          <SusanneVideoShowcase />

          <Tilbakemeldinger artistName="Susanne Hvinden Hals" />
        </main>
      </div>
    </>
  );
}
