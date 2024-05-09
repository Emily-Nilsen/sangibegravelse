import Head from 'next/head';

import { HeroHjem } from '@/components/HeroHjem';
import { Oppdatering } from '@/components/Oppdatering';
import { RepertoarPreview } from '@/components/RepertoarPreview';

import { ForslagPreview } from '../../components/ForslagPreview';
import { HeroProgram } from '../../components/HeroProgram';
import { SpotifyPlayer } from '@/components/SpotifyPlayer';

export default function ProgramForslag() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://sangibegravelse.no/forslag-program',
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
          href="https://sangibegravelse.no/forslag-program"
          key="canonical"
        />
        {/* Open Graph Details */}
        <meta
          property="og:title"
          content="Sang i begravelse - Musikk fremført av profesjonelle artister"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://sangibegravelse.no/forslag-program"
        />
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
          <HeroProgram />
          {/* heading */}

          <div className="pt-24 pb-12 bg-white sm:pt-32 sm:pb-16">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
              <div className="max-w-2xl mx-auto lg:mx-0">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Program forslag
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Her er det noen forslag til progamsammensetninger. Her kan man
                  velge et ferdig program, plukke ønskede sanger og sette det
                  sammen til foretrukket program.
                </p>
                <p className="mt-6 text-base leading-8 text-gray-600">
                  Har man med instrumentalister kan de i tillegg spille ved
                  inngang og utgang. Ønskes veiledning kan man ta kontakt
                  solister.
                </p>
                <SpotifyPlayer spotifyUri="track/4LN5MYmKfIOmK1OaFeaUSp?si=5a74ed374e2a45b4" />
              </div>
            </div>
          </div>

          <ForslagPreview />
        </main>
      </div>
    </>
  );
}
