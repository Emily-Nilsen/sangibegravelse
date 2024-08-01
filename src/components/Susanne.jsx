import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

export function Susanne() {
  return (
    <div className="relative py-24 overflow-hidden bg-white isolate sm:py-32">
      {/* <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
        />
      </div> */}
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-slate-600">
            Sangeren
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Susanne Hvinden Hals
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
            Susanne er kjent for sin vakre og fyldige stemme.
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
                  “Susanne har et dejligt stemmemateriale og en fin musikalitet
                  og besidder derudover et meget stort dramatsik potentiale.
                  Hendes sceniske sans for timing er veludviklet og natrulig.”
                </p>
              </blockquote>
              <figcaption className="flex mt-8 gap-x-4">
                {/* <img
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="flex-none w-10 h-10 mt-1 rounded-full bg-gray-50"
                /> */}
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">Idil Alpsøy</div>
                  <div className="text-gray-600">
                    Operasangerinne, København
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
              Med god forståelse for forskjellige sjangre omfavner hun alt av
              repertoar fra kjente populær- sanger og viser til rock og opera.
              Susanne er en ettertraktet solist i gravferder og gjør alt for å
              tilfredsstille kundens ønsker.
            </motion.p>
            {/* <ul role="list" className="max-w-xl mt-8 space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CloudArrowUpIcon
                  className="flex-none w-5 h-5 mt-1 text-slate-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Push to deploy.
                  </strong>{' '}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </span>
              </li>
              <li className="flex gap-x-3">
                <LockClosedIcon
                  className="flex-none w-5 h-5 mt-1 text-slate-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    SSL certificates.
                  </strong>{' '}
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon
                  className="flex-none w-5 h-5 mt-1 text-slate-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Database backups.
                  </strong>{' '}
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </span>
              </li>
            </ul> */}
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
              Susanne synger ofte med orkestre og blir hyret inn til konserter i
              inn og utland. Sammen med sin søster, fiolinisten Kathrine Hvinden
              Hals, har de skapt den populære duoen Søstrene Hals.
            </motion.p>
            {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              No server? No problem.
            </h2> */}
            {/* <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="mt-6"
            >
              Susanne er høyt ettertraktet som sanger i Norge på grunn av sine
              faglige sangferdigheter. Hun har samarbeidet med ulike orkestre i
              fremførelser av oratorier og har opptrådt på nasjonale og
              internasjonale festivaler og konserter, inkludert Málaga Clásica i
              Spania. Med sin lidenskap for musikk og en imponerende stemme
              fortsetter Susanne Hvinden Hals å fortrylle publikum over hele
              verden.
            </motion.p> */}
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="mt-12 -mb-0"
            >
              <Link
                href="https://www.susannehals.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-600 hover:text-slate-950"
              >
                susannehals.com <span aria-hidden="true">→</span>
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
              className="my-6 mb-16"
            >
              <Link
                href="https://www.sostrenehals.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-600 hover:text-slate-950"
              >
                sostrenehals.com <span aria-hidden="true">→</span>
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
                Kontakt Susanne
              </h3>
              <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <Link
                      className="font-semibold text-slate-600"
                      href="mailto:susannehvinden@gmail.com"
                    >
                      susannehvinden@gmail.com
                    </Link>
                  </dd>
                </div>
                <div className="mt-1">
                  <dt className="sr-only">Phone number</dt>
                  <dd>
                    {' '}
                    <Link href="tel:+47 155 06 256">+47 155 06 256</Link>
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
