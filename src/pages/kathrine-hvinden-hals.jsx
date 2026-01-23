import Head from 'next/head';

import { HeroKathrine } from '@/components/HeroKathrine';
import { Kathrine } from '@/components/Kathrine';
import { ArtistSamples } from '@/components/ArtistSamples';
import { KathrineVideoShowcase } from '@/components/KathrineVideoShowcase';
import KHHSamples from '../images/profiles/KHH-samples.webp';

const features = [
  {
    title: 'Hvem jeg er',
    description: 'En pop sang av Christian Heggen.',
    audio: true,
    audioUrl: '/audio/Hvem_Jeg_Er.mp3',
  },
  {
    title: 'O mio babbino caro (liveopptak)',
    description:
      'En sopran aria av Giacomo Puccini fra operaen Gianni Schicchi.',
    audio: true,
    audioUrl: '/audio/O_mio_babbino_caro.mp3',
  },
];

const imageUrl = KHHSamples;
const imageAlt = 'Kathrine Hvinden Hals';
const subtitle = 'Kathrine Hvinden Hals';
const title = 'Prisvinnende internasjonal fiolinist';

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
          <KathrineVideoShowcase />
        </main>
      </div>
    </>
  );
}
