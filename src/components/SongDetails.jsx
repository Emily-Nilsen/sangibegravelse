import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Expandable } from '@/components/Expandable';
import { getPerformerLink } from '../../utilities/getPerformerLink';
import { AudioPlayer } from './AudioPlayer';
import { SpotifyPlayer } from './SpotifyPlayer';
import { generateSlug } from '../utils/generateSlug'; // Import generateSlug

export function SongDetails({ isExpanded, sang }) {
  const songSlug = generateSlug(sang.title, sang.composer); // Generate the slug using the song's title and composer

  // Format languages
  const formatLanguages = (languages) => {
    if (languages.length === 1) return languages[0];
    if (languages.length === 2) return `${languages[0]} og ${languages[1]}`;
    return languages.slice(0, -1).join(', ') + ' og ' + languages.slice(-1);
  };

  // Format performers
  const formatPerformers = (performers) => {
    if (performers.length === 1) return performers[0];
    if (performers.length === 2) return `${performers[0]} og ${performers[1]}`;
    return performers.slice(0, -1).join(', ') + ' og ' + performers.slice(-1);
  };

  // Format performers with clickable links
  const formatPerformersWithLinks = (performers) => {
    return performers.map((performer, index, array) => {
      const separator =
        index === array.length - 1
          ? ''
          : index === array.length - 2
          ? ' og '
          : ', ';
      const link = getPerformerLink(performer);
      return (
        <span key={performer}>
          <Link
            href={link}
            className="font-semibold transition duration-300 ease-in-out cursor-pointer hover:text-amber-800"
          >
            {performer}
          </Link>
          {separator}
        </span>
      );
    });
  };

  return (
    <>
      {isExpanded && (
        <tr>
          <td colSpan="5">
            <div
              id="expanded"
              className="grid w-full grid-cols-1 gap-0 p-0 md:grid-cols-2"
            >
              {/* Image on mobile */}
              <div
                aria-hidden="true"
                className="relative mt-0 overflow-hidden rounded-none lg:hidden"
              >
                <Image
                  src={sang.mobile}
                  alt={sang.title}
                  width={640}
                  height={359}
                  className="object-cover object-center w-full h-64"
                  unoptimized
                />
              </div>
              <div className="p-6">
                {/* audio player */}
                {sang.audio && (
                  <div className="relative z-10 mb-8 -mt-9 lg:hidden">
                    <AudioPlayer
                      audio={sang.audio}
                      audioUrl={sang.audioUrl}
                      title={sang.title}
                      performers={sang.performers}
                      live={sang.live}
                    />
                  </div>
                )}
                <div className="max-w-lg text-sm leading-7 text-gray-600 ">
                  {sang.description.map((line, index) => (
                    <div className="mb-3" key={index}>
                      <p>{line}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col mt-8 mb-4 space-y-6">
                  <div className="text-gray-700">
                    {sang.lyrics && (
                      <span>
                        <Expandable.Button>
                          <p className="">
                            Tekst på {formatLanguages(sang.language)}
                          </p>
                        </Expandable.Button>
                      </span>
                    )}
                  </div>
                  {isExpanded && sang.lyrics && (
                    <div className="p-8 overflow-hidden rounded-lg bg-amber-50/70 w-fit">
                      <div className="max-w-lg text-sm font-medium leading-7 text-gray-600 ">
                        {sang.lyrics.map((line, i) => (
                          <div className="mt-0" key={i}>
                            {line === '' ? <br /> : <p>{line}</p>}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <Link
                    href={`/repertoar/${songSlug}`}
                    className="text-sm font-semibold leading-6 transition-all duration-150 ease-in-out sm:hidden text-amber-700 hover:text-amber-600"
                  >
                    <button className="cursor-pointer">
                      Gå til sangsiden <span aria-hidden="true">→</span>
                    </button>
                  </Link>
                </div>
                {/* Spotify player */}
                <div className="mt-10 sm:mt-12">
                  {sang.spotify && (
                    <SpotifyPlayer spotifyUri={sang.spotifyUrl} />
                  )}
                </div>
              </div>{' '}
              <div
                aria-hidden="true"
                className="relative hidden px-3 pt-6 overflow-hidden rounded-lg lg:block"
              >
                <div
                  className={`shadow-lg rounded-xl shadow-gray-300/30 ring-1 ring-gray-200/30 ${
                    sang.audio ? 'pb-6' : 'pb-0'
                  }`}
                >
                  <Image
                    src={sang.desktop}
                    alt={sang.title}
                    width={1456}
                    height={816}
                    className={`object-cover object-center w-full overflow-hidden ${
                      sang.audio ? 'rounded-t-xl' : 'rounded-t-xl rounded-b-xl'
                    } h-96`}
                    unoptimized
                  />
                  {sang.audio && (
                    <div className="px-6 mt-8 mb-2">
                      <AudioPlayer
                        audio={sang.audio}
                        audioUrl={sang.audioUrl}
                        title={sang.title}
                        performers={sang.performers}
                        live={sang.live}
                      />
                    </div>
                  )}
                </div>

                <Link
                  href={`/repertoar/${songSlug}`}
                  className="flex justify-end mt-6 mb-10 text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-700 hover:text-amber-700"
                >
                  <button className="pr-6 cursor-pointer">
                    Gå til sangsiden <span aria-hidden="true">→</span>
                  </button>
                </Link>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
