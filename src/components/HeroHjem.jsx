import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import heroMobile from '../images/general/homepage-mobile.webp';
import heroDesktop from '../images/general/homepage-desktop.webp';

export function HeroHjem() {
  return (
    <div className="bg-amber-100">
      <div className="relative overflow-hidden isolate pt-14">
        <Image
          src={heroMobile}
          alt="Hvite roser"
          width={750}
          height={1125}
          className="absolute inset-0 object-cover object-left w-full h-full sm:hidden -z-10"
          priority
          placeholder="blur"
        />
        <Image
          src={heroDesktop}
          alt="Hvite roser"
          width={1920}
          height={1076}
          className="absolute inset-0 hidden object-cover w-full h-full sm:block -z-10"
          priority
          placeholder="blur"
        />
        <div className="absolute inset-0 sm:bg-white/30 bg-white/60" />
        <div
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="max-w-md py-32 mx-auto sm:max-w-2xl md:max-w-3xl sm:py-48 lg:py-56">
          <div className="relative z-10 text-center">
            <h6 className="text-5xl text-slate-950 sm:text-slate-900 sm:text-6xl lg:text-7xl">
              Sang i begravelse
            </h6>
            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="max-w-xs px-10 mx-auto mt-6 leading-8 sm:text-slate-800 text-slate-900 sm:px-0 sm:max-w-lg sm:text-lg lg:max-w-xl"
            >
              Vår side er utviklet som et bidrag til pårørende for å finne og
              velge riktig musikk til begravelser.
            </motion.p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <Link
                href="/artister"
                className="rounded-md bg-white/70 px-3.5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-all duration-150 ease-in-out hover:text-slate-950 cursor-pointer"
              >
                <button className="cursor-pointer">Artister</button>
              </Link>
              <Link
                href="/salmer"
                className="text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-800 hover:text-slate-950"
              >
                <button className="cursor-pointer">
                  Salmer og fellessanger <span aria-hidden="true">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
