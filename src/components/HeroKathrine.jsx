import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import KHHHeroDesktop from '../images/profiles/KHH-desktop.webp';
import KHHHeroMobile from '../images/profiles/KHH-mobile.webp';

export function HeroKathrine() {
  return (
    <div className="bg-slate-800">
      <div className="relative grid grid-cols-1 overflow-hidden isolate pt-14 sm:grid-cols-2">
        <Image
          src={KHHHeroMobile}
          alt="Kathrine Hvinden Hals"
          width={844}
          height={844}
          className="absolute inset-0 object-cover w-full h-full sm:hidden -z-10"
          priority
        />
        <Image
          src={KHHHeroDesktop}
          alt="Kathrine Hvinden Hals"
          width={1920}
          height={1080}
          className="absolute inset-0 hidden object-cover w-full h-full sm:block -z-10"
          priority
        />
        <div className="absolute left-0 w-full h-40 -top-10 opacity-500 bg-gradient-to-b from-gray-900/50" />
        <div className="absolute top-0 left-0 w-full h-40 opacity-50 bg-gradient-to-b from-gray-900/50" />
        <div className="max-w-md py-32 mx-auto sm:mr-12 sm:-ml-12 sm:col-start-2 sm:max-w-2xl md:max-w-3xl sm:py-48 lg:py-56 sm:mx-0">
          <div className="text-center sm:text-left">
            <h6 className="text-5xl text-white sm:text-slate-700 sm:text-6xl lg:text-7xl">
              Kathrine Hvinden Hals
            </h6>
            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="hidden max-w-xs px-10 mx-auto mt-6 leading-8 text-gray-600 sm:px-0 sm:max-w-lg sm:text-lg lg:max-w-xl sm:mx-0 sm:block"
            >
              Talentfull prisvinnende fiolinist med internasjonal erfaring.
            </motion.p>
            <div className="flex items-center justify-center mt-10 sm:justify-start gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-white/80 px-3.5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-all duration-150 ease-in-out hover:text-slate-900"
              >
                <span className="hidden sm:block">Se hele repertoaret</span>
                <span className="sm:hidden">Repertoar</span>
              </Link>
              <Link
                href="/artister"
                className="hidden text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-600 hover:text-slate-700 sm:block"
              >
                Tilbake til artister <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
}
