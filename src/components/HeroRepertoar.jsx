import Image from 'next/image';
import Link from 'next/link';

export function HeroRepertoar() {
  return (
    <div className="bg-white ">
      <div className="relative overflow-hidden isolate pt-14">
        <Image
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1697230797/Sang%20i%20begravelse/Hero_Repertoire_v2_gbbcns.webp"
          alt="Roser"
          width={2400}
          height={1600}
          className="absolute inset-0 object-cover object-left-top w-full h-full sm:object-center-top -z-10"
        />
        <div className="absolute inset-0 sm:bg-white/30 bg-white/50" />

        <div
          className="absolute inset-x-0 z-10 overflow-hidden -top-40 transform-gpu blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="relative z-10 max-w-3xl py-16 sm:py-48">
          <div className="px-6 mx-auto text-left lg:px-8">
            <h6 className="hidden text-5xl text-slate-900 sm:block sm:text-6xl md:text-7xl">
              Repertoar
            </h6>
            <div className="flex items-center justify-center mt-10 gap-x-6"></div>
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
