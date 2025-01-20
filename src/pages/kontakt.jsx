import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import contactDesktop from '../images/general/contact-desktop.webp';
import contactMobile from '../images/general/contact-mobile.webp';

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
            src={contactDesktop}
            alt="Blomster"
            className="object-cover w-full h-full opacity-50 "
            width={1920}
            height={1076}
          />
        </div>
        <div className="absolute inset-0 md:hidden">
          <Image
            src={contactMobile}
            alt="Blomster"
            width={900}
            height={1350}
            className="absolute inset-0 object-cover object-left w-full h-full opacity-20"
          />
        </div>
        <div className="px-6 py-24 bg-t isolate sm:py-32 lg:px-8">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          ></div>
          <div className="max-w-2xl pt-10 mx-auto text-center">
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
          {/* Contact NG */}
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
            className="p-10 mx-auto mt-16 rounded-2xl bg-gray-50 w-fit sm:mt-20 sm:w-full sm:max-w-md"
          >
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Kontakt Nils Georg Nilsen
            </h3>
            <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <Link
                    className="font-semibold text-slate-600"
                    href="mailto:nils.g.nilsen@gmail.com"
                  >
                    nils.g.nilsen@gmail.com
                  </Link>
                </dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">Phone number</dt>
                <dd>
                  {' '}
                  <Link href="tel:+47 402 20 414">+47 402 20 414</Link>
                </dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </section>
    </>
  );
}
