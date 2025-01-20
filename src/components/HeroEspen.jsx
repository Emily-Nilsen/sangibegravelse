import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ESHeroDesktop from '../images/profiles/ES-desktop.webp';
import ESHeroMobile from '../images/profiles/ES-mobile.webp';

export function HeroEspen() {
  return (
    <div className="bg-slate-800">
      <div className="relative grid grid-cols-1 overflow-hidden isolate pt-14 sm:grid-cols-2">
        <Image
          src={ESHeroMobile}
          alt="Espen Solsbak"
          width={900}
          height={900}
          className="absolute inset-0 object-cover w-full h-full sm:hidden -z-10"
          priority
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-black/10" />
        <Image
          src={ESHeroDesktop}
          alt="Espen Solsbak"
          width={1920}
          height={1120}
          className="absolute inset-0 hidden object-cover w-full h-full sm:block -z-10"
          priority
          placeholder="blur"
        />
        <div className="absolute left-0 w-full h-40 -top-10 opacity-500 bg-gradient-to-b from-gray-900/50" />
        <div className="absolute top-0 left-0 w-full h-40 opacity-50 bg-gradient-to-b from-gray-900/50" />
        <div className="max-w-md py-32 mx-auto sm:mr-12 sm:-ml-12 sm:col-start-2 sm:max-w-2xl md:max-w-3xl sm:py-48 lg:py-56 sm:mx-0">
          <div className="relative text-center mt-14 -mb-14 sm:text-left z-1">
            <h6 className="pt-20 text-5xl text-white sm:text-slate-700 sm:text-6xl lg:text-7xl">
              Espen Solsbak
            </h6>

            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="hidden px-10 mx-auto mt-6 leading-8 text-gray-600 max-w-[100px] sm:px-0 sm:max-w-lg sm:text-lg lg:max-w-xl sm:mx-0 sm:block "
            >
              En talentfull sanger som behersker flere sjangre fra opera til
              jazz og er erfaren med opptredener og seremonier.
            </motion.p>

            <div className="flex items-center justify-center mt-10 sm:justify-start gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-white/80 px-3.5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-all duration-150 ease-in-out hover:text-slate-900"
              >
                <span className="hidden sm:block">Se hele repertoaret</span>
                <span className="sm:hidden">Repertoar</span>
              </Link>
              <Link
                href="/artister"
                className="hidden text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-600 hover:text-slate-700 sm:block"
              >
                Tilbake til artister <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
}
