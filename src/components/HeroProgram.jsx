import Image from 'next/image';
import forslagDesktop from '../images/general/forslag-desktop.webp';
import forslagMobile from '../images/general/forslag-mobile.webp';

export function HeroProgram() {
  return (
    <div className="bg-amber-50">
      <div className="relative overflow-hidden pt-14 isolate">
        <Image
          src={forslagMobile}
          alt="Hvite roser"
          width={900}
          height={900}
          className="absolute inset-0 object-cover object-left w-full h-full sm:hidden -z-10"
          priority
        />
        <Image
          src={forslagDesktop}
          alt="Hvite roser"
          width={1920}
          height={1076}
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
