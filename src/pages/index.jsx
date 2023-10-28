import Head from 'next/head';

import { HeroHjem } from '@/components/HeroHjem';
import { Oppdatering } from '@/components/Oppdatering';
import { RepertoarPreview } from '@/components/RepertoarPreview';
import { ArtistsPreview } from '@/components/ArtistsPreview';
import { Testimonial } from '@/components/Testimonial';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://sangibegravelse.no/',
    name: 'Sang i begravelse',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/Sang_i_begravelse_jfysbv.webp',
    description:
      'En plattform for å finne og velge sanger til begravelser eller minnestunder med mulighet til å engasjere profesjonelle norske artister.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://sangibegravelse.no/sok?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <Head>
        <title>
          Sang i begravelse - musikk fremført av profesjonelle artister
        </title>
        <meta
          name="description"
          content="Sang i begravelse tilbyr et stort sortiment av sanger egnet for bruk i begravelser. Utforsk vårt brede utvalg for å finne den perfekte sangen for deres minnestund. Vår nettside tilbyr all nødvendig informasjon for å gjøre et informert valg av sang til en verdig avskjed."
        />
        <meta
          name="keywords"
          content="begravelse, sang, musikk, Norge, artister, begravelsesmusikk, minneseremoni, urnenedsettelse, repertoar, repertoarliste, begravelsessang, begravelsessanger, sanger, fiolin, solo, duett, viser, salmer, pop, rock, soul, julesanger, klassisk, opera, folkemusikk, musikal, jazz, R&B"
        />
        <link
          rel="canonical"
          href="https://sangibegravelse.no/"
          key="canonical"
        />
        {/* Open Graph Details */}
        <meta
          property="og:title"
          content="Sang i begravelse - musikk fremført av profesjonelle artister"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sangibegravelse.no/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dt3k2apqd/image/upload/v1698149656/Sang%20i%20begravelse/Sang_i_begravelse_logo_l0ipsd.svg"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/Sang_i_begravelse_jfysbv.webp"
        />
        <meta
          property="og:description"
          content="Sang i begravelse tilbyr et stort sortiment av sanger egnet for bruk i begravelser. Utforsk vårt brede utvalg for å finne den perfekte sangen for deres minnestund. Vår nettside tilbyr all nødvendig informasjon for å gjøre et informert valg av sang til en verdig avskjed."
        />
        <meta property="og:locale" content="nb_NO" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        ></script>
      </Head>
      <div className="bg-white">
        <main>
          <HeroHjem />
          <Oppdatering />
          <RepertoarPreview />
          <ArtistsPreview />
          <Testimonial />
        </main>
      </div>
    </>
  );
}
