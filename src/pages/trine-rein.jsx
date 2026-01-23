import Head from 'next/head';

import { HeroTrineRein } from '@/components/HeroTrineRein';
import { TrineRein } from '@/components/TrineRein';
import { ArtistSamples } from '@/components/ArtistSamples';
import { Tilbakemeldinger } from '@/components/Tilbakemeldinger';
import { TrineVideoShowcase } from '@/components/TrineVideoShowcase';
import TrineSamples from '../images/profiles/TR-samples-updated.webp';

const features = [
  {
    title: "Hello It's Me",
    description: 'En pop sang av Trine Rein.',
    audio: true,
    audioUrl: '/audio/Trine_Rein_Hello_Its_Me.mp3',
  },
  {
    title: 'Amazing Grace',
    description: 'En salme av John Newton og William Walker.',
    audio: true,
    audioUrl: '/audio/Trine_Rein_Amazing_Grace.mp3',
  },
  {
    title: 'Deilig er jorden',
    description: 'En salme av B.S. Ingemann og Breslau.',
    audio: true,
    audioUrl: '/audio/Trine_Rein_Deilig_er_jorden.mp3',
  },
  {
    title: 'Miss You',
    description: 'En pop sang av Trine Rein.',
    audio: true,
    audioUrl: '/audio/Trine_Rein_Miss_you.mp3',
  },
  {
    title: 'Never Far Away',
    description: 'En pop sang av Trine Rein.',
    audio: true,
    audioUrl: '/audio/Trine_Rein_Never_Far_Away.mp3',
  },
  {
    title: 'O Holy Night',
    description: 'En salme av Adolphe Adam og John S. Dwight',
    audio: true,
    audioUrl: '/audio/Trine_Rein_O_Holy_Night.mp3',
  },
];

const imageUrl = TrineSamples;
const imageAlt = 'Trine Rein';
const subtitle = 'Repertoar';
const title = 'Et variert utvalg av sanger fra Trine Rein';
const imageCredit = 'Svein Brimi';

export default function TrineReinPage() {
  return (
    <>
      <Head>
        <title>Trine Rein – Allsidig sanger med lang erfaring</title>
        <meta
          name="description"
          content="Bli kjent med Trine Rein og hennes brede musikalske erfaring. Utforsk et utvalg av sanger og les om hennes bakgrunn som begravelsessanger i Oslo og omegn."
        />
        <link
          rel="canonical"
          href="https://sangibegravelse.no/trine-rein"
          key="canonical"
        />
      </Head>
      <div className="bg-white">
        <main>
          <HeroTrineRein />
          <TrineRein />
          <ArtistSamples
            features={features}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            subtitle={subtitle}
            title={title}
            imageCredit={imageCredit}
          />
          <TrineVideoShowcase />
          <Tilbakemeldinger artistName="Trine Rein" />
        </main>
      </div>
    </>
  );
}
