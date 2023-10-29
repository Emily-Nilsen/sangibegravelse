import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { ViolinIcon } from './icons/Violin';
import { SoloIcon } from './icons/Solo';
import { DuetIcon } from './icons/Duet';
import { getPerformerLink } from '../../utilities/getPerformerLink';
import { generateSlug } from '../pages/repertoar/[slug]';

// Utility function to get the arrangement icon
const getArrangementIcon = (arrangement, type, IconComponent) => {
  return arrangement.includes(type) ? (
    <span className="inline-flex items-center p-1.5 text-xs font-medium text-slate-700 rounded-full bg-slate-50 ring-1 ring-inset ring-slate-600/20">
      <IconComponent className="w-3 h-3 fill-slate-600" aria-hidden="true" />
    </span>
  ) : null;
};

export function PaginationSection({ prevSong, nextSong }) {
  return (
    <div className="flex w-full gap-3 sm:gap-6 sm:justify-between sm:flex-row">
      <div className="relative flex w-full">
        {prevSong && (
          <Link
            href={`/repertoar/${generateSlug(
              prevSong.title,
              prevSong.composer
            )}`}
            className="font-medium text-amber-700 rounded-md pr-2 py-2.5 flex-auto items-stretch transition-all duration-300 ease-in-out hover:underline cursor-pointer"
          >
            <div className="flex items-start ">
              <div className="flex-none -ml-1.5 sm:ml-0 ">
                <ChevronLeftIcon className="w-5 h-auto mt-0.5 mr-2 text-amber-700" />
              </div>
              <div className="flex-1 pr-2">{prevSong.title}</div>
            </div>
          </Link>
        )}
      </div>
      <div className="flex justify-end w-full ">
        {nextSong && (
          <Link
            href={`/repertoar/${generateSlug(
              nextSong.title,
              nextSong.composer
            )}`}
            className="font-medium text-amber-700 rounded-md pl-2 py-2.5 flex-auto items-stretch transition-all duration-300 ease-in-out hover:underline cursor-pointer"
          >
            <div className="flex items-start">
              <div className="flex-1 pl-2 text-right">{nextSong.title}</div>
              <div className="flex-none -mr-1.5 sm:mr-0">
                <ChevronRightIcon className="w-5 h-auto mt-0.5 ml-2 text-amber-700" />
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export function SongPageDetails({
  songCategory,
  songTitle,
  songHyphen,
  songComposer,
  songArrangement,
  songImage,
  songDescription,
  songVideo,
  songLyrics,
  songLanguage,
  songAudio,
  songAudioUrl,
  songPerformers,
  nextSong,
  prevSong,
}) {
  const hyphenClass = songHyphen ? 'hyphens-auto' : 'hyphens-none';

  return (
    <div className="relative pt-6 pb-24 -mt-16 overflow-hidden bg-white sm:pt-16 isolate sm:pb-32 sm:-mt-20">
      <div className="px-6 mx-auto overflow-hidden -mt-7 max-w-7xl lg:px-8 sm:-mt-16">
        {/* Song title and composers */}
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
          <p className="text-sm font-semibold leading-8 tracking-tight sm:text-lg text-slate-600">
            {songCategory}
          </p>
          <h6
            className={`mt-2 text-4xl text-gray-900 sm:text-6xl ${hyphenClass}`}
          >
            {songTitle}
          </h6>
          <motion.div
            className="flex flex-col w-full mt-3 sm:mt-6 sm:justify-between sm:flex-row"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: 'fade',
            }}
          >
            {' '}
            <p className="text-base leading-8 text-gray-700 sm:text-lg">
              {songComposer}
            </p>
            {/* Pagination Section */}
            <div className="hidden w-full max-w-lg -mt-2 sm:pl-8 lg:block">
              <PaginationSection prevSong={prevSong} nextSong={nextSong} />
            </div>
          </motion.div>
          <div className="mt-1 text-gray-600 sm:mt-3 lg:hidden">
            <div className="pt-2 text-sm text-gray-500 sm:table-cell">
              <div className="flex space-x-1">
                {getArrangementIcon(songArrangement, 'solo', SoloIcon)}
                {getArrangementIcon(songArrangement, 'duett', DuetIcon)}
                {getArrangementIcon(songArrangement, 'fiolin', ViolinIcon)}
              </div>
            </div>
          </div>
          {/* Audio player */}
          <>
            {songAudio && (
              <div className="mt-6">
                <audio controls>
                  <source src={songAudioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
            {Array.isArray(songPerformers) && songPerformers.length > 0 && (
              <p className="max-w-lg pt-4 text-sm leading-7 text-slate-700">
                «{songTitle}» av{' '}
                <span>
                  {songPerformers.reduce((acc, performer, i, arr) => {
                    const link = getPerformerLink(performer);
                    if (i === 0)
                      return (
                        <Link
                          href={link}
                          className="font-semibold transition-all duration-300 ease-in-out cursor-pointer hover:text-slate-800"
                        >
                          {performer}
                        </Link>
                      );
                    if (i === arr.length - 1)
                      return (
                        <>
                          {acc} og{' '}
                          <Link
                            href={link}
                            className="font-semibold transition-all duration-300 ease-in-out cursor-pointer hover:text-slate-800"
                          >
                            {performer}
                          </Link>
                        </>
                      );
                    return (
                      <>
                        {acc},{' '}
                        <Link
                          href={link}
                          className="font-semibold transition-all duration-300 ease-in-out cursor-pointer hover:text-slate-800"
                        >
                          {performer}
                        </Link>
                      </>
                    );
                  }, '')}
                </span>
                .
              </p>
            )}
          </>
          <div className="max-w-xl mt-3 mb-8 lg:hidden">
            <PaginationSection prevSong={prevSong} nextSong={nextSong} />
          </div>
        </div>

        {/* Song lyrics desktop */}
        <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
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
            className="relative hidden lg:order-last lg:col-span-5 lg:block"
          >
            <figure className="pl-8 border-l border-slate-600">
              <figcaption className="flex mb-8 gap-x-4">
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">Tekst</div>
                  <div className="flex items-center gap-3">
                    <p className="text-gray-600">Arrangement: </p>

                    <div className="pt-0 text-sm text-gray-500 sm:table-cell">
                      <div className="flex space-x-1">
                        {getArrangementIcon(songArrangement, 'solo', SoloIcon)}
                        {getArrangementIcon(songArrangement, 'duett', DuetIcon)}
                        {getArrangementIcon(
                          songArrangement,
                          'fiolin',
                          ViolinIcon
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </figcaption>
              <blockquote className="text-lg font-medium leading-8 tracking-tight text-slate-600">
                <p>
                  {songLyrics && (
                    <div>
                      <p className="">
                        {songLyrics.map((line, i) => (
                          <div className="mt-0" key={i}>
                            {line === '' ? <br /> : <p>{line}</p>}
                          </div>
                        ))}
                      </p>
                    </div>
                  )}
                </p>
              </blockquote>
            </figure>
          </motion.div>
          {/* Song description */}
          <div className="max-w-xl -mt-5 text-base leading-7 text-gray-700 lg:mt-0 lg:col-span-7">
            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
            >
              {songDescription.map((line) => (
                <div className="mb-6" key={line}>
                  <p>{line}</p>
                </div>
              ))}
            </motion.p>
            {/* Bottom three links */}
            <div className="flex flex-col space-y-12">
              {/* Audio player and language */}
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: 'fade',
                }}
                className="flex items-center pt-6 gap-x-3"
              >
                <p className="text-sm font-semibold text-gray-900">Språk</p>
                <p className="flex max-w-md text-sm leading-7 text-gray-600">
                  {songLanguage.map((line) => (
                    <div className="mt-0 mr-3" key={line}>
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-slate-700 bg-slate-50 ring-1 ring-inset ring-slate-600/20">
                        {line}
                      </span>
                    </div>
                  ))}
                </p>
              </motion.div>
              {/* Song lyrics mobile */}
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
                className="relative mt-12 border-t lg:hidden border-gray-900/10"
              >
                <figure>
                  <figcaption className="flex mb-8 gap-x-4">
                    <div className="text-sm leading-6">
                      <h6
                        className={`pt-6 text-4xl text-gray-900 ${hyphenClass}`}
                      >
                        {songTitle}
                      </h6>
                    </div>
                  </figcaption>
                  <blockquote className="text-lg font-medium leading-8 tracking-tight text-slate-600">
                    <p>
                      {songLyrics && (
                        <div>
                          <p className="">
                            {songLyrics.map((line, i) => (
                              <div className="mt-0" key={i}>
                                {line === '' ? <br /> : <p>{line}</p>}
                              </div>
                            ))}
                          </p>
                        </div>
                      )}
                    </p>
                  </blockquote>
                </figure>
              </motion.div>
              {/* Pagination Section */}
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
                className="my-0"
              >
                <PaginationSection prevSong={prevSong} nextSong={nextSong} />
              </motion.div>
              {/* Navigation back to repertoire and artists */}
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{
                  opacity: 0,
                }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: 'fade',
                }}
                className="flex items-center bg-red-100 sm:justify-left sm:justify-stretch gap-x-6"
              >
                <Link
                  href="/repertoar"
                  className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-all duration-150 ease-in-out cursor-pointer border border-amber-600 flex-auto text-center"
                >
                  <button className="cursor-pointer">
                    Se hele repertoaret
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
