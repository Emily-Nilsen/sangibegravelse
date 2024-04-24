import Image from 'next/image';
import Link from 'next/link';

const suggestions = [
  {
    id: 1,
    name: 'Nordiske sanger',
    href: '#',
    price: '$13',
    description: '3 sizes available',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 2,
    name: 'Klassisk miks',
    href: '#',
    price: '$64',
    description: 'Walnut',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 3,
    name: 'Ikke religiøse tekster',
    href: '#',
    price: '$32',
    description: 'Heather Gray',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  {
    id: 4,
    name: 'Engelske sanger',
    href: '#',
    price: '$32',
    description: 'Heather Gray',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  {
    id: 5,
    name: 'Jul',
    href: '#',
    price: '$32',
    description: 'Heather Gray',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  {
    id: 6,
    name: 'Klassisk opera',
    href: '#',
    price: '$32',
    description: 'Heather Gray',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
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

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {suggestions.map((suggestion) => (
            <a key={suggestion.id} href={suggestion.href} className="group">
              <div className="w-full overflow-hidden rounded-lg aspect-h-1 aspect-w-1 sm:aspect-h-3 sm:aspect-w-2 bg-[#f7f8f2]">
                {/* <Image
                  src={suggestion.imageSrc}
                  alt={suggestion.imageAlt}
                  width={300}
                  height={300}
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                /> */}
              </div>
              <div className="flex items-center justify-between mt-4 text-base font-medium text-gray-900">
                <h3>{suggestion.name}</h3>
                {/* <p>{suggestion.price}</p> */}
              </div>
              {/* <p className="mt-1 text-sm italic text-gray-500">
                {suggestion.description}
              </p> */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
