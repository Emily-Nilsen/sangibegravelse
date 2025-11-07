import Image from 'next/image';
import { motion } from 'framer-motion';

import PetterPortrait from '../images/profiles/PV-samples.webp';

export function PetterVermeli() {
  return (
    <div className="relative pt-24 pb-16 overflow-hidden bg-white isolate sm:py-32">
      <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      ></div>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-slate-600">
            Sangeren
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Petter Vermeli
          </h1>
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 1, type: 'fade' }}
            className="mt-6 text-xl leading-8 text-gray-700"
          >
            Petter Vermeli er en erfaren skuespiller og sanger med en rekke
            store musikalroller i banken.
          </motion.p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ delay: 0.5, duration: 1, type: 'fade' }}
            className="relative lg:order-last lg:col-span-5"
          >
            <figure className="pl-8 border-l border-slate-600">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>
                  «Petter er ryddig i kommunikasjonen, godt forberedt og har fin
                  fremtoning og gode fremførelser i seremonier. Han har i
                  tillegg et veldig stort spekter av repertoar og synger både
                  mektige store ballader og helt nedpå viser med stor innlevelse
                  som rører de som hører på.»
                </p>
              </blockquote>
              <figcaption className="flex mt-8 gap-x-4">
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">
                    André Klausen
                  </div>
                  <div className="text-gray-600">
                    Klemmetsby-Firing begravelsesbyrå
                  </div>
                </div>
              </figcaption>
            </figure>
          </motion.div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 1, type: 'fade' }}
            >
              Petter er utdannet fra Statens Teaterhøgskole (KhiO) og Bårdar
              Akademiet og har jobbet profesjonelt som skuespiller og sanger
              siden 2014. Han har gjort flere store musikalroller hos både Oslo
              Nye Teater, Nationaltheatret, Det Norske Teatret og Folketeateret.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.6, duration: 1, type: 'fade' }}
              className="mt-6"
            >
              Han har lang erfaring som solist for kor og orkestre og har
              gjennom årene sunget i flere titalls begravelser i både Oslo,
              Bærum, Asker, Hokksund, Sandefjord og Tønsberg. Petter har også
              vært solist for både Vestfold og Kristiansand symfoniorkester og
              tolker alt fra viser og pop til de største musikallåtene.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.7, duration: 1, type: 'fade' }}
              className="mt-6"
            >
              Med bred erfaring fra teater, film, TV, begravelser, bryllup og
              event er Petter vant til å lære nye verk på kort varsel og tar
              gjerne imot spesielle ønsker. Han leser også gjerne opp tekster
              eller dikt dersom man ønsker dette i tillegg til eller i stedet
              for sang.
            </motion.p>
            <motion.figure
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.8, duration: 1, type: 'fade' }}
              className="mt-10 border-l border-slate-400 pl-9"
            >
              <blockquote className="font-semibold text-gray-900">
                <p>
                  «Å få synge i begravelser gir meg stor glede. Det å kunne være
                  med å forhåpentligvis kunne varme og berøre mennesker i en
                  vanskelig og trist situasjon, betyr veldig mye for meg.»
                </p>
              </blockquote>
              <figcaption className="flex mt-6 gap-x-4">
                <Image
                  className="flex-none object-cover w-6 h-6 rounded-full bg-gray-50"
                  src={PetterPortrait}
                  alt="Petter Vermeli"
                  width={485}
                  height={485}
                  placeholder="blur"
                />
                <div className="text-sm leading-6">
                  <strong className="font-semibold text-gray-900">
                    Petter Vermeli
                  </strong>
                </div>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </div>
    </div>
  );
}
