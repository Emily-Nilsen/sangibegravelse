import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export function HeroNilsGeorg() {
  return (
    <div className="bg-amber-50 ">
      <div className="relative grid grid-cols-1 overflow-hidden isolate pt-14 sm:grid-cols-2">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1718180631/Sang%20i%20begravelse/NG_profile_mobile_v2_cropped_jxxv2x.webp"
          alt="Nils Georg Nilsen"
          width={900}
          height={1125}
          className="absolute inset-0 object-cover w-full h-full sm:hidden -z-10"
          priority
        />
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/NG_profile_desktop_lg_kr8fmw.webp"
          alt="Nils Georg Nilsen"
          width={3840}
          height={2160}
          className="absolute inset-0 hidden object-cover w-full h-full sm:block -z-10"
          priority
        />
        <div className="absolute left-0 w-full h-40 -top-10 opacity-500 bg-gradient-to-b from-gray-900/50" />
        <div className="absolute top-0 left-0 w-full h-40 opacity-50 bg-gradient-to-b from-gray-900/50" />
        <div className="max-w-md py-32 pr-6 mx-auto sm:mr-12 sm:-ml-12 sm:col-start-2 sm:max-w-2xl md:max-w-3xl sm:py-48 lg:py-56 sm:mx-0">
          <div className="text-center sm:text-left">
            <h6 className="pt-20 text-5xl text-white sm:text-slate-700 sm:text-6xl lg:text-7xl">
              Nils Georg Nilsen
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
              
              Allsidig sanger med imponerende prestasjoner og et omfattende
              operarepertoar.
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
                href="/#artister"
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
        >
          {/* <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}
