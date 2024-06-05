import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function HeroProgram() {
  return (
    <div className="bg-amber-50">
      <div className="relative overflow-hidden pt-14 isolate">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/roses_2_adjusted_yqmvx0.webp"
          alt="Hvite roser"
          width={2176}
          height={3264}
          className="absolute inset-0 object-cover object-left w-full h-full sm:hidden -z-10"
          priority
        />
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/roses_2_adjusted_yqmvx0.webp"
          alt="Hvite roser"
          width={3000}
          height={1681}
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
              Forslag til program
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
