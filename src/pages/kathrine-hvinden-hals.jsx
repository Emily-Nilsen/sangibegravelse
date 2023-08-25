import Head from 'next/head';

import { HeroKathrine } from '@/components/HeroKathrine';
import { Kathrine } from '@/components/Kathrine';

export default function KathrineHvindenHals() {
  return (
    <>
      <Head>
        <title>Fiolinist Kathrine Hvinden Hals</title>
        <meta
          name="description"
          content="Talentfull fiolinist med prisvinnende bakgrunn, internasjonal
          erfaring, solistoppdrag og engasjert musikkunderviser."
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
