import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Kontakt() {
  return (
    <section className="relative bg-white">
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/kontakt_background_ol6igg.webp"
          alt="Blomster"
          className="object-cover w-full h-full opacity-20 "
          width={5616}
          height={3744}
        />
      </div>
      <div className="absolute inset-0 md:hidden">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/kontakt_background_ol6igg.webp"
          alt="Blomster"
          className="object-cover object-right w-full h-full opacity-20 "
          width={5616}
          height={3744}
        />
      </div>
      <div className="px-6 py-24 bg-t isolate sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        ></div>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ta kontakt
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Har du spørsmål eller ønsker å booke våre tjenester? <br /> Ta
            kontakt med oss i dag.
          </p>
        </div>
        <form
          action="#"
          subject="Kontakt Sang i begravelse"
          name="Sang i begravelse - Kontakt skjema"
          data-netlify="true"
          method="POST"
          className="max-w-xl mx-auto mt-16 sm:mt-20"
        >
          <input
            type="hidden"
            name="form-name"
            value="Sang i begravelse - Kontakt skjema"
          />
          <input
            type="hidden"
            name="subject"
            value="Kontakt Sang i begravelse"
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Fornavn
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Etternavn
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                E-post
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Telefonnummer
              </label>
              <div className="relative mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Melding
              </label>
              <div className="mt-2.5">
                <textarea
                  required
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
            {/* Agree */}

            <fieldset className="flex mt-6 gap-x-4 sm:col-span-2">
              <div className="space-y-8">
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="samtykke"
                      name="samtykke"
                      type="checkbox"
                      required
                      className="w-4 h-4 rounded text-slate-600 border-stone-300 focus:ring-slate-500"
                    />
                  </div>
                  <div className="ml-3 -mt-1 text-base">
                    <label
                      htmlFor="samtykke"
                      className="text-sm leading-6 text-gray-600"
                    >
                      Ved å velge dette godtar du vår{' '}
                      <Link
                        href="/personvernerklaering"
                        className="font-semibold text-slate-600"
                      >
                        personvernerklæring
                      </Link>
                      .
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-slate-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
