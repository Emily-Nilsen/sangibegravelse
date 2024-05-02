import Head from 'next/head';

import { HeroAbout } from '@/components/HeroAbout';
import { OmOss } from '@/components/OmOss';

export default function Om() {
  return (
    <>
      <Head>
        <title>Om Sang i begravelse</title>
        <meta name="description" content="" />
        <link
          rel="canonical"
          href="https://sangibegravelse.no/om"
          key="canonical"
        />
      </Head>
      <div className="bg-white">
        <main>
          <HeroAbout />
          <OmOss />
        </main>
      </div>
    </>
  );
}
