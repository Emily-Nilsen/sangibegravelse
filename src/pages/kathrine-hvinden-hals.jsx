import Head from 'next/head';

import { HeroKathrine } from '@/components/HeroKathrine';
import { Kathrine } from '@/components/Kathrine';

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
          href="https://www.sangibegravelse.no/kathrine-hvinden-hals"
          key="canonical"
        />
      </Head>
      <div className="bg-white">
        <main>
          <HeroKathrine />
          <Kathrine />
        </main>
      </div>
    </>
  );
}
