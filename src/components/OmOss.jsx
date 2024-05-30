import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

export function OmOss() {
  return (
    <div className="relative py-24 overflow-hidden bg-white isolate sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-slate-600">
            Velkommen til
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Sang i begravelse
          </h1>
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: 'fade',
            }}
            className="mt-6 text-xl leading-8 text-gray-700"
          >
            Etter mange års erfaring som musikere i begravelser har vi erfart at
            planlegging av begravelser og minnestunder både er en følelsesladet
            og stressende oppgave for de etterlatte.
          </motion.p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
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
            className="relative lg:order-last lg:col-span-5"
          >
            <figure className="pl-8 border-l border-slate-600">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>“Musikk gjør en svak på en måte så man blir sterk.”</p>
              </blockquote>
              <figcaption className="flex mt-8 gap-x-4">
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">
                    Benny Andersen
                  </div>
                  {/* <div className="text-gray-600">
                    Operasangerinne, København
                  </div> */}
                </div>
              </figcaption>
            </figure>
          </motion.div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
            >
              Musikk har en unik evne til å uttrykke følelser og skape en
              stemning som ord alene ofte ikke kan. Derfor ønsker vi å hjelpe
              med innspill og tips for å finne de sangene som best speiler livet
              til den som har gått bort, og som gir en meningsfull ramme rundt
              avskjedsseremonien.
            </motion.p>

            <motion.p
              className="mt-8"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
            >
              Vår nettside er fylt med nøye utvalgte musikkforslag, råd og
              ressurser for å støtte dere i denne prosessen. Vi håper å kunne
              bidra til at musikken blir en vakker og trøstende del av
              seremonien, og at den kan være med på å skape et verdig farvel.
            </motion.p>

            <motion.p
              className="mt-8"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
            >
              Takk for at du besøker "Sang i begravelse".
            </motion.p>

            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="my-6 mt-8"
            >
              <p className="text-sm leading-6 transition-all duration-150 ease-in-out text-slate-600 hover:text-slate-950">
                Med varme hilsener,
              </p>
              <p className="text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-600 hover:text-slate-950">
                Susanne og Nils Georg
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
