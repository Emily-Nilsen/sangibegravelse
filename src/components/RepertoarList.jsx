import Image from 'next/image';
import Link from 'next/link';
import { ChurchIcon } from './icons/Church';
import { ViolinIcon } from './icons/Violin';
import { PianoIcon } from './icons/Piano';
import { MicrophoneIcon } from './icons/Microphone';

const features = [
  {
    name: 'Salmer',
    description:
      'Kjære religiøse sanger for å hedre livet til den avdøde og gi trøst til sørgende. Disse salmene, ofte valgt for sine meningsfulle tekster og melodiske skjønnhet, tilbyr et kollektivt uttrykk for tro, refleksjon og håp, og bringer trøst og enhet i tider med tap.',
    icon: <ChurchIcon className="w-6 h-6 fill-purple-600" aria-hidden="true" />,
  },
  {
    name: 'Viser',
    description:
      'Musikk som bærer essensen av tradisjon og historiefortelling. Disse sangene, forankret i kulturarv og ofte akkompagnert av akustiske instrumenter, gir en følelse av intimitet og felles opplevelse. De gir trøst, refleksjon og en trøstende forbindelse til fortiden, og feirer et liv som er levd og verdsatt.',
    icon: <ViolinIcon className="w-6 h-6 fill-purple-600" aria-hidden="true" />,
  },
  {
    name: 'Klassisk',
    description:
      'Tidløse og elskede musikalske komposisjoner med gripende melodier og stemningsfulle tekster, som gir en følelsesmessig forbindelse, hedrer minnet om den avdøde og tilbyr trøst og refleksjon til sørgende hjerter.',
    icon: <PianoIcon className="w-6 h-6 fill-purple-600" aria-hidden="true" />,
  },
  {
    name: 'Pop',
    description:
      'Moderne, populære musikkutvalg som har personlig betydning eller som gir gjenklang med den avdødes liv. Gir et moderne preg til seremonier og lar sørgende få kontakt med kjære minner, uttrykke følelser og finne trøst gjennom kjente melodier.',
    icon: (
      <MicrophoneIcon className="w-6 h-6 fill-purple-600" aria-hidden="true" />
    ),
  },
];

export function RepertoarList() {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <p className="text-base font-semibold leading-7 text-purple-600">
            Omfattende repertoar for begravelsessang
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sanger som gir trøst og mening
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Vår side er utviklet som et bidrag til pårørende for å finne og
            velge riktig musikk til begravelser. Vi har nøye kuratert en
            mangfoldig samling av særlig egnede salmer, viser, klassiske
            stykker, popsanger og mer.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative pl-16 transition-all duration-150 ease-in-out rounded-lg "
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-50">
                    {feature.icon}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className="flex w-full my-6 sm:justify-center">
            <p className="mt-6">
              <Link
                href="#"
                className="text-sm font-semibold leading-6 text-purple-600"
              >
                Se hele repertoaret <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
