import Head from 'next/head';

import { HeroHjem } from '@/components/HeroHjem';

import { RepertoarToggle } from '@/components/RepertoarToggle';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://sangibegravelse.no/',
    name: 'Sang i begravelse',
    image: '/images/general/meta-img.webp',
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
          Sang i begravelse - Musikk fremført av profesjonelle artister
        </title>
        <meta
          name="description"
          content="Sang i begravelse tilbyr et stort sortiment av sanger egnet for bruk i begravelser. Utforsk vårt brede utvalg for å finne den perfekte sangen for deres minnestund. Vår nettside tilbyr all nødvendig informasjon for å gjøre et informert valg av sang til en verdig avskjed."
        />
        <meta
          name="keywords"
          content="begravelse, sang, musikk, Norge, solosang, gravferd, forslag til musikk ved gravferd, artister, begravelsesmusikk, minneseremoni, urnenedsettelse, repertoar, repertoarliste, begravelsessang, begravelsessanger, sanger, forslag til salmer ved gravferd, salmer ved gravferd, forslag, forslag til sanger, forslag til sanger ved gravferd, fiolin, solo, duett, viser, salmer, pop, rock, soul, julesanger, klassisk, opera, folkemusikk, musikal, jazz, R&B"
        />
        <link
          rel="canonical"
          href="https://sangibegravelse.no/"
          key="canonical"
        />
        {/* Open Graph Details */}
        <meta
          property="og:title"
          content="Sang i begravelse - Musikk fremført av profesjonelle artister"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sangibegravelse.no/" />
        <meta property="og:image" content="/images/general/meta-logo.svg" />
        <meta property="og:image" content="/images/general/meta-img.webp" />
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

          <RepertoarToggle />
        </main>
      </div>
    </>
  );
}
