import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { Expandable } from '@/components/Expandable';
import { generateSlug } from '../pages/repertoar/[slug]';
import { getPerformerLink } from '../../utilities/getPerformerLink';

export function SongDetails({ isExpanded, expandedSongs, sang }) {
  const [repertoire, setRepertoire] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedArrangement, setSelectedArrangement] = useState('');

  const songSlug = generateSlug(sang.title, sang.composer); // Generate the slug using the song's title and composer

  useEffect(() => {
    fetch('/api/repertoire')
      .then((response) => response.json())
      .then((data) => {
        const sortedRepertoire = data.sort((a, b) => {
          // Custom sorting function considering the Norwegian alphabet
          const collator = new Intl.Collator('nb');
          return collator.compare(a.title, b.title);
        });
        setRepertoire(sortedRepertoire);
      })
      .catch((error) => console.log(error));
  }, []);

  // Filter function to apply selected filters
  const filterSongs = (song) => {
    if (selectedCategory && song.category !== selectedCategory) {
      return false;
    }
    if (selectedLanguage && !song.language.includes(selectedLanguage)) {
      return false;
    }
    if (
      selectedArrangement &&
      !song.arrangement.includes(selectedArrangement)
    ) {
      return false;
    }
    return true;
  };

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
      {expandedSongs.includes(sang.objectID) && (
        <tr>
          <td colSpan="5">
            <div
              id="expanded"
              className="grid w-full grid-cols-1 gap-0 p-4 md:grid-cols-2"
            >
              {/* Image on mobile */}
              <div
                aria-hidden="true"
                className="relative mt-2 overflow-hidden rounded-lg lg:hidden"
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
              <div>
                {/* audio player */}
                <div>
                  <div className="pb-6">
                    {sang.audio && (
                      <div className="pt-8 pb-0 mt-0">
                        <audio controls>
                          <source src={sang.audioUrl} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    )}
                    {sang.performers && (
                      <p className="max-w-lg pt-4 text-sm leading-7 text-amber-700">
                        «{sang.title}» av{' '}
                        <span>
                          {formatPerformersWithLinks(sang.performers)}
                        </span>
                        .
                      </p>
                    )}
                  </div>
                </div>
                <p className="max-w-lg text-sm leading-7 text-gray-600 ">
                  {sang.description.map((line) => (
                    <div className="mb-3" key={line}>
                      <p>{line}</p>
                    </div>
                  ))}
                </p>

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
                  {isExpanded ? (
                    <>
                      {sang.lyrics && (
                        <div className="p-8 overflow-hidden rounded-lg bg-amber-50/70 w-fit">
                          <p className="max-w-lg text-sm font-medium leading-7 text-gray-600 ">
                            {sang.lyrics.map((line, i) => (
                              <div className="mt-0" key={i}>
                                {line === '' ? <br /> : <p>{line}</p>}
                              </div>
                            ))}
                          </p>
                        </div>
                      )}
                    </>
                  ) : null}
                  <Link
                    href={`/repertoar/${songSlug}`}
                    className="text-sm font-semibold leading-6 transition-all duration-150 ease-in-out sm:hidden text-amber-700 hover:text-amber-600"
                  >
                    <button className="cursor-pointer">
                      Gå til sangsiden <span aria-hidden="true">→</span>
                    </button>
                  </Link>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="relative hidden pt-8 overflow-hidden rounded-lg lg:block"
              >
                <Image
                  src={sang.desktop}
                  alt={sang.title}
                  width={1456}
                  height={816}
                  className="object-cover object-center w-full overflow-hidden rounded-lg h-96"
                  unoptimized
                />
                <Link
                  href={`/repertoar/${songSlug}`}
                  className="flex justify-end text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-700 hover:text-amber-700"
                >
                  <button className="mt-6 cursor-pointer">
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
