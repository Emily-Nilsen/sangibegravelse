import Head from 'next/head';

import { HeroEspen } from '@/components/HeroEspen';
import { Espen } from '@/components/Espen';
import { ArtistSamples } from '@/components/ArtistSamples';
import ESSamples from '../images/profiles/ES-samples.webp';

const features = [
  // {
  //   title: 'Himmelhøge sti',
  //   description: 'En pop sang av Odd Erik Ognedal og Ingvar Hovland.',
  //   audio: true,
  //   audioUrl: '/audio/Himmelhøgesti.mp3',
  // },
  {
    title: 'Det beste du har hatt',
    description: 'En pop sang av Ingvar Ambjørnsen og Bjørn Eidsvåg.',
    audio: true,
    audioUrl: '/audio/E_DetBesteDuHarHatt.mp3',
  },
  {
    title: 'Farfars reise',
    description: 'En vise av Espen Solsbak.',
    audio: true,
    audioUrl: '/audio/E_Farfarsreise.mp3',
  },
  {
    title: 'Norsk stev',
    description: 'En tradisjonell folkesang fra Norge.',
    audio: true,
    audioUrl: '/audio/E_NorskStev.mp3',
  },
  {
    title: 'Se tu non torni a Scandiani',
    description: 'En klassisk italiensk sang av Francesco Paolo Tosti.',
    audio: true,
    audioUrl: '/audio/E_SeTuNonTorni_AScandiani_FPTosti.mp3',
  },
  {
    title: 'Sov i ro fra snøfall',
    description: 'En vinter og jul sang av Henrik Skram og Ruth Lillegraven.',
    audio: true,
    audioUrl: '/audio/E_SovIRoFraSnøfall_HenrikSkram.mp3',
  },
  {
    title: 'Viskar en bön',
    description: 'En svensk visesang av Georg Riedel og Astrid Lindgren.',
    audio: true,
    audioUrl: '/audio/E_ViskarEnBön.mp3',
  },
  {
    title: 'Edelweiss',
    description:
      'En musikal sang av Richard Rodgers og Oscar Hammerstein II fra The Sound of Music.',
    audio: true,
    audioUrl: '/audio/MM_E_Edelweiss.mp3',
  },
];

const imageUrl = ESSamples;
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
