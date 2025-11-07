import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NGPreview from '../images/profiles/NG-preview.webp';
import SHPreview from '../images/profiles/SH-preview.webp';
import ESPreview from '../images/profiles/ES-preview.webp';
import SHHPreview from '../images/profiles/SHH-preview.webp';
import KHHPreview from '../images/profiles/KHH-preview.webp';
import JTPreview from '../images/profiles/JT-preview.webp';
import ASPreview from '../images/profiles/AS-preview.webp';
import PVPreview from '../images/profiles/PV-preview.webp';

const people = [
  {
    name: 'Susanne Hvinden Hals',
    role: 'Sanger',
    imageUrl: SHHPreview,
    profileUrl: '/susanne-hvinden-hals',
  },
  {
    name: 'Nils Georg Nilsen',
    role: 'Sanger',
    imageUrl: NGPreview,
    profileUrl: '/nils-georg-nilsen',
  },
  {
    name: 'Kathrine Hvinden Hals',
    role: 'Fiolinist',
    imageUrl: KHHPreview,
    profileUrl: '/kathrine-hvinden-hals',
  },
  {
    name: 'Jan-Tore Saltnes',
    role: 'Sanger',
    imageUrl: JTPreview,
    profileUrl: '/jan-tore-saltnes',
  },
  {
    name: 'Espen Solsbak',
    role: 'Sanger',
    imageUrl: ESPreview,
    profileUrl: '/espen-solsbak',
  },
  {
    name: 'Sebastian Haugen',
    role: 'Bassist',
    imageUrl: SHPreview,
    profileUrl: '/sebastian-haugen',
  },
  {
    name: 'Audun Sandvik',
    role: 'Cellist',
    imageUrl: ASPreview,
    profileUrl: '/audun-sandvik',
  },
  {
    name: 'Petter Vermeli',
    role: 'Sanger',
    imageUrl: PVPreview,
    profileUrl: '/petter-vermeli',
  },
];

export function ArtistsPreview() {
  return (
    <div id="artister" className="relative pt-16 pb-24 sm:py-32 bg-gray-50/50">
      <div className="px-6 mx-auto text-center max-w-7xl lg:px-8">
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 "
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
                  className="object-cover w-56 h-56 mx-auto transition duration-300 ease-in-out rounded-full grayscale-[50%] group-hover:grayscale-0"
                  src={person.imageUrl}
                  alt={person.name}
                  width={300}
                  height={300}
                  loading="lazy"
                  placeholder="blur"
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
