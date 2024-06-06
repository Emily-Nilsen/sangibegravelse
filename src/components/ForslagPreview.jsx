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
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/testimonials/flower_card_1_copy_kvxqlx.webp',
    solo_1: 'Jeg glemmer deg aldri',
    solo_1_audio:
      'https://res.cloudinary.com/dt3k2apqd/video/upload/v1717599144/Sang%20i%20begravelse/Audio/Jeg_glemmer_deg_aldri_ofp5d5.mp3',
    solo_1_href:
      '/repertoar/jeg-glemmer-deg-aldri-av-aslag-haugen-og-arne-moslatten',
    salme_1: 'Blå salme',
    salme_1_audio:
      'https://res.cloudinary.com/dt3k2apqd/video/upload/v1717673555/Sang%20i%20begravelse/Audio/Bla%CC%8A_salme_eyptu3.mp3',
    salme_1_href: '/repertoar/bla-salme-av-erik-bye',
    solo_2: 'Kor går du når du går',
    solo_2_href: '',
    salme_2: 'Kjærlighet fra Gud',
    salme_2_href: '',
    salme_3: 'Ein fin liten blome',
    salme_3_href: '/repertoar/ein-fin-liten-blome-av-bjorn-eidsvag',
    solo_3: 'Håll mitt hjärta',
    solo_3_href:
      '/repertoar/hall-mitt-hjaerta-av-peter-hallstroem-lars-andersson-og-bjoern-skifs',
  },
  {
    id: 'klassisk-miks',
    name: 'Klassisk miks',
    bg_colour: '#e4772d',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/testimonials/flower_card_2_copy_ybc6im.webp',
    solo_1: 'Ave Maria (Schubert)',
    solo_1_href: '/repertoar/ave-maria-av-franz-schubert',
    salme_1: 'Den fyrste song',
    salme_1_audio: 'https://res.cloudinary.com/dt3k2apqd/video/upload/v1717675675/Sang%20i%20begravelse/Audio/Den_fyrste_sang_cvgtiv.mp3',
    salme_1_href: '/repertoar/den-fyrste-song-av-lars-soraas-og-per-sivle',
    solo_2: 'Pie Jesu (Webber)',
    solo_2_audio: 'https://res.cloudinary.com/dt3k2apqd/video/upload/v1717605189/Sang%20i%20begravelse/Audio/Pie_Jesu_cgakdj.mp3',
    solo_2_href: '/repertoar/pie-jesu-av-andrew-lloyd-webber',
    salme_2: 'Vem kan segla förutan vind',
    salme_2_audio: 'https://res.cloudinary.com/dt3k2apqd/video/upload/v1717670676/Sang%20i%20begravelse/Audio/Vem_kan_segla_ijybpp.mp3',
    salme_3: 'Kjære Gud, jeg har det godt',
    salme_3_audio:
      'https://res.cloudinary.com/dt3k2apqd/video/upload/v1717678301/Sang%20i%20begravelse/Audio/Kj%C3%A6re_gud_vx1xzl.mp3',
    solo_3: 'Nella Fantasia',
    solo_3_href: '',
  },
  {
    id: 'ikke-religiose-tekster',
    name: 'Ikke religiøse tekster',
    bg_colour: '#e4772d',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/testimonials/flower_card_13_copy_z3ltzi.webp',
    solo_1: 'God morgen min kjære',
    solo_1_href: '/repertoar/god-morgen-min-kjaere-av-benny-borg',
    fellessang_1: 'Din tanke er fri',
    solo_2: 'Höstvisa',
    solo_2_audio:
      'https://res.cloudinary.com/dt3k2apqd/video/upload/v1717670312/Sang%20i%20begravelse/Audio/Ho%CC%88stvisa_Repertoire_dztkhf.mp3',
    solo_2_href: '/repertoar/hoestvisa-av-erna-tauro-og-tove-jansson',
    fiolinsolo: 'Tema fra Schindlers list',
    solo_3: 'De nære ting',
    solo_3_href: '/repertoar/de-naere-ting-av-arne-paasche-aasen',
    fellessang_2: 'Barn av regnbuen',
    fellessang_2_href:
      '/repertoar/barn-av-regnbuen-av-pete-seeger-og-lillebjorn-nilsen',
    solo_4: 'My way',
    solo_4_href:
      '/repertoar/my-way-av-claude-francois-jacques-revaux-og-paul-anka',
  },
  {
    id: 'pop-miks',
    name: 'Pop miks',
    bg_colour: '#e4772d',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/testimonials/flower_card_6_copy_e6wibj.webp',
    solo_1: 'Make you feel my love / Fordi jeg elsker deg (solo/duett)',
    solo_1_href:
      '/repertoar/fordi-jeg-elsker-deg-av-bob-dyllan-og-bjarte-hjelmeland',
    salme_1: 'Amazing Grace',
    salme_1_audio:
      'https://res.cloudinary.com/dt3k2apqd/video/upload/v1717673011/Sang%20i%20begravelse/Audio/Amazing_Grace_z5ujiz.mp3',
    salme_1_href: '/repertoar/amazing-grace-av-john-newton',
    solo_2: 'How do I say goodbye',
    solo_2_href: '/repertoar/how-do-i-say-goodbye-av-dean-lewis',
    solo_3: 'Feels like home',
    solo_3_href: '/repertoar/feels-like-home-av-randy-newman',
    salme_2: 'Morning has broken',
    solo_4: 'The prayer (solo/duett)',
    solo_4_audio:
      'https://res.cloudinary.com/dt3k2apqd/video/upload/v1717599606/Sang%20i%20begravelse/Audio/The_Prayer_nr3ive.mp3',
    solo_4_href:
      '/repertoar/the-prayer-av-david-foster-carole-bayer-sager-alberto-testa-og-tony-renis',
  },
  {
    id: 'jul-og-vinter',
    name: 'Jul og vinter',
    bg_colour: '#e4772d',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/testimonials/flower_card_11_copy_tfc18v.webp',
    solo_1: 'Nordnorsk julesalme',
    salme_1: 'Det hev ei rose sprunge',
    salme_1_audio:
      'https://res.cloudinary.com/dt3k2apqd/video/upload/v1717676076/Sang%20i%20begravelse/Audio/Det_heiv_ei_rosa_bcuipr.mp3',
    solo_2: 'Mitt hjerte alltid vanker',
    solo_2_href: '/repertoar/mitt-hjerte-alltid-vanker-av-hans-adolph-brorson',
    salme_2: 'Deilig er den himmel blå',
    salme_2_audio:
      'https://res.cloudinary.com/dt3k2apqd/video/upload/v1717675562/Sang%20i%20begravelse/Audio/Deilig_er_en_himmel_bla%CC%8A_kopip6.mp3',
    salme_3: 'Deilig er jorden',
    salme_3_audio:
      'https://res.cloudinary.com/dt3k2apqd/video/upload/v1717675414/Sang%20i%20begravelse/Audio/Deilig_er_jorden_gwu8fn.mp3',
    solo_3: 'O helga natt',
    solo_3_audio:
      'https://res.cloudinary.com/dt3k2apqd/video/upload/v1717607297/Sang%20i%20begravelse/Audio/O_Helga_natt_cngnam.mp3',
    solo_3_href: '/repertoar/o-helga-natt-av-adolphe-adam',
  },
  {
    id: 'klassisk-og-opera',
    name: 'Klassisk og opera',
    bg_colour: '#e4772d',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/testimonials/flower_card_4_copy_u0qaxo.webp',
    solo_1: 'O mio babbino caro (sopran arie/dame)',
    salme_1: 'O bli hos meg',
    fiolinsolo: 'Méditation fra Thais',
    solo_2: 'Mot kveld',
    solo_2_href: '/repertoar/mot-kveld-av-agathe-backer-grondahl',
    salme_2: 'Så ta da mine hender',
    solo_3: 'Caruso',
    solo_3_audio:
      'https://res.cloudinary.com/dt3k2apqd/video/upload/v1717669892/Sang%20i%20begravelse/Audio/Caruso_guitar_Forslags_preview_thgcgg.mp3',
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
                    <p className="font-normal">{suggestion.solo_1}</p>{' '}
                    {suggestion.solo_1_audio && (
                      <div className="flex w-full justify-center">
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
                        <p className="">{suggestion.salme_1}</p>
                        {' '}
                    {suggestion.salme_1_audio && (
                      <div className="flex w-full justify-center">
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
                        <p className="">{suggestion.fellessang_1}</p>
                        {' '}
                    {suggestion.fellessang_1_audio && (
                      <div className="flex w-full justify-center">
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
                        <p className="">{suggestion.solo_2}</p>
                        {' '}
                    {suggestion.solo_2_audio && (
                      <div className="flex w-full justify-center">
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
                        <p className="">{suggestion.fiolinsolo}</p>
                        {' '}
                    {suggestion.fiolinsolo_audio && (
                      <div className="flex w-full justify-center">
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
                        <p className="">{suggestion.salme_2}</p>
                        {' '}
                    {suggestion.salme_2_audio && (
                      <div className="flex w-full justify-center">
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
                        <p className="">{suggestion.salme_3}</p>
                        <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                      </>
                    )}
                    {suggestion.solo_3 && (
                      <>
                        <h1 className="text-xl text-slate-700">Solo 3</h1>
                        <p className="">{suggestion.solo_3}</p>
                        <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                      </>
                    )}
                    {suggestion.fellessang_2 && (
                      <>
                        <h1 className="text-xl text-slate-700">Fellessang</h1>
                        <p className="">{suggestion.fellessang_2}</p>
                        <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                      </>
                    )}
                    {suggestion.solo_4 && (
                      <>
                        <h1 className="text-xl text-slate-700">Solo 4</h1>
                        <p className="">{suggestion.solo_4}</p>
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
