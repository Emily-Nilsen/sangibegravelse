import Image from 'next/image';
import Link from 'next/link';
import aboutBg from '../images/general/about-bg.webp';
import aboutDesktop from '../images/general/about-desktop.webp';
import aboutMobile from '../images/general/about-mobile.webp';

export function HeroAbout() {
  return (
    <div className="relative z-0 py-24 overflow-hidden bg-slate-50 lg:pt-48 sm:py-32 sm:pt-40 pt-36">
      <div className="absolute inset-0 z-0">
        <Image
          src={aboutBg}
          alt="Susan Hvinden Hals and Nils Georg Nilsen"
          className="object-cover w-full h-full opacity-40"
          width={1920}
          height={1280}
          placeholder="blur"
          priority
        />
      </div>
      <div className="relative z-10 px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h6 className="mt-2 text-5xl text-slate-950 sm:text-slate-900 sm:text-6xl lg:text-7xl">
                Sang i begravelse
              </h6>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Sang i begravelse er en hjemmeside som er laget for å gjøre det
                enklere å velge musikk til begravelser.
              </p>
              <div className="hidden mt-8 sm:block">
                <div className="flex items-center justify-start mt-10 gap-x-6">
                  <Link
                    href="/"
                    className="rounded-md bg-white/70 px-3.5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-all duration-150 ease-in-out hover:text-slate-950"
                  >
                    Repertoar
                  </Link>
                  <Link
                    href="/programforslag"
                    className="text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-800 hover:text-slate-950"
                  >
                    Forslag til program <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <figure className="hidden pl-8 mt-16 border-l text-slate-600 border-slate-300 sm:block">
                <blockquote className="text-base leading-7">
                  <p>“Hvor ord svikter, taler musikken.”</p>
                </blockquote>
                <figcaption className="flex mt-6 text-sm leading-6 gap-x-4">
                  <div>
                    <span className="font-semibold text-gray-900">
                      H.C. Andersen
                    </span>{' '}
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <Image
            src={aboutDesktop}
            alt="Susan Hvinden Hals and Nils Georg Nilsen"
            className="hidden sm:block max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
            width={1920}
            height={1080}
            priority
            placeholder="blur"
          />
          <Image
            src={aboutMobile}
            alt="Susan Hvinden Hals and Nils Georg Nilsen"
            className="sm:hidden w-[24rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 object-center"
            width={900}
            height={900}
            priority
            placeholder="blur"
          />
          <div className="mt-0 sm:hidden">
            <div className="flex items-center justify-start mt-3 gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-white/70 px-3.5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-all duration-150 ease-in-out hover:text-slate-950"
              >
                Repertoar
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-800 hover:text-slate-950"
              >
                Forslag til program <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <figure className="pl-8 mt-0 border-l sm:hidden text-slate-600 border-slate-300">
            <blockquote className="text-base leading-7">
              <p>“Hvor ord svikter, taler musikken.”</p>
            </blockquote>
            <figcaption className="flex mt-6 text-sm leading-6 gap-x-4">
              <div>
                <span className="font-semibold text-gray-900">
                  H.C. Andersen
                </span>{' '}
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
