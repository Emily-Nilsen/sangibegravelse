import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const people = [
  {
    name: 'Susanne Hvinden Hals',
    role: 'Sanger',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Susanne%20Hals/Susanne_img_1_c3qttj.webp',
    profileUrl: '/susanne-hvinden-hals',
  },
  {
    name: 'Nils Georg Nilsen',
    role: 'Sanger',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Nils%20Georg/general/about-profile-img_z38xiz.jpg',
    profileUrl: '/nils-georg-nilsen',
  },
  {
    name: 'Kathrine Hvinden Hals',
    role: 'Fiolinist',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/Kathrine_square_eqohro.webp',
    profileUrl: '/kathrine-hvinden-hals',
  },
  {
    name: 'Jan-Tore Saltnes',
    role: 'Sanger',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/artists/jan-tore_saltnes_jwsakm.webp',
    profileUrl: '/jan-tore-saltnes',
  },
  {
    name: 'Espen Solsbak',
    role: 'Sanger',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/artists/PortrettEspenSolsbak_copy_tapdim.webp',
    profileUrl: '/espen-solsbak',
  },
];

export function ArtistsPreview() {
  return (
    <div id="artister" className="pt-16 pb-24 sm:py-32 bg-gray-50/50">
      <div className="px-6 mx-auto text-center max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Artister
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Vår talentfulle gruppe av erfarne og lidenskapelige artister,
            dedikert til å skape minneverdige musikalske opplevelser av høy
            kvalitet.
          </p>
        </div>
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 mx-auto mt-20 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person, i) => (
            <motion.li
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                initialDelay: 0.3,
                duration: 0.7,
                delay: i * 0.3,
                ease: 'easeOut',
              }}
              key={i}
              className="group"
            >
              <Link href={person.profileUrl}>
                <Image
                  className="object-cover w-56 h-56 mx-auto transition duration-300 ease-in-out rounded-full grayscale group-hover:grayscale-0"
                  src={person.imageUrl}
                  alt={person.name}
                  width={300}
                  height={300}
                />
              </Link>

              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              <ul role="list" className="flex justify-center mt-6 gap-x-6">
                <li>
                  <Link
                    href={person.profileUrl}
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-medium text-slate-600 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-all duration-150 ease-in-out hover:text-slate-900"
                  >
                    Se profil
                  </Link>
                </li>
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
