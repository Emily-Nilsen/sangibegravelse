import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import { ViolinIcon } from './icons/Violin';
import { SoloIcon } from './icons/Solo';
import { DuetIcon } from './icons/Duet';

// Utility function to get the arrangement icon
const getArrangementIcon = (arrangement, type, IconComponent) => {
  return arrangement.includes(type) ? (
    <span className="inline-flex items-center p-1.5 text-xs font-medium text-slate-700 rounded-full bg-slate-50 ring-1 ring-inset ring-slate-600/20">
      <IconComponent className="w-3 h-3 fill-slate-600" aria-hidden="true" />
    </span>
  ) : null;
};

export function SongPageDetails({
  songCategory,
  songTitle,
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
}) {
  return (
    <div className="relative pt-6 pb-24 overflow-hidden bg-white sm:pt-16 isolate sm:pb-32">
      <div className="px-6 mx-auto sm:-mt-12 max-w-7xl lg:px-8">
        {/* Song title and composers */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-slate-600">
            {songCategory}
          </p>
          <h6 className="mt-2 text-5xl tracking-tight text-gray-900 sm:text-6xl">
            {songTitle}
          </h6>
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: 'fade',
            }}
            className="mt-6 text-lg leading-8 text-gray-700 "
          >
            {songComposer}
          </motion.p>
          <div className="mt-3 text-gray-600 lg:hidden">
            <td className="pt-2 text-sm text-gray-500 sm:table-cell">
              <div className="flex space-x-1">
                {getArrangementIcon(songArrangement, 'solo', SoloIcon)}
                {getArrangementIcon(songArrangement, 'duett', DuetIcon)}
                {getArrangementIcon(songArrangement, 'fiolin', ViolinIcon)}
              </div>
            </td>
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
            {songPerformers && (
              <p className="max-w-lg pt-4 text-sm leading-7 text-gray-600">
                «{songTitle}» av{' '}
                <span className="font-medium">{songPerformers}</span>.
              </p>
            )}
          </>
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

                    <td className="pt-0 text-sm text-gray-500 sm:table-cell">
                      <div className="flex space-x-1">
                        {getArrangementIcon(songArrangement, 'solo', SoloIcon)}
                        {getArrangementIcon(songArrangement, 'duett', DuetIcon)}
                        {getArrangementIcon(
                          songArrangement,
                          'fiolin',
                          ViolinIcon
                        )}
                      </div>
                    </td>
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
          <div className="max-w-xl -mt-5 text-base leading-7 text-gray-700 lg:mt-6 lg:col-span-7">
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
            {/* Audio player and language */}
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="pt-6"
            >
              <p className="text-sm font-semibold text-gray-900">Språk</p>
              <p className="flex max-w-md gap-3 text-sm leading-7 text-gray-600">
                {songLanguage.map((line) => (
                  <div className="mt-3" key={line}>
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
                    <h6 className="pt-6 text-4xl text-gray-900">Tekst</h6>
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
            {/* Navigation back to repertoire and artists */}
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
              className="flex items-center mt-10 lg:mt-16 justify-left gap-x-6"
            >
              <Link
                href="/repertoar"
                className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 transition-all duration-150 ease-in-out cursor-pointer"
              >
                <button className="cursor-pointer">Se hele repertoaret</button>
              </Link>
              <Link
                href="#artister"
                className="text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-800 hover:text-slate-950"
              >
                <button className="cursor-pointer">
                  Artister <span aria-hidden="true">→</span>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
