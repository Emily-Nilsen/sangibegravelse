import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export function HeroSebastian() {
  return (
    <div className="bg-slate-800">
      <div className="relative grid grid-cols-1 overflow-hidden isolate pt-14 sm:grid-cols-2">
        <Image
          src="/images/artists/sebastian_haugen_square.webp"
          alt="Sebastian Haugen"
          width={2073}
          height={1887}
          className="absolute inset-0 object-cover w-full h-full sm:hidden -z-10"
          priority
        />
        <div className="absolute inset-0 bg-gray-950/20" />
        <Image
          src="/images/artists/sebastian_haugen.webp"
          alt="Sebastian Haugen"
          width={2830}
          height={1887}
          className="absolute inset-0 hidden object-cover w-full h-full sm:block -z-10"
          priority
        />
        <div className="absolute left-0 w-full h-40 -top-10 opacity-500 bg-gradient-to-b from-gray-900/50" />
        <div className="absolute top-0 left-0 w-full h-40 opacity-50 bg-gradient-to-b from-gray-900/50" />
        <div className="relative z-10 max-w-md py-32 pr-6 mx-auto sm:mr-12 sm:-ml-12 sm:col-start-2 sm:max-w-2xl md:max-w-3xl sm:py-48 lg:py-56 sm:mx-0">
          <div className="pt-10 -mb-10 text-center sm:-mb-10 sm:pt-0 sm:text-left">
            <h6 className="pt-24 mt-10 -mb-10 text-5xl text-white sm:-mb-0 sm:mt-0 sm:pt-20 sm:text-slate-50 sm:text-6xl lg:text-7xl">
              Sebastian Haugen
            </h6>

            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="hidden px-10 mx-auto mt-6 leading-8 text-gray-300 max-w-[100px] sm:px-0 sm:max-w-lg sm:text-lg lg:max-w-xl sm:mx-0 sm:block "
            >
              Allsidig bassist med bredt repertoar og jazzbakgrunn.
            </motion.p>

            <div className="flex items-center justify-center mt-10 sm:justify-start gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-white/80 px-3.5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-all duration-150 ease-in-out hover:text-slate-900 mt-6 sm:mt-0 -mb-6 sm:-mb-0"
              >
                <span className="hidden sm:block">Se hele repertoaret</span>
                <span className="sm:hidden">Repertoar</span>
              </Link>
              <Link
                href="/artister"
                className="hidden text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-100 hover:text-white sm:block"
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
