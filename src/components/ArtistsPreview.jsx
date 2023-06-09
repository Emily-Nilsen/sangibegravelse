import Image from 'next/image';
import Link from 'next/link';

const people = [
  {
    name: 'Susanne Hvinden Hals',
    role: 'Sopran',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/Susanne_img_1_c3qttj.webp',
    profileUrl: '/susanne-hvinden-hals',
  },
  {
    name: 'Nils Georg Nilsen',
    role: 'Tenor',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Nils%20Georg/general/about-profile-img_z38xiz.jpg',
    profileUrl: '/nils-georg-nilsen',
  },
  {
    name: 'Kathrine Hvinden Hals',
    role: 'Fiolinist',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/Kathrine_ghkcqt.jpg',
    profileUrl: '/kathrine-hvinden-hals',
  },
];

export function ArtistsPreview() {
  return (
    <div id="artister" className="py-32 bg-white">
      <div className="px-6 mx-auto text-center max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Artister
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Vår talentfulle gruppe av erfarne og lidenskapelige artister,
            dedikert til å skape minneverdige musikalske opplevelser.
          </p>
        </div>
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 mx-auto mt-20 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                className="object-cover w-56 h-56 mx-auto rounded-full grayscale"
                src={person.imageUrl}
                alt=""
                width={300}
                height={300}
              />

              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              <ul role="list" className="flex justify-center mt-6 gap-x-6">
                <li>
                  <Link
                    href={person.profileUrl}
                    className="rounded-md bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-slate-600 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-all duration-150 ease-in-out hover:text-slate-900"
                  >
                    Se profil
                  </Link>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
