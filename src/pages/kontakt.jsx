import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import contactDesktop from '../images/general/contact-desktop.webp';
import contactMobile from '../images/general/contact-mobile.webp';

export default function Kontakt() {
  const contacts = [
    {
      name: 'Nils Georg Nilsen',
      role: 'Sanger - Tenor',
      email: 'nils.g.nilsen@gmail.com',
      phone: '+47 402 20 414',
    },
    {
      name: 'Susanne Hvinden Hals',
      role: 'Sanger - Sopran',
      email: 'susannehvinden@gmail.com',
      phone: '+47 455 06 256',
    },
    {
      name: 'Kathrine Hvinden Hals',
      role: 'Fiolinist',
      email: 'hvindenhalskathrine@gmail.com',
      phone: '+47 476 76 555',
    },
    {
      name: 'Jan-Tore Saltnes',
      role: 'Sanger - Tenor',
      email: 'mail@jts.no',
      phone: '+47 930 80 087',
    },
    {
      name: 'Espen Solsbak',
      role: 'Sanger - Tenor',
      email: 'espen@solsbak.com',
      phone: '+47 951 79 903',
    },
    {
      name: 'Sebastian Haugen',
      role: 'Bassist',
      email: 'sebastianhaugen@gmail.com',
      phone: '+47 948 93 551',
    },
    {
      name: 'Audun Sandvik',
      role: 'Cellist',
      email: 'sandvik.audun@gmail.com',
      phone: '+47 928 42 567',
    },
    {
      name: 'Petter Vermeli',
      role: 'Sanger',
      email: 'pettervermeli10@hotmail.com',
      phone: '+47 988 66 897',
    },
  ];

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
            className="object-cover w-full h-full opacity-50"
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
          {/* Contact Cards */}
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
            className="grid grid-cols-1 gap-6 px-24 mt-16 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
          >
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-10 text-center shadow-lg rounded-2xl bg-gray-50"
              >
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  {contact.name}
                </h3>
                <h5 className="text-sm font-semibold leading-7 text-gray-900">
                  {contact.role}
                </h5>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <Link
                        className="font-semibold text-slate-600"
                        href={`mailto:${contact.email}`}
                      >
                        {contact.email}
                      </Link>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>
                      <Link href={`tel:${contact.phone}`}>{contact.phone}</Link>
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
