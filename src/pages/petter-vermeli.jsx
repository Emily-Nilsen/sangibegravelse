import Head from 'next/head';

import { HeroPetterVermeli } from '@/components/HeroPetterVermeli';
import { PetterVermeli } from '@/components/PetterVermeli';
import { ArtistSamples } from '@/components/ArtistSamples';
import { Tilbakemeldinger } from '@/components/Tilbakemeldinger';
import PetterSamples from '../images/profiles/PV-samples.webp';

const features = [
  {
    title: '«Kan jeg gjøre noe med det»',
    description: 'Sigvart Dagsland',
    audio: false,
  },
  {
    title: '«She»',
    description: 'Elvis Costello',
    audio: false,
  },
  {
    title: '«Smile»',
    description: 'Nat King Cole',
    audio: false,
  },
  {
    title: '«Adieu»',
    description: 'Jahn Teigen',
    audio: false,
  },
  {
    title: '«Nella Fantastia»',
    description: 'Ennio Morricone',
    audio: false,
  },
  {
    title: '«Blå salme»',
    description: 'Erik Bye',
    audio: false,
  },
];

const imageUrl = PetterSamples;
const imageAlt = 'Petter Vermeli';
const subtitle = 'Repertoar';
const title = 'Et bredt spekter av viser, pop og musikallåter';

export default function PetterVermeliPage() {
  return (
    <>
      <Head>
        <title>Petter Vermeli – Allsidig sanger og musikalartist</title>
        <meta
          name="description"
          content="Bli kjent med sangeren og skuespilleren Petter Vermeli. Les om hans erfaring fra teater- og musikalscenen og utforsk et utvalg av hans repertoar."
        />
        <link
          rel="canonical"
          href="https://sangibegravelse.no/petter-vermeli"
          key="canonical"
        />
      </Head>
      <div className="bg-white">
        <main>
          <HeroPetterVermeli />
          <PetterVermeli />
          <ArtistSamples
            features={features}
            imageUrl={imageUrl}
            imageAlt={imageAlt}
            subtitle={subtitle}
            title={title}
          />
          <Tilbakemeldinger artistName="Petter Vermeli" />
        </main>
      </div>
    </>
  );
}
