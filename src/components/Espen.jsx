import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

export function Espen() {
  return (
    <div className="relative py-24 overflow-hidden bg-white isolate sm:py-32">
      <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      ></div>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-slate-600">
            Sangeren
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Espen Solsbak
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
            Espen Solsbak er en meget allsidig sanger med stor musikalitet og
            formidlingsevne.
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
                  “Han var alt som er fordelen med live musikk. Han tok
                  stemningen og var usedvanlig lett å samarbeide med. Stemningen
                  han klarte å skape gjorde at en tung seremoni fikk luft som
                  gjorde at det ble lettere å være i rommet. Musikalitet,
                  tilstedeværelse og særdeles gode musikalske evner. Valget av
                  musikk og fremførelse var en opplevelse. Espen er virkelig
                  varmt anbefalt!”
                </p>
              </blockquote>
              <figcaption className="flex mt-8 gap-x-4">
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">Inge Ålgård</div>
                  <div className="text-gray-600">
                    Sykehusprest, Akuttklinikken OUS
                  </div>
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
              Han behersker flere sjangre som klassisk/opera, pop, stev,
              musikal, rap, jazz, viser og salmer. Espen har akkompagnert seg
              selv på gitar under flere seremonier. Han er profesjonell til
              fingerspissene, og strekker seg langt for å møte pårørendes
              ønsker.
            </motion.p>

            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="mt-8"
            >
              Espen har i flere perioder vikariert i Operakoret ved Den Norske
              Opera & Ballett.
            </motion.p>

            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="mt-6"
            >
              Espen er også medlem av den kritikerroste vokaltrioen Nordic
              Tenors. De turnerer Norge rundt hvert eneste år og spre glede og
              julestemning til innbyggerne i dette langstrakte landet.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="mt-6"
            >
              Han har sin utdanning fra Fakultet for utøvende kunstfag ved
              Universitetet i Stavanger, Conservatorio di Musica Santa Cecilia i
              Roma og Operahøgskolen i Oslo.
            </motion.p>
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="my-6"
            >
              <Link
                href="http://www.solsbak.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-600 hover:text-slate-950"
              >
                solsbak.com <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="my-6"
            >
              <Link
                href="https://www.nordictenors.no/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-600 hover:text-slate-950"
              >
                nordictenors.no <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
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
              className="p-10 rounded-2xl bg-gray-50"
            >
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Kontakt Espen Solsbak
              </h3>
              <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <Link
                      className="font-semibold text-slate-600"
                      href="mailto:espen@solsbak.com"
                    >
                      espen@solsbak.com
                    </Link>
                  </dd>
                </div>
                {/* <div className="mt-1">
                  <dt className="sr-only">Phone number</dt>
                  <dd>
                    {' '}
                    <Link href="tel:+47 402 20 414">+47 402 20 414</Link>
                  </dd>
                </div> */}
              </dl>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
