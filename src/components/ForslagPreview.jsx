import Image from 'next/image';
import Link from 'next/link';

const suggestions = [
  {
    id: 1,
    name: 'Nordiske sanger',
    href: '#',
    solo_1: 'Jeg glemmer deg aldri',
    description: '3 sizes available',
  },
  {
    id: 2,
    name: 'Klassisk miks',
    href: '#',
    solo_1: 'Ave Maria (Schubert)',
    description: 'Walnut',
  },
  {
    id: 3,
    name: 'Ikke religiøse tekster',
    href: '#',
    solo_1: 'God morgen min kjære',
    description: 'Heather Gray',
  },
  {
    id: 4,
    name: 'Engelske sanger',
    href: '#',
    solo_1: 'Make you feel my love/Fordi jeg elsker deg (solo/duett)',
    description: 'Heather Gray',
  },
  {
    id: 5,
    name: 'Jul',
    href: '#',
    solo_1: 'Nordnorsk julesalme',
    description: 'Heather Gray',
  },
  {
    id: 6,
    name: 'Klassisk opera',
    href: '#',
    solo_1: 'O mio babbino caro (sopran arie/dame)',
    description: 'Heather Gray',
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
            <a key={suggestion.id} href={suggestion.href} className="group">
              <div className="w-full overflow-hidden rounded-lg aspect-h-1 aspect-w-1 sm:aspect-h-3 sm:aspect-w-2 bg-[#f7f8f2]">
                <ul
                  role="list"
                  className="p-6 space-y-3 divide-y text-slate-900 divide-gray-200/0"
                >
                  <h3 className="text-lg font-bold sm:text-xl">
                    {suggestion.name}
                  </h3>
                  <p>Inngangsmusikk</p>
                  <p>–</p>
                  <p>Minneord</p>
                  <p>–</p>
                  <p>Solo 1</p>
                  <p className="font-medium">{suggestion.solo_1}</p>
                  <p>–</p>
                  <p>Utgangsmusikk</p>
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
