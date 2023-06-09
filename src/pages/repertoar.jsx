import Head from 'next/head';

import { HeroRepertoar } from '@/components/HeroRepertoar';
import { RepertoarToggle } from '@/components/RepertoarToggle';

export default function Repertoar() {
  return (
    <>
      <Head>
        <title>
          Sang i begravelse - Profesjonell begravelsessang og musikktjenester
        </title>
        <meta
          name="description"
          content="Finn de perfekte sangene for begravelser. Profesjonelle sangere og fiolinister er tilgjengelige. Kontakt oss i dag."
        />
        <link
          rel="canonical"
          href="https://www.sangibegravelse.no/repetoar"
          key="canonical"
        />
      </Head>
      <div className="bg-white">
        <main>
          <HeroRepertoar />
          <RepertoarToggle />
        </main>
      </div>
    </>
  );
}
