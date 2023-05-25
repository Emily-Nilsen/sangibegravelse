import Image from 'next/image';
import Link from 'next/link';

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Salmer',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Viser',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Klassisk',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Pop',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
];

export function RepertoarList() {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <p className="text-base font-semibold leading-7 text-stone-600">
            Omfattende repertoar for begravelsessang
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sanger som gir trøst og mening
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Utforsk vår mangfoldige samling av salmer, viser, klassiske stykker,
            popsanger og mer, nøye kuratert for å hedre og oppløfte
            begravelsestjenester. Finn den perfekte musikken for dine
            høytidelige anledninger.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <Link
                href="#"
                key={feature.name}
                className="relative p-6 transition-all duration-150 ease-in-out rounded-lg bg-gray-50 hover:bg-gray-50/50 group"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {/* <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 rounded-lg bg-stone-600">
                    <feature.icon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </div> */}
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 group-hover:text-gray-700">
                  {feature.description}
                </dd>
              </Link>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
