import Image from 'next/image';
import Link from 'next/link';

export const suggestions = [
  {
    id: 1,
    name: 'Nordiske sanger',
    href: '#',
    solo_1: 'Jeg glemmer deg aldri',
    salme_1: 'Blå salme',
    solo_2: 'Kor går du når du går',
    salme_2: 'Kjærlighet fra Gud',
    salme_3: 'Ein fin liten blome',
    solo_3: 'Håll mitt hjärta',
  },
  {
    id: 2,
    name: 'Klassisk miks',
    href: '#',
    solo_1: 'Ave Maria (Schubert)',
    salme_1: 'Den fyrste song',
    solo_2: 'Pie Jesu (Webber)',
    salme_2: 'Vem kan segla förutan vind',
    salme_3: 'Kjære Gud, jeg har det godt',
    solo_3: 'Nella Fantasia',
  },
  {
    id: 3,
    name: 'Ikke religiøse tekster',
    href: '#',
    solo_1: 'God morgen min kjære',
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
    href: '#',
    solo_1: 'Make you feel my love/Fordi jeg elsker deg (solo/duett)',
    salme_1: 'Amazing Grace',
    solo_2: 'How do I say goodbye',
    solo_3: 'Feels like home',
    salme_2: 'Morning has broken',
    solo_4: 'The prayer (solo/duett)',
  },
  {
    id: 5,
    name: 'Jul/Vinter',
    href: '#',
    solo_1: 'Nordnorsk julesalme',
    salme_1: 'Det hev ei rose sprunge',
    solo_2: 'Mitt hjerte alltid vanker',
    salme_2: 'Deilig er den himmel blå',
    salme_3: 'Deilig er jorden',
    solo_3: 'O helga natt',
  },
  {
    id: 6,
    name: 'Klassisk/Opera',
    href: '#',
    solo_1: 'O mio babbino caro (sopran arie/dame)',
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

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {suggestions.map((suggestion) => (
            <Link
              key={suggestion.id}
              href={`/program-forslag/${suggestion.id}`}
              className="group"
            >
              <div className="w-full rounded-lg bg-[#f7f8f2]">
                <ul
                  role="list"
                  className="p-6 space-y-2 divide-y text-slate-900 divide-gray-200/0"
                >
                  <h3 className="pb-3 text-xl font-bold sm:text-2xl">
                    {suggestion.name}
                  </h3>
                  <p className="italic">Inngangsmusikk</p>
                  <p className="text-slate-900/50">–</p>

                  <p className="italic">Solo 1</p>
                  <p className="font-medium">{suggestion.solo_1}</p>
                  <p className="text-slate-900/50">–</p>

                  {suggestion.fellessang_1 && (
                    <>
                      <p className="italic">Fellessang</p>
                      <p className="font-medium">{suggestion.fellessang_1}</p>
                      <p className="text-slate-900/50">–</p>
                    </>
                  )}
                  <p className="italic">Minneord</p>
                  <p className="text-slate-900/50">–</p>
                  {suggestion.solo_2 && (
                    <>
                      <p className="italic">Solo 2</p>
                      <p className="font-medium">{suggestion.solo_2}</p>
                      <p className="text-slate-900/50">–</p>
                    </>
                  )}
                  {suggestion.fiolinsolo && (
                    <>
                      <p className="italic">Fiolinsolo</p>
                      <p className="font-medium">{suggestion.fiolinsolo}</p>
                      <p className="text-slate-900/50">–</p>
                    </>
                  )}
                  {suggestion.salme_2 && (
                    <>
                      <p className="italic">Salme 2</p>
                      <p className="font-medium">{suggestion.salme_2}</p>
                      <p className="text-slate-900/50">–</p>
                    </>
                  )}
                  {suggestion.salme_3 && (
                    <>
                      <p className="italic">Salme 3</p>
                      <p className="font-medium">{suggestion.salme_3}</p>
                      <p className="text-slate-900/50">–</p>
                    </>
                  )}
                  {suggestion.solo_3 && (
                    <>
                      <p className="italic">Solo 3</p>
                      <p className="font-medium">{suggestion.solo_3}</p>
                      <p className="text-slate-900/50">–</p>
                    </>
                  )}
                  {suggestion.fellessang_2 && (
                    <>
                      <p className="italic">Fellessang</p>
                      <p className="font-medium">{suggestion.fellessang_2}</p>
                      <p className="text-slate-900/50">–</p>
                    </>
                  )}
                  {suggestion.solo_4 && (
                    <>
                      <p className="italic">Solo 4</p>
                      <p className="font-medium">{suggestion.solo_4}</p>
                      <p className="text-slate-900/50">–</p>
                    </>
                  )}
                  <p className="pb-2 italic">Utgangsmusikk</p>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
