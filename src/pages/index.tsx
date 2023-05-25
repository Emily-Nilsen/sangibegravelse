import Image from 'next/image';
import Head from 'next/head';

import { HeroHjem } from '@/components/HeroHjem';
import { RepertoarList } from '@/components/RepertoarList';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Sang i begravelse - Profesjonell begravelsessang og musikktjenester
        </title>
        <meta
          name="description"
          content="Finn de perfekte sangene for begravelsestjenester. Profesjonelle sangere og fiolinister er tilgjengelige. Kontakt oss i dag."
        />
        <link
          rel="canonical"
          href="https://www.sangibegravelse.no/"
          key="canonical"
        />
      </Head>
      <div className="bg-white">
        <main>
          <HeroHjem />
          <RepertoarList />
        </main>
        <Footer />
      </div>
    </>
  );
}
