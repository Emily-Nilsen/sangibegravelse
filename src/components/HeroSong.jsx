import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function HeroSong({ songImage, songTitle, imageAlignment }) {
  return (
    <div>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.7,
          type: 'fade',
        }}
        className="relative overflow-hidden pt-28 pb-28 isolate"
      >
        <Image
          src={songImage}
          alt={songTitle}
          width={1456}
          height={816}
          className="absolute inset-0 object-cover w-full h-full -z-10"
          style={{ objectPosition: imageAlignment }}
          priority
          unoptimized
        />

        {/* top white gradient */}
        <div className="absolute left-0 w-full h-40 -top-10 opacity-500 bg-gradient-to-b from-gray-900/50" />
        <div className="absolute top-0 left-0 w-full h-40 opacity-50 bg-gradient-to-b from-gray-900/50" />
        <div className="absolute bottom-0 left-0 w-full mb-10 overflow-visible opacity-70 h-36 bg-gradient-to-t from-white" />

        <div className="max-w-md py-32 mx-auto sm:max-w-2xl md:max-w-3xl sm:py-48 lg:py-56"></div>
      </motion.div>
    </div>
  );
}
