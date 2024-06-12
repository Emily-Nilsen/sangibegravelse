import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

export function NilsGeorg() {
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
            Nils Georg Nilsen
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
            {/* Sangeren Nils Georg Nilsen er en imponerende artist med en
            mangfoldig karriere. */}
            En ettertraktet stemme som når rett inn i hjertet.
            
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
                  “He possesses an attractive, lyrical tenor voice, with an
                  exceptional clarity, and distinct and expressive timbre.”
                </p>
              </blockquote>
              <figcaption className="flex mt-8 gap-x-4">
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">John Lidal</div>
                  <div className="text-gray-600">
                    Den Norske Opera & Ballett, Oslo
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
              Nils Georg Nilsen er kjent for sin varme og kraftfulle sangstemme. Han har et stort spekter i dynamiske forskjeller som gjør at han favner et bredt repertoar med en god sjangerforståelse. Alt fra vise og pop til Sinatra og opera.
            </motion.p>

            {/* <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="mt-8"
            >
              Nils Georg har deltatt på festivaler og konserter både i Norge og
              internasjonalt, inkludert Málaga Clásica. Han er også professor i
              sang ved Galamian Academy of Classical Music i Málaga, Spania.
            </motion.p> */}

            

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
              Han har lang erfaring med sang i begravelser og synger i den anerkjente tenorgruppen, Nordic Tenors. I tillegg hyres han ofte inn som solist og har sunget konserter over hele verden og vært solist med bl.a Chicago Symphony Ochestra og vært med i en rekke oppsetninger. 
            </motion.p>
            <motion.figure whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }} className="mt-10 border-l border-slate-400 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
              «Jeg elsker å synge i begravelser, spesielt fordi jeg ser hvordan sangen berører mennesker i en sårbar situasjon. Musikken skaper varme og samhold»
              </p>
            </blockquote>
            <figcaption className="flex mt-6 gap-x-4">
              <Image
                className="flex-none w-6 h-6 rounded-full bg-gray-50"
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/w_100,h_100,q_auto/Nils%20Georg/general/about-profile-img_z38xiz.jpg"
                alt="Nils Georg Nilsen"
                width={485}
                height={485}
              />
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">Nils Georg Nilsen</strong> 
              </div>
            </figcaption>
          </motion.figure>
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
                href="https://www.nilsnilsentenor.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-600 hover:text-slate-950"
              >
                nilsnilsentenor.com <span aria-hidden="true">→</span>
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
                Kontakt Nils Georg
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
        </div>
      </div>
    </div>
  );
}
