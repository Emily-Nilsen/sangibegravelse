import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export function HeroNilsGeorg() {
  return (
    <div className="bg-gray-900 ">
      <div className="relative grid grid-cols-1 overflow-hidden isolate pt-14 sm:grid-cols-2">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/NG_profile_mobile_kbfder.webp"
          alt="Hvite roser"
          width={2073}
          height={1887}
          className="absolute inset-0 object-cover w-full h-full sm:hidden -z-10"
        />
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/NG_profile_ho4l6x.webp"
          alt="Hvite roser"
          width={2830}
          height={1887}
          className="absolute inset-0 hidden object-cover w-full h-full sm:block -z-10"
        />
        <div
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          {/* <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          /> */}
        </div>
        <div className="max-w-md py-32 pr-6 mx-auto sm:mr-12 sm:-ml-12 sm:col-start-2 sm:max-w-2xl md:max-w-3xl sm:py-48 lg:py-56 sm:mx-0">
          <div className="text-center sm:text-left">
            <h6 className="pt-20 text-5xl tracking-tight text-white sm:text-slate-700 sm:text-6xl lg:text-7xl">
              Nils Georg Nilsen
            </h6>

            <p className="hidden px-10 mx-auto mt-6 leading-8 text-gray-600 max-w-[100px] sm:px-0 sm:max-w-lg sm:text-lg lg:max-w-xl sm:mx-0 sm:block ">
              En talentfull sopran med en fortryllende stemme og allsidig
              repertoar fra pop til opera.
            </p>

            <div className="flex items-center justify-center mt-10 sm:justify-start gap-x-6">
              <Link
                href="/repertoar"
                className="rounded-md bg-white/80 px-3.5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-all duration-150 ease-in-out hover:text-slate-900"
              >
                <span className="hidden sm:block">Se hele repertoaret</span>
                <span className="sm:hidden">Repertoar</span>
              </Link>
              {/* <Link
                href="#artister"
                className="text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-600 hover:text-slate-700"
              >
                Artister <span aria-hidden="true">→</span>
              </Link> */}
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
