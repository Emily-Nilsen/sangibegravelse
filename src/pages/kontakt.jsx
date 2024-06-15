import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Kontakt() {
  return (
    <>
      <Head>
        <title>
          Kontakt Sang i begravelse – Skap minner med vakker begravelsesmusikk
        </title>
        <meta
          name="description"
          content="Kontakt Sang i begravelse for skreddersydde musikktjenester til minnesverdige begravelsesritualer. Profesjonell hjelp for passende musikkvalg."
        />
        <link
          rel="canonical"
          href="https://sangibegravelse.no/kontakt"
          key="canonical"
        />
      </Head>
      <section className="relative bg-white">
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1697230359/Sang%20i%20begravelse/Home_Hero_desktop_v2_vyjmjo.webp"
            alt="Blomster"
            className="object-cover w-full h-full opacity-50 "
            width={3000}
            height={1681}
          />
        </div>
        <div className="absolute inset-0 md:hidden">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1697230348/Sang%20i%20begravelse/Home_Hero_mobile_syywxf.webp"
            alt="Blomster"
            width={2176}
            height={3264}
            className="absolute inset-0 object-cover object-left w-full h-full opacity-20"
          />
        </div>
        <div className="px-6 py-24 bg-t isolate sm:py-32 lg:px-8">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          ></div>
          <div className="max-w-2xl mx-auto text-center">
            <h6 className="text-5xl text-gray-900 sm:text-6xl">Ta kontakt</h6>
            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="mt-2 text-lg leading-8 text-gray-600"
            >
              Har du spørsmål eller ønsker å booke våre tjenester? <br /> Ta
              kontakt med oss i dag.
            </motion.p>
          </div>
          <form
            action="#"
            subject="Kontakt Sang i begravelse"
            name="Sang i begravelse - Kontaktskjema"
            data-netlify="true"
            method="POST"
            className="max-w-xl mx-auto mt-16 sm:mt-20"
          >
            <input
              type="hidden"
              name="form-name"
              value="Sang i begravelse - Kontaktskjema"
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
                className="block w-full rounded-md bg-slate-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 transition-all duration-300 ease-in-out"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
