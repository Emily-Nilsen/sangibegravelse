import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import slugify from 'slugify';
import { LineSeparator } from './icons/LineSeparator';
import { ForslagSimplePlayer } from './ForslagSimplePlayer';

export const suggestions = [
  {
    id: 'nordiske-sanger',
    name: 'Nordiske sanger',
    bg_colour: '#e4772d',
    image: '/images/flowers/flower_card_1.webp',
    solo_1: 'Jeg glemmer deg aldri',
    solo_1_audio: '/audio/Jeg_glemmer_deg_aldri.mp3',
    solo_1_href:
      '/repertoar/jeg-glemmer-deg-aldri-av-aslag-haugen-og-arne-moslatten',
    salme_1: 'Blå salme',
    salme_1_audio: '/audio/Blå_salme.mp3',
    salme_1_href: '/repertoar/bla-salme-av-erik-bye',
    solo_2: 'Kor går du når du går',
    salme_2: 'Kjærlighet fra Gud',
    salme_2_audio: '/audio/Kjærlighet_fra_Gud.mp3',
    salme_3: 'Ein fin liten blome',
    salme_3_audio: '/audio/Ein_fin_liten_blome.mp3',
    salme_3_href: '/repertoar/ein-fin-liten-blome-av-bjorn-eidsvag',
    solo_3: 'Håll mitt hjärta',
    solo_3_audio: '/audio/Håll_mitt_hjärta.mp3',
    solo_3_href:
      '/repertoar/hall-mitt-hjaerta-av-peter-hallstroem-lars-andersson-og-bjoern-skifs',
  },
  {
    id: 'klassisk-miks',
    name: 'Klassisk miks',
    bg_colour: '#e4772d',
    image: '/images/flowers/flower_card_2.webp',
    solo_1: 'Ave Maria (Schubert)',
    solo_1_href: '/repertoar/ave-maria-av-franz-schubert',
    salme_1: 'Den fyrste song',
    salme_1_audio: '/audio/Den_fyrste_sang.mp3',
    salme_1_href: '/repertoar/den-fyrste-song-av-lars-soraas-og-per-sivle',
    solo_2: 'Pie Jesu (Webber)',
    solo_2_audio: '/audio/Pie_Jesu.mp3',
    solo_2_href: '/repertoar/pie-jesu-av-andrew-lloyd-webber',
    salme_2: 'Vem kan segla förutan vind',
    salme_2_audio: '/audio/Vem_kan_segla.mp3',
    salme_3: 'Kjære Gud, jeg har det godt',
    salme_3_audio: '/audio/Kjære_gud.mp3',
    solo_3: 'Nella Fantasia',
  },
  {
    id: 'ikke-religiose-tekster',
    name: 'Ikke religiøse tekster',
    bg_colour: '#e4772d',
    image: '/images/flowers/flower_card_13.webp',
    solo_1: 'God morgen, min kjære',
    solo_1_href: '/repertoar/god-morgen-min-kjaere-av-benny-borg',
    fellessang_1: 'Din tanke er fri',
    fellessang_1_audio: '/audio/Din_tanke_er_fri.mp3',
    solo_2: 'Höstvisa',
    solo_2_audio: '/audio/Höstvisa_Repertoire.mp3',
    solo_2_href: '/repertoar/hoestvisa-av-erna-tauro-og-tove-jansson',
    fiolinsolo: 'Tema fra Schindlers Liste',
    fiolinsolo_audio: '/audio/Schindlers_List.mp3',
    fiolinsolo_href: '/repertoar/tema-fra-schindlers-liste-av-john-williams',
    solo_3: 'De nære ting',
    solo_3_audio: '/audio/De_nære_ting.mp3',
    solo_3_href: '/repertoar/de-naere-ting-av-arne-paasche-aasen',
    fellessang_2: 'Barn av regnbuen',
    fellessang_2_href:
      '/repertoar/barn-av-regnbuen-av-pete-seeger-og-lillebjorn-nilsen',
    solo_4: 'My Way',
    solo_4_href:
      '/repertoar/my-way-av-claude-francois-jacques-revaux-og-paul-anka',
  },
  {
    id: 'pop-miks',
    name: 'Pop miks',
    bg_colour: '#e4772d',
    image: '/images/flowers/flower_card_6.webp',
    solo_1: 'Make You Feel My Love / Fordi jeg elsker deg (solo/duett)',
    solo_1_href:
      '/repertoar/fordi-jeg-elsker-deg-av-bob-dyllan-og-bjarte-hjelmeland',
    salme_1: 'Amazing Grace',
    salme_1_audio: '/audio/Amazing_Grace.mp3',
    salme_1_href: '/repertoar/amazing-grace-av-john-newton',
    solo_2: 'How Do I Say Goodbye',
    solo_2_href: '/repertoar/how-do-i-say-goodbye-av-dean-lewis',
    solo_3: 'Feels Like Home',
    solo_3_href: '/repertoar/feels-like-home-av-randy-newman',
    salme_2: 'Morning Has Broken',
    salme_2_audio: '/audio/Morning_has_broken.mp3',
    solo_4: 'The Prayer (solo/duett)',
    solo_4_audio: '/audio/The_Prayer.mp3',
    solo_4_href:
      '/repertoar/the-prayer-av-david-foster-carole-bayer-sager-alberto-testa-og-tony-renis',
  },
  {
    id: 'jul-og-vinter',
    name: 'Jul og vinter',
    bg_colour: '#e4772d',
    image: '/images/flowers/flower_card_11.webp',
    solo_1: 'Nordnorsk julesalme',
    solo_1_audio: '/audio/Nordnorsk_julesalme.mp3',
    salme_1: 'Det hev ei rose sprunge',
    salme_1_audio: '/audio/Det_heiv_ei_rosa.mp3',
    solo_2: 'Mitt hjerte alltid vanker',
    solo_2_audio: '/audio/Mitt_hjerte_alltid_vanker.mp3',
    solo_2_href: '/repertoar/mitt-hjerte-alltid-vanker-av-hans-adolph-brorson',
    salme_2: 'Deilig er den himmel blå',
    salme_2_audio: '/audio/Deilig_er_en_himmel_blå.mp3',
    salme_3: 'Deilig er jorden',
    salme_3_audio: '/audio/Deilig_er_jorden.mp3',
    solo_3: 'O Helga natt',
    solo_3_audio: '/audio/O_Helga_natt.mp3',
    solo_3_href: '/repertoar/o-helga-natt-av-adolphe-adam',
  },
  {
    id: 'klassisk-og-opera',
    name: 'Klassisk og opera',
    bg_colour: '#e4772d',
    image: '/images/flowers/flower_card_4.webp',
    solo_1: 'O mio babbino caro (sopran arie/dame)',
    solo_1_audio: '/audio/O_mio_babbino_caro.mp3',
    solo_1_href: '/repertoar/o-mio-babbino-caro-av-giacomo-puccini',
    salme_1: 'O bli hos meg',
    salme_1_audio: '/audio/O_bli_hos_meg.mp3',
    fiolinsolo: 'Méditation fra Thais',
    fiolinsolo_audio: '/audio/Méditation_from_Thaïs.mp3',
    fiolinsolo_href: '/repertoar/meditation-fra-thais-av-jules-massenet',
    solo_2: 'Mot kveld',
    solo_2_href: '/repertoar/mot-kveld-av-agathe-backer-grondahl',
    salme_2: 'Så ta da mine hender',
    salme_2_audio: '/audio/Så_ta_da_mine_hender.mp3',
    solo_3: 'Caruso',
    solo_3_audio: '/audio/Caruso_with_guitar.mp3',
    solo_3_href: '/repertoar/caruso-av-lucio-dalla',
  },
  // More suggestions...
];

export function ForslagPreview() {
  const [openIndex, setOpenIndex] = useState(null);
  const [playingAudio, setPlayingAudio] = useState(null);

  const togglePanel = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAudioPlay = (audioElement) => {
    if (playingAudio && playingAudio !== audioElement) {
      playingAudio.pause();
    }
    setPlayingAudio(audioElement);
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 pb-16 mx-auto sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <h2 id="suggestions-heading" className="sr-only">
          Forslag til program
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 2xl:grid-cols-2 sm:gap-x-16 2xl:gap-x-8">
          {suggestions.map((suggestion, i) => (
            <div key={i} className="">
              <div className="z-0 relative w-full rounded-lg bg-[#f7f8f2] text-center">
                <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
                  <Image
                    src={suggestion.image}
                    alt="Hvite roser"
                    width={3000}
                    height={1681}
                    className="absolute inset-0 object-cover object-center w-full h-full transition-all border border-transparent rounded-lg sm:block -z-10 opacity-30"
                    priority
                  />
                </div>
                <ul
                  role="list"
                  className="relative z-10 grid grid-cols-1 p-6 py-12 space-y-2 text-slate-900 hover:text-slate-950 sm:grid-cols-2 "
                >
                  <div className="w-full col-span-1 sm:col-span-2">
                    <h1 className="pb-6 text-2xl italic font-bold sm:text-3xl">
                      {suggestion.name}
                    </h1>
                  </div>
                  <div className="w-full col-span-1">
                    <h1 className="text-xl text-slate-700">Inngangsmusikk</h1>
                    <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                    {/* <p className="text-slate-900/50">–</p> */}
                    <h1 className="text-xl text-slate-700">Solo 1</h1>
                    {suggestion.solo_1_href ? (
                      <Link
                        className="font-normal transition-all hover:underline"
                        href={suggestion.solo_1_href}
                      >
                        {suggestion.solo_1} <span aria-hidden="true">→</span>
                      </Link>
                    ) : (
                      <p className="font-normal">{suggestion.solo_1}</p>
                    )}

                    {suggestion.solo_1_audio && (
                      <div className="flex justify-center w-full">
                        <ForslagSimplePlayer
                          audioUrl={suggestion.solo_1_audio}
                          onPlay={handleAudioPlay}
                        />
                      </div>
                    )}
                    <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                    {/* <p className="text-slate-900/50">–</p> */}
                    {suggestion.salme_1 && (
                      <>
                        <h1 className="text-xl text-slate-700">Salme 1</h1>
                        {suggestion.salme_1_href ? (
                          <Link
                            className="font-normal transition-all hover:underline"
                            href={suggestion.salme_1_href}
                          >
                            {suggestion.salme_1}{' '}
                            <span aria-hidden="true">→</span>
                          </Link>
                        ) : (
                          <p className="font-normal">{suggestion.salme_1}</p>
                        )}
                        {suggestion.salme_1_audio && (
                          <div className="flex justify-center w-full">
                            <ForslagSimplePlayer
                              audioUrl={suggestion.salme_1_audio}
                              onPlay={handleAudioPlay}
                            />
                          </div>
                        )}
                        <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                      </>
                    )}
                    {suggestion.fellessang_1 && (
                      <>
                        <h1 className="text-xl text-slate-700">Fellessang</h1>
                        {suggestion.fellessang_1_href ? (
                          <Link
                            className="font-normal transition-all hover:underline"
                            href={suggestion.fellessang_1_href}
                          >
                            {suggestion.fellessang_1}{' '}
                            <span aria-hidden="true">→</span>
                          </Link>
                        ) : (
                          <p className="font-normal">
                            {suggestion.fellessang_1}
                          </p>
                        )}
                        {suggestion.fellessang_1_audio && (
                          <div className="flex justify-center w-full">
                            <ForslagSimplePlayer
                              audioUrl={suggestion.fellessang_1_audio}
                              onPlay={handleAudioPlay}
                            />
                          </div>
                        )}
                        <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                      </>
                    )}
                    <h1 className="text-xl text-slate-700">Minneord</h1>
                    <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                    {suggestion.solo_2 && (
                      <>
                        <h1 className="text-xl text-slate-700">Solo 2</h1>
                        {suggestion.solo_2_href ? (
                          <Link
                            className="font-normal transition-all hover:underline"
                            href={suggestion.solo_2_href}
                          >
                            {suggestion.solo_2}{' '}
                            <span aria-hidden="true">→</span>
                          </Link>
                        ) : (
                          <p className="font-normal">{suggestion.solo_2}</p>
                        )}
                        {suggestion.solo_2_audio && (
                          <div className="flex justify-center w-full">
                            <ForslagSimplePlayer
                              audioUrl={suggestion.solo_2_audio}
                              onPlay={handleAudioPlay}
                            />
                          </div>
                        )}
                        <LineSeparator className="py-5 w-20 fill-[#b4b297] sm:fill-transparent mx-auto" />
                      </>
                    )}
                  </div>
                  <div className="h-full sm:border-l sm:border-[#b4b297]/20">
                    {suggestion.fiolinsolo && (
                      <>
                        <h1 className="text-xl text-slate-700">Fiolinsolo</h1>
                        {suggestion.fiolinsolo_href ? (
                          <Link
                            className="font-normal transition-all hover:underline"
                            href={suggestion.fiolinsolo_href}
                          >
                            {suggestion.fiolinsolo}{' '}
                            <span aria-hidden="true">→</span>
                          </Link>
                        ) : (
                          <p className="font-normal">{suggestion.fiolinsolo}</p>
                        )}
                        {suggestion.fiolinsolo_audio && (
                          <div className="flex justify-center w-full">
                            <ForslagSimplePlayer
                              audioUrl={suggestion.fiolinsolo_audio}
                              onPlay={handleAudioPlay}
                            />
                          </div>
                        )}
                        <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                      </>
                    )}
                    {suggestion.salme_2 && (
                      <>
                        <h1 className="text-xl text-slate-700">Salme 2</h1>
                        {suggestion.salme_2_href ? (
                          <Link
                            className="font-normal transition-all hover:underline"
                            href={suggestion.salme_2_href}
                          >
                            {suggestion.salme_2}{' '}
                            <span aria-hidden="true">→</span>
                          </Link>
                        ) : (
                          <p className="font-normal">{suggestion.salme_2}</p>
                        )}
                        {suggestion.salme_2_audio && (
                          <div className="flex justify-center w-full">
                            <ForslagSimplePlayer
                              audioUrl={suggestion.salme_2_audio}
                              onPlay={handleAudioPlay}
                            />
                          </div>
                        )}
                        <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                      </>
                    )}
                    {suggestion.salme_3 && (
                      <>
                        <h1 className="text-xl text-slate-700">Salme 3</h1>
                        {suggestion.salme_3_href ? (
                          <Link
                            className="font-normal transition-all hover:underline"
                            href={suggestion.salme_3_href}
                          >
                            {suggestion.salme_3}{' '}
                            <span aria-hidden="true">→</span>
                          </Link>
                        ) : (
                          <p className="font-normal">{suggestion.salme_3}</p>
                        )}
                        {suggestion.salme_3_audio && (
                          <div className="flex justify-center w-full">
                            <ForslagSimplePlayer
                              audioUrl={suggestion.salme_3_audio}
                              onPlay={handleAudioPlay}
                            />
                          </div>
                        )}
                        <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                      </>
                    )}
                    {suggestion.solo_3 && (
                      <>
                        <h1 className="text-xl text-slate-700">Solo 3</h1>
                        {suggestion.solo_3_href ? (
                          <Link
                            className="font-normal transition-all hover:underline"
                            href={suggestion.solo_3_href}
                          >
                            {suggestion.solo_3}{' '}
                            <span aria-hidden="true">→</span>
                          </Link>
                        ) : (
                          <p className="font-normal">{suggestion.solo_3}</p>
                        )}
                        {suggestion.solo_3_audio && (
                          <div className="flex justify-center w-full">
                            <ForslagSimplePlayer
                              audioUrl={suggestion.solo_3_audio}
                              onPlay={handleAudioPlay}
                            />
                          </div>
                        )}
                        <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                      </>
                    )}
                    {suggestion.fellessang_2 && (
                      <>
                        <h1 className="text-xl text-slate-700">Fellessang</h1>
                        {suggestion.fellessang_2_href ? (
                          <Link
                            className="font-normal transition-all hover:underline"
                            href={suggestion.fellessang_2_href}
                          >
                            {suggestion.fellessang_2}{' '}
                            <span aria-hidden="true">→</span>
                          </Link>
                        ) : (
                          <p className="font-normal">
                            {suggestion.fellessang_2}
                          </p>
                        )}
                        {suggestion.fellessang_2_audio && (
                          <div className="flex justify-center w-full">
                            <ForslagSimplePlayer
                              audioUrl={suggestion.fellessang_2_audio}
                              onPlay={handleAudioPlay}
                            />
                          </div>
                        )}
                        <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                      </>
                    )}
                    {suggestion.solo_4 && (
                      <>
                        <h1 className="text-xl text-slate-700">Solo 4</h1>
                        {suggestion.solo_4_href ? (
                          <Link
                            className="font-normal transition-all hover:underline"
                            href={suggestion.solo_4_href}
                          >
                            {suggestion.solo_4}{' '}
                            <span aria-hidden="true">→</span>
                          </Link>
                        ) : (
                          <p className="font-normal">{suggestion.solo_4}</p>
                        )}
                        {suggestion.solo_4_audio && (
                          <div className="flex justify-center w-full">
                            <ForslagSimplePlayer
                              audioUrl={suggestion.solo_4_audio}
                              onPlay={handleAudioPlay}
                            />
                          </div>
                        )}
                        <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                      </>
                    )}
                    <h1 className="pb-3 text-xl text-slate-700">
                      Utgangsmusikk
                    </h1>
                  </div>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
