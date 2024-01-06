import Head from 'next/head';

import { HeroJanTore } from '@/components/HeroJanTore';
import { JanTore } from '@/components/JanTore';
import { Tilbakemeldinger } from '../components/Tilbakemeldinger';

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
          <Tilbakemeldinger artistName="Jan-Tore Saltnes" />
        </main>
      </div>
    </>
  );
}
