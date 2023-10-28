import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Testimonial() {
  return (
    <div className="py-16 bg-white sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{
            opacity: 0,
            y: 50,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
            type: 'fade',
          }}
          className="relative px-6 py-20 overflow-hidden bg-gray-900 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20"
        >
          <Image
            className="absolute inset-0 object-cover w-full h-full"
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/testimonial_bg_lrvmc9.webp"
            alt="hvite roser"
            width={2000}
            height={1121}
          />
          <div className="absolute inset-0 bg-white/50" />

          <div className="relative max-w-2xl mx-auto lg:mx-0">
            <figure>
              <blockquote className="mt-6 text-lg font-semibold text-slate-950 sm:text-xl sm:leading-8">
                <p>
                  “Kjære Nils Georg, ja, som Tante Ragny ofte sier, «det kunne
                  ikke vært finere!». Alle var så imponerte over dere - det ble
                  så minnerik, og vi er så takknemlig!”
                </p>
              </blockquote>
              <figcaption className="mt-6 text-base text-slate-800">
                <div className="font-semibold">Tina</div>
                <div className="mt-1">Frognerseteren</div>
              </figcaption>
            </figure>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{
            opacity: 0,
            y: 50,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
            type: 'fade',
          }}
          className="flex justify-end w-full"
        ></motion.div>
      </div>
    </div>
  );
}
