import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChurchIcon } from './icons/Church';
import { ViolinIcon } from './icons/Violin';
import { PianoIcon } from './icons/Piano';
import { MicrophoneIcon } from './icons/Microphone';

const features = [
  {
    name: 'Salmer',
    description:
      'Trøster, hedrer og samler gjennom tro, melodi og meningsfulle tekster.',
    icon: <ChurchIcon className="w-5 h-5 fill-slate-600" aria-hidden="true" />,
  },
  {
    name: 'Viser',
    description:
      'Tradisjonsrik musikk som gir intimitet og refleksjon gjennom historiefortelling.',
    icon: <ViolinIcon className="w-5 h-5 fill-slate-600" aria-hidden="true" />,
  },
  {
    name: 'Klassisk',
    description: 'Gripende musikk med vakre melodier og tekster.',
    icon: <PianoIcon className="w-4 h-4 fill-slate-600" aria-hidden="true" />,
  },
  {
    name: 'Pop',
    description:
      'Moderne, meningsfull musikk gir trøst med kjente melodier i avdødes seremonier.',
    icon: (
      <MicrophoneIcon className="w-4 h-4 fill-slate-600" aria-hidden="true" />
    ),
  },
];

export function RepertoarPreview() {
  return (
    <div className="py-24 overflow-hidden bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-medium leading-7 text-slate-600">
                Omfattende repertoar for begravelsessang
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Sanger som gir trøst og mening
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Et stort utvalg av musikk og sanger. Særlig egnede salmer,
                viser, klassiske stykker, popsanger og mer.
              </p>
              <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature, i) => (
                  <motion.div
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
                    className="relative pl-9"
                  >
                    <dt className="inline font-semibold text-gray-900">
                      <span
                        className="absolute left-1 top-1"
                        aria-hidden="true"
                      >
                        {feature.icon}
                      </span>
                      {feature.name}
                    </dt>
                    {'. '}
                    <dd className="inline">{feature.description}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
          {/* desktop */}
          <motion.div
            className="hidden sm:block"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{
              opacity: 0,
              y: 50,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: 'fade',
            }}
          >
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/repertoar_preview_v4_nwiftt.png"
              alt="Rerpertoar for begravelsessang"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={1456}
              height={728}
            />
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{
                opacity: 0,
                y: 50,
              }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="hidden w-full sm:flex"
            >
              <p className="mt-6">
                <Link
                  href="/"
                  className="text-sm font-semibold leading-6 transition duration-150 ease-in-out text-slate-600 hover:text-slate-800"
                >
                  Se hele repertoaret <span aria-hidden="true">→</span>
                </Link>
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative sm:hidden"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{
              opacity: 0,
              y: 50,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: 'fade',
            }}
          >
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/repertoar_preview_v2_gaiizi.webp"
              alt="Rerpertoar for begravelsessang"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={1456}
              height={728}
            />
            <div className="flex w-full sm:hidden">
              <p className="mt-6">
                <Link
                  href="/repertoar"
                  className="text-sm font-semibold leading-6 transition duration-150 ease-in-out text-slate-600 hover:text-slate-500"
                >
                  Se hele repertoaret <span aria-hidden="true">→</span>
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
