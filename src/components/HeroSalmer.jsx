import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import salmerDesktop from '../images/general/salmer-desktop.webp';
import salmerMobile from '../images/general/salmer-mobile.webp';

export function HeroSalmer() {
  return (
    <div className="bg-amber-50">
      <div className="relative overflow-hidden pt-14 isolate">
        <Image
          src={salmerMobile}
          alt="Hvite roser"
          width={816}
          height={816}
          className="absolute inset-0 object-cover object-left w-full h-full sm:hidden -z-10"
          priority
        />
        <Image
          src={salmerDesktop}
          alt="Hvite roser"
          width={1456}
          height={816}
          className="absolute inset-0 hidden object-cover w-full h-full sm:block -z-10"
          priority
        />
        <div className="absolute inset-0 sm:bg-white/30 bg-white/60" />
        <div
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="max-w-md py-32 mx-auto sm:max-w-2xl md:max-w-3xl sm:py-48 lg:py-56">
          <div className="relative z-10 text-center">
            <h6 className="text-5xl text-slate-950 sm:text-slate-900 sm:text-6xl lg:text-7xl">
              Salmer og fellessanger
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
