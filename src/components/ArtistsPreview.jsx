import Image from 'next/image';
import Link from 'next/link';

const artists = [
  {
    id: 1,
    name: 'Nils Georg Nilsen',
    href: '#',
    price: '$50',
    availability: 'Tenor',
    imageSrc:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Nils%20Georg/general/about-profile-img_z38xiz.jpg',
    imageAlt: 'Nil Georg Nilsen',
  },
  {
    id: 2,
    name: 'Susanne Hvinden Hals',
    href: '#',
    price: '$140',
    availability: 'Sopran',
    imageSrc:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/Susanne_img_1_c3qttj.webp',
    imageAlt: 'Susanne Hvinden Hals',
  },
  {
    id: 3,
    name: 'Kathrine Hvinden Hals',
    href: '#',
    price: '$220',
    availability: 'Fiolinist',
    imageSrc:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/Kathrine_ghkcqt.jpg',
    imageAlt: 'Kathrine Hvinden Hals',
  },
  // More artists...
];

export function ArtistsPreview() {
  return (
    <section id="artister" className="bg-slate-50">
      <div className="pt-24 sm:pt-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <p className="text-base font-medium leading-7 text-slate-600">
              Elit sunt amet fugiat
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Artister
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="px-4 py-16 mx-auto overflow-hidden max-w-7xl sm:px-6 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {artists.map((artist) => (
              <a key={artist.id} href={artist.href} className="text-sm group">
                <div className="w-full overflow-hidden transition-all duration-150 ease-in-out bg-gray-100 rounded-lg aspect-h-1 aspect-w-1 group-hover:grayscale">
                  <Image
                    src={artist.imageSrc}
                    alt={artist.imageAlt}
                    width={600}
                    height={600}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  {artist.name}
                </h3>
                <p className="italic text-gray-500">{artist.availability}</p>
                <p className="mt-2 font-medium text-gray-900">Les profil</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
