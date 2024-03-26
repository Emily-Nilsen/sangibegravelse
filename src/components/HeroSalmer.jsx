import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function HeroSalmer() {
  return (
    <div className="bg-amber-50">
      <div className="relative overflow-hidden pt-14 isolate">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/Salmer_ylykay.webp"
          alt="Hvite roser"
          width={2176}
          height={3264}
          className="absolute inset-0 object-cover object-left w-full h-full sm:hidden -z-10"
          priority
          unoptimized
        />
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/Salmer_ylykay.webp"
          alt="Hvite roser"
          width={3000}
          height={1681}
          className="absolute inset-0 hidden object-cover w-full h-full sm:block -z-10"
          priority
          unoptimized
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
            {/* <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="max-w-xs px-10 mx-auto mt-6 leading-8 sm:text-slate-800 text-slate-900 sm:px-0 sm:max-w-lg sm:text-lg lg:max-w-xl"
            >
              Vår talentfulle gruppe av erfarne og lidenskapelige artister,
              dedikert til å skape minneverdige musikalske opplevelser av høy
              kvalitet.
            </motion.p> */}
            {/* <div className="flex items-center justify-center mt-10 gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-white/70 px-3.5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-all duration-150 ease-in-out hover:text-slate-950"
              >
                Repertoar
              </Link>
              <Link
                href="/artister"
                className="text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-800 hover:text-slate-950"
              >
                Artister <span aria-hidden="true">→</span>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
