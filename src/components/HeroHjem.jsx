import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export function HeroHjem() {
  return (
    <div className="bg-gray-900">
      <div className="relative overflow-hidden isolate pt-14">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1686491111/Sang%20i%20begravelse/HeroHjem_mobile_bbqkkr.webp"
          alt="Hvite roser"
          width={2073}
          height={1887}
          className="absolute inset-0 object-cover w-full h-full sm:hidden -z-10"
        />
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/HeroHjem_wu3zet.webp"
          alt="Hvite roser"
          width={2830}
          height={1887}
          className="absolute inset-0 hidden object-cover w-full h-full sm:block -z-10"
        />
        <div
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="max-w-md py-32 mx-auto sm:max-w-2xl md:max-w-3xl sm:py-48 lg:py-56">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative px-3 py-1 text-sm leading-6 text-gray-400 rounded-full ring-1 ring-white/10 hover:ring-white/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-white">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
          <div className="text-center">
            <h6 className="text-5xl tracking-tight text-slate-700 sm:text-6xl lg:text-7xl">
              Sang i begravelse
            </h6>
            <p className="max-w-xs px-10 mx-auto mt-6 leading-8 text-gray-500 sm:px-0 sm:max-w-lg sm:text-lg lg:max-w-xl">
              Vår side er utviklet som et bidrag til pårørende for å finne og
              velge riktig musikk til begravelser.
            </p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <Link
                href="/repertoar"
                className="rounded-md bg-white/70 px-3.5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-all duration-150 ease-in-out hover:text-slate-900"
              >
                Repertoar
              </Link>
              <Link
                href="#artister"
                className="text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-600 hover:text-slate-700"
              >
                Artister <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
