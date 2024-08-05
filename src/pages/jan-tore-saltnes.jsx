import Head from 'next/head';

import { HeroJanTore } from '@/components/HeroJanTore';
import { JanTore } from '@/components/JanTore';
import { ArtistSamples } from '@/components/ArtistSamples';
import { Tilbakemeldinger } from '../components/Tilbakemeldinger';
import JTSamples from '../images/profiles/JT-samples.webp';

const features = [
  {
    title: 'Veiviser',
    description: 'En vise av Jan-Tore.',
    audio: true,
    audioUrl: '/audio/Veiviser.mp3',
  },
  {
    title: 'Vår beste dag',
    description: 'En vise av Erik Bye.',
    audio: true,
    audioUrl: '/audio/Vår_beste_dag.mp3',
  },
  {
    title: 'Håll mitt hjärta',
    description:
      'En pop sang av Peter Hallström, Lars Andersson og Björn Skifs.',
    audio: true,
    audioUrl: '/audio/Håll_mitt_hjärta.mp3',
  },
];

const imageUrl = JTSamples;
const imageAlt = 'Jan-Tore Saltnes';
const subtitle = 'Jan-Tore Saltnes';
const title = 'Etterspurt seremonisanger i Vestfold';

export default function JanToreSaltnes() {
  return (
    <>
      <Head>
        <title>
          Jan-Tore Saltnes – Profesjonell sanger for begravelser i Vestfold
        </title>
        <meta
          name="description"
          content="Profesjonell sanger for begravelser i Vestfold med variert repertoar og dyp musikalsk erfaring."
        />
        <link
          rel="canonical"
          href="https://sangibegravelse.no/jan-tore-saltnes"
          key="canonical"
        />
      </Head>
      <div className="bg-white">
        <main>
          <HeroJanTore />
          <JanTore />
          <ArtistSamples
            features={features}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            subtitle={subtitle}
            title={title}
          />
          <Tilbakemeldinger artistName="Jan-Tore Saltnes" />
        </main>
      </div>
    </>
  );
}
