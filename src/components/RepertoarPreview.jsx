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
      'Religiøse sanger hedrer livet og trøster sørgende gjennom meningsfulle tekster og melodi. De gir tro, refleksjon og håp, og samler trøst og enhet i tap.',
    icon: <ChurchIcon className="w-5 h-5 fill-slate-600" aria-hidden="true" />,
  },
  {
    name: 'Viser',
    description:
      'Musikk som bærer tradisjon og historiefortelling, forankret i kulturarv med akustiske instrumenter, gir intimitet, trøst og refleksjon.',
    icon: <ViolinIcon className="w-5 h-5 fill-slate-600" aria-hidden="true" />,
  },
  {
    name: 'Klassisk',
    description:
      'Elskede komposisjoner med gripende melodier og stemningsfulle tekster hedrer minnet, gir trøst og refleksjon til sørgende hjerter.',
    icon: <PianoIcon className="w-4 h-4 fill-slate-600" aria-hidden="true" />,
  },
  {
    name: 'Pop',
    description:
      'Moderne, meningsfull musikk som gir gjenklang med den avdødes liv, gir et moderne preg til seremonier og skaper trøst gjennom kjente melodier.',
    icon: (
      <MicrophoneIcon className="w-4 h-4 fill-slate-600" aria-hidden="true" />
    ),
  },
];

export function RepertoarPreview() {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto sm:text-center">
          <p className="text-base font-semibold leading-7 text-slate-600">
            Omfattende repertoar for begravelsessang
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sanger som gir trøst og mening
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Vår side er utviklet som et bidrag til pårørende for å finne og
            velge riktig musikk til begravelser. Vi har nøye kuratert en
            mangfoldig samling av særlig egnede salmer, viser, klassiske
            stykker, popsanger og mer.
          </p>
          <div className="flex w-full my-2 sm:justify-center">
            <p className="mt-6">
              <Link
                href="/repertoar"
                className="text-sm font-semibold leading-6 transition duration-150 ease-in-out text-slate-600 hover:text-slate-500"
              >
                Se hele repertoaret <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="relative pt-16 overflow-hidden">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <img
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/Screenshot_2023-06-09_at_20.36.26_jx3mow.png"
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="px-6 mx-auto mt-16 max-w-7xl sm:mt-20 md:mt-24 lg:px-8">
        <dl className="grid max-w-2xl grid-cols-1 mx-auto text-base leading-7 text-gray-600 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <span className="absolute left-1 top-1" aria-hidden="true">
                  {feature.icon}
                </span>
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
