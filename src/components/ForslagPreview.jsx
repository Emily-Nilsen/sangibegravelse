import Image from 'next/image';
import Link from 'next/link';
import { LineSeparator } from './icons/LineSeparator';

export const suggestions = [
  {
    id: 1,
    name: 'Nordiske sanger',
    bg_colour: '#e4772d',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/Home_Hero_mobile_syywxf.webp',
    solo_1: 'Jeg glemmer deg aldri',
    solo_1_href:
      '/repertoar/jeg-glemmer-deg-aldri-av-aslag-haugen-og-arne-moslatten',
    salme_1: 'Blå salme',
    solo_2: 'Kor går du når du går',
    salme_2: 'Kjærlighet fra Gud',
    salme_3: 'Ein fin liten blome',
    solo_3: 'Håll mitt hjärta',
  },
  {
    id: 2,
    name: 'Klassisk miks',
    bg_colour: '#e4772d',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/Salmer_ylykay.webp',
    solo_1: 'Ave Maria (Schubert)',
    solo_1_href: '/repertoar/ave-maria-av-franz-schubert',
    salme_1: 'Den fyrste song',
    solo_2: 'Pie Jesu (Webber)',
    salme_2: 'Vem kan segla förutan vind',
    salme_3: 'Kjære Gud, jeg har det godt',
    solo_3: 'Nella Fantasia',
  },
  {
    id: 3,
    name: 'Ikke religiøse tekster',
    bg_colour: '#e4772d',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/Salmer_ylykay.webp',
    solo_1: 'God morgen min kjære',
    solo_1_href: '/repertoar/god-morgen-min-kjaere-av-benny-borg',
    fellessang_1: 'Din tanke er fri',
    solo_2: 'Höstvisa',
    fiolinsolo: 'Tema fra Schindlers list',
    solo_3: 'De nære ting',
    fellessang_2: 'Barn av regnbuen',
    solo_4: 'My way',
  },
  {
    id: 4,
    name: 'Pop miks',
    bg_colour: '#e4772d',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/Salmer_ylykay.webp',
    solo_1: 'Make you feel my love / Fordi jeg elsker deg (solo/duett)',
    solo_1_href:
      '/repertoar/fordi-jeg-elsker-deg-av-bob-dyllan-og-bjarte-hjelmeland',
    salme_1: 'Amazing Grace',
    solo_2: 'How do I say goodbye',
    solo_3: 'Feels like home',
    salme_2: 'Morning has broken',
    solo_4: 'The prayer (solo/duett)',
  },
  {
    id: 5,
    name: 'Jul og vinter',
    bg_colour: '#e4772d',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/Salmer_ylykay.webp',
    solo_1: 'Nordnorsk julesalme',
    solo_1_href: '#',
    salme_1: 'Det hev ei rose sprunge',
    solo_2: 'Mitt hjerte alltid vanker',
    salme_2: 'Deilig er den himmel blå',
    salme_3: 'Deilig er jorden',
    solo_3: 'O helga natt',
  },
  {
    id: 6,
    name: 'Klassisk og opera',
    bg_colour: '#e4772d',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/Salmer_ylykay.webp',
    solo_1: 'O mio babbino caro (sopran arie/dame)',
    solo_1_href: '#',
    salme_1: 'O bli hos meg',
    fiolinsolo: 'Méditation fra Thais',
    solo_2: 'Mot kveld',
    salme_2: 'Så ta da mine hender',
    solo_3: 'Caruso',
  },
  // More suggestions...
];

export function ForslagPreview() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 pb-16 mx-auto sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <h2 id="suggestions-heading" className="sr-only">
          Forslag til program
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 2xl:grid-cols-3 sm:gap-x-16 2xl:gap-x-8">
          {suggestions.map((suggestion) => (
            <Link
              key={suggestion.id}
              href={`/program-forslag/${suggestion.id}`}
              className="group"
            >
              <div className="w-full rounded-lg bg-[#f7f8f2] hover:bg-[#f7f8f2]/50 transition-all hover:cursor-pointer border border-transparent hover:border-[#f7f8f2] text-center">
                <ul
                  role="list"
                  className="p-6 py-12 space-y-2 divide-y text-slate-900 divide-gray-200/0"
                >
                  <h1 className="pb-6 text-2xl italic font-bold sm:text-3xl">
                    {suggestion.name}
                  </h1>
                  <h1 className="text-xl text-slate-700">Inngangsmusikk</h1>
                  <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                  {/* <p className="text-slate-900/50">–</p> */}

                  <h1 className="text-xl text-slate-700">Solo 1</h1>
                  <p className="font-normal">{suggestion.solo_1}</p>
                  <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                  {/* <p className="text-slate-900/50">–</p> */}

                  {suggestion.salme_1 && (
                    <>
                      <h1 className="text-xl text-slate-700">Salme 1</h1>
                      <p className="">{suggestion.salme_1}</p>
                      <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                    </>
                  )}

                  {suggestion.fellessang_1 && (
                    <>
                      <h1 className="text-xl text-slate-700">Fellessang</h1>
                      <p className="">{suggestion.fellessang_1}</p>
                      <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                    </>
                  )}
                  <h1 className="text-xl text-slate-700">Minneord</h1>
                  <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                  {suggestion.solo_2 && (
                    <>
                      <h1 className="text-xl text-slate-700">Solo 2</h1>
                      <p className="">{suggestion.solo_2}</p>
                      <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                    </>
                  )}
                  {suggestion.fiolinsolo && (
                    <>
                      <h1 className="text-xl text-slate-700">Fiolinsolo</h1>
                      <p className="">{suggestion.fiolinsolo}</p>
                      <LineSeparator className="py-5 w-20 fill-[#b4b297] mx-auto" />
                    </>
                  )}
                  {suggestion.salme_2 && (
                    <>
                      <h1 className="text-xl text-slate-700">Salme 2</h1>
                      <p className="">{suggestion.salme_2}</p>
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
                  <h1 className="pb-3 text-xl text-slate-700">Utgangsmusikk</h1>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
