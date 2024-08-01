import Head from 'next/head';

import { HeroKathrine } from '@/components/HeroKathrine';
import { Kathrine } from '@/components/Kathrine';
import { ArtistSamples } from '@/components/ArtistSamples';

const features = [
  {
    title: 'Hvem jeg er',
    description: 'En pop sang av Christian Heggen.',
    audio: true,
    audioUrl: '/audio/Hvem_Jeg_Er.mp3',
  },
];

const imageUrl = '/images/artists/kathrine-playing.webp';
const imageAlt = 'Susanne Hvinden Hals';
const subtitle = 'Talentfull prisvinnende fiolinist med';
const title = 'Internasjonal erfaring';

export default function KathrineHvindenHals() {
  return (
    <>
      <Head>
        <title>
          Kathrine Hvinden Hals – Prisvinnende fiolinist med internasjonal
          erfaring
        </title>
        <meta
          name="description"
          content="Oppdag talentet til prisvinnende fiolinist Kathrine Hvinden Hals med internasjonal erfaring. Utforsk hennes solokarriere og prestisjetunge opptredener."
        />
        <link
          rel="canonical"
          href="https://sangibegravelse.no/kathrine-hvinden-hals"
          key="canonical"
        />
      </Head>
      <div className="bg-white">
        <main>
          <HeroKathrine />
          <Kathrine />
          <ArtistSamples
            features={features}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            subtitle={subtitle}
            title={title}
          />
        </main>
      </div>
    </>
  );
}
