import Head from 'next/head';
import { useRouter } from 'next/router';
import data from '../../../lib/data.json';
import { HeroSong } from '../../../components/HeroSong';
import { SongPageDetails } from '../../../components/SongPageDetails';

export function generateMetaTags(songData, url) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MusicComposition',
    name: songData.title,
    composer: songData.composer,
    description: `Få mer informasjon om sangen «${songData.title}» av ${songData.composer}, inkludert teksten.`,
    image: songData.mobile,
    inLanguage: 'nb',
    genre: songData.category,
    musicArrangement: songData.arrangement,
    recordedAs: {
      '@type': 'MusicRecording',
      name: songData.title,
      byArtist: [
        {
          '@type': 'PerformingGroup',
          name: 'Sang i begravelse',
          makesOffer: {
            '@type': 'Offer',
            description:
              'Tilbys å fremføres på begravelse eller minnestund av én eller flere artister fra "Sang i begravelse".',
            availability: 'http://schema.org/InStock',
          },
        },
      ],
    },
  };

  if (songData.audio) {
    schema.recordedAs.audio = {
      '@type': 'AudioObject',
      contentUrl: songData.audioUrl,
      description: `Utdrag av fremføring av ${songData.title} av ${songData.performers}`,
    };
    schema.recordedAs.byArtist.push({
      '@type': 'Person',
      name: songData.performers,
    });
  }

  return (
    <>
      {/* Basic Meta Tags */}
      <title>
        {songData.title} av {songData.composer}
      </title>
      <meta
        name="description"
        content={`Få mer informasjon om sangen «${songData.title}» av ${songData.composer}, inkludert teksten.`}
      />
      <meta
        name="keywords"
        content={`begravelse, musikk, begravelsesseremoni, minnestund, begravelsesmusikk, ${songData.title}, ${songData.composer}`}
      />
      <link rel="canonical" href={url} key="canonical" />

      {/* Open Graph */}
      <meta property="og:title" content={songData.title} />
      <meta
        property="og:description"
        content={`Få mer informasjon om sangen «${songData.title}» av ${songData.composer}, inkludert teksten.`}
      />
      <meta property="og:image" content={songData.mobile} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="music.song" />
      <meta property="og:site_name" content="Sang i begravelse" />

      {/* Combined Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      ></script>
    </>
  );
}

export default function SongPage({ songData }) {
  const router = useRouter();
  const baseUrl = 'https://sangibegravelse.no';
  const currentUrl = `${baseUrl}${router.asPath}`;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>{generateMetaTags(songData, currentUrl)}</Head>
      <div className="relative bg-white">
        <HeroSong
          songImage={songData.image}
          songTitle={songData.title}
          imageAlignment={songData.alignment}
        />
        {/* bottom white gradient */}

        <div className="relative">
          <SongPageDetails
            songCategory={songData.category}
            songTitle={songData.title}
            songComposer={songData.composer}
            songDescription={songData.description}
            songLyrics={songData.lyrics}
            songArrangement={songData.arrangement}
            songAudio={songData.audio}
            songAudioUrl={songData.audioUrl}
            songVideo={songData.video}
            songLanguage={songData.language}
            songPerformers={songData.performers}
          />
          <div className="absolute left-0 z-20 w-full overflow-visible opacity-100 h-60 -top-60 bg-gradient-to-t from-white" />

          {/* Render additional song details and schema data as needed */}
        </div>
      </div>
    </>
  );
}

const specialCharMap = {
  // German characters
  ä: 'ae',
  ö: 'oe',
  ü: 'ue',
  ß: 'ss',

  // French characters
  é: 'e',
  è: 'e',
  ê: 'e',
  ë: 'e',
  ç: 'c',
  ô: 'o',
  î: 'i',
  ï: 'i',
  û: 'u',
  ù: 'u',

  // Spanish characters
  á: 'a',
  é: 'e',
  í: 'i',
  ó: 'o',
  ú: 'u',
  ñ: 'n',

  // Italian characters
  à: 'a',
  è: 'e',
  ì: 'i',
  ò: 'o',
  ù: 'u',

  // Scandinavian characters
  å: 'a',
  æ: 'ae',
  ø: 'o',
  œ: 'oe',

  // Portuguese characters
  ã: 'a',
  õ: 'o',
  ç: 'c',

  // Czech characters
  č: 'c',
  ř: 'r',
  š: 's',
  ž: 'z',
  ů: 'u',

  // Others
  ł: 'l',
  ć: 'c',
  ś: 's',
  ź: 'z',
  ń: 'n',
  đ: 'd',
};

export function replaceSpecialCharacters(str) {
  return str
    .split('')
    .map((char) => specialCharMap[char] || char)
    .join('');
}

export function generateSlug(title, composer) {
  const firstComposer = composer.split('/')[0].trim();
  const normalizedTitle = replaceSpecialCharacters(title);
  const normalizedComposer = replaceSpecialCharacters(firstComposer);

  const slug = `${normalizedTitle}-av-${normalizedComposer}`
    .toLowerCase()
    .replace(/[\s+]/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  return slug;
}

export async function getStaticPaths() {
  const paths = data.map((song) => ({
    params: { slug: generateSlug(song.title, song.composer) },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const songData = data.find(
    (song) => generateSlug(song.title, song.composer) === params.slug
  );

  if (!songData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { songData },
    revalidate: 1,
  };
}
