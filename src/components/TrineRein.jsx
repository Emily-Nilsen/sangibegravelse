import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import TrinePortrait from '../images/profiles/TR-preview.webp';

export function TrineRein() {
  return (
    <div className="relative py-24 overflow-hidden bg-white isolate sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-slate-600">
            Sangeren
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trine Rein
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
            Sanger og artist Trine Rein
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
                <p>
                  «Musikk har en utrolig viktig og trøstende funksjon for folk
                  som står i en tung tid, og det er et ærefullt oppdrag å få
                  lose pårørende gjennom sin siste hilsen til en de har mistet.»
                </p>
              </blockquote>
              <figcaption className="flex mt-8 gap-x-4">
                <Image
                  className="flex-none object-cover w-6 h-6 rounded-full bg-gray-50"
                  src={TrinePortrait}
                  alt="Trine Rein"
                  width={485}
                  height={485}
                  placeholder="blur"
                />
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">Trine Rein</div>
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
              Trine Rein er et velkjent navn for mange, og med sin over 35 år
              lange fartstid som artist og sanger for ulike publikum over hele
              verden er hun godt rustet til å møte mennesker i en sårbar tid.
              Hun holder til i Oslo, og er for første gang tilgjengelig som
              sanger i begravelser på forespørsel i Oslo og omegn.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.6,
                duration: 1,
                type: 'fade',
              }}
              className="mt-6"
            >
              Med sin kraftfulle og rutinerte stemme mestrer Trine Rein et bredt
              spekter av musikalske sjangre innen populærmusikk; alt fra
              pop/rock/country til soul, R&B og blues, samt visesanger og
              salmer. Hun gjør det hun kan for å imøtekomme de pårørendes
              ønsker, og samarbeider med organisten i kirken for profesjonell
              akkompagnering.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.7,
                duration: 1,
                type: 'fade',
              }}
              className="mt-6"
            >
              Til vanlig reiser hun land og strand rundt med egne musikere og
              produksjoner, og hun blir ofte hyret inn som gjesteartist hos både
              kor, korps og storband.
            </motion.p>
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.8,
                duration: 1,
                type: 'fade',
              }}
              className="mt-12"
            >
              {/* <h3 className="text-base font-semibold leading-7 text-gray-900">
                Relevante websider
              </h3> */}
              <div className="mt-4 space-y-2">
                <Link
                  href="https://www.trinerein.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-600 hover:text-slate-950"
                >
                  trinerein.com <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="https://www.rocksportbooking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-600 hover:text-slate-950"
                >
                  rocksportbooking.com <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{
                opacity: 0,
                y: 50,
              }}
              transition={{
                delay: 0.9,
                duration: 1,
                type: 'fade',
              }}
              className="p-10 mt-10 rounded-2xl bg-gray-50"
            >
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Kontakt Trine Rein
              </h3>
              <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <Link
                      className="font-semibold text-slate-600"
                      href="mailto:contact@trinerein.com"
                    >
                      contact@trinerein.com
                    </Link>
                  </dd>
                </div>
                <div className="mt-1">
                  <dt className="sr-only">Phone number</dt>
                  <dd>
                    <Link href="tel:+4795095505">+47 950 95 505</Link>
                  </dd>
                </div>
              </dl>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
