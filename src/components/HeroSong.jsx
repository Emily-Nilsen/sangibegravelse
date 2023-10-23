import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function HeroSong({ songImage, songTitle, imageAlignment }) {
  return (
    <div>
      <div className="relative overflow-hidden pb-44 pt-44 isolate">
        <Image
          src={songImage}
          alt={songTitle}
          width={1456}
          height={1000}
          className={`absolute inset-0 object-cover w-full h-full -z-10 object-${imageAlignment}`}
          priority
          unoptimized
        />
        {/* top white gradient */}
        <div className="absolute left-0 w-full h-40 -top-10 opacity-500 bg-gradient-to-b from-gray-900/50" />
        <div className="absolute top-0 left-0 w-full h-40 opacity-50 bg-gradient-to-b from-gray-900/50" />
        <div className="absolute bottom-0 left-0 w-full h-40 overflow-visible bg-gradient-to-t from-white" />

        <div className="max-w-md py-32 mx-auto sm:max-w-2xl md:max-w-3xl sm:py-48 lg:py-56"></div>
      </div>
    </div>
  );
}
