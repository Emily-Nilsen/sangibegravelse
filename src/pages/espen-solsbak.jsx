import Head from 'next/head';

import { HeroEspen } from '@/components/HeroEspen';
import { Espen } from '@/components/Espen';
import { ArtistSamples } from '@/components/ArtistSamples';
import { Tilbakemeldinger } from '../components/Tilbakemeldinger';

const features = [
  {
    title: 'Himmelhøge sti',
    description: 'En pop sang av Odd Erik Ognedal og Ingvar Hovland.',
    audio: true,
    audioUrl: '/audio/Himmelhøgesti.mp3',
  },
];

const imageUrl = '/images/artists/espen_solsbak.webp';
const imageAlt = 'Espen Solsbak';
const subtitle = 'En meget allsidig sanger med';
const title = 'Musikalitet og formidlingsevne';

export default function EspenSolsbak() {
  return (
    <>
      <Head>
        <title>
          Espen Solsbak – Mangfoldig sanger med unik formidlingsevne
        </title>
        <meta
          name="description"
          content="Espen Solsbak, talentfull sanger, behersker flere sjangre fra opera til jazz. Erfaren med opptredener og seremonier."
        />
        <link
          rel="canonical"
          href="https://sangibegravelse.no/espen-solsbak"
          key="canonical"
        />
      </Head>
      <div className="bg-white">
        <main>
          <HeroEspen />
          <Espen />
          <ArtistSamples
            features={features}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            subtitle={subtitle}
            title={title}
          />
          {/* <Tilbakemeldinger artistName="Espen Solsbak" /> */}
        </main>
      </div>
    </>
  );
}
