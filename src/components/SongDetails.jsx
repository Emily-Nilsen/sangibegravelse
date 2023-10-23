import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { Expandable } from '@/components/Expandable';
import { generateSlug } from '../pages/repertoar/[slug]';

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

  return (
    <>
      {expandedSongs.includes(sang.objectID) && (
        <tr>
          <td colSpan="5">
            <div
              id="expanded"
              className="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2"
            >
              {/* Image on mobile */}
              <div
                aria-hidden="true"
                className="relative my-2 overflow-hidden rounded-lg lg:hidden"
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
              <div className="p-3">
                {/* audio player */}
                <div>
                  <div className="pb-6">
                    {sang.audio && (
                      <div className="pb-0 mt-0">
                        <audio controls>
                          <source src={sang.audioUrl} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    )}
                    {sang.performers && (
                      <p className="max-w-lg pt-4 text-sm leading-7 text-gray-600">
                        «{sang.title}» av {sang.performers}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center mb-10 gap-x-3">
                    <p className="text-sm font-semibold text-gray-900">
                      Sang språk
                    </p>
                    <p className="flex max-w-md gap-3 text-sm leading-7 text-gray-600">
                      {sang.language.map((line) => (
                        <div className="mt-0" key={line}>
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-slate-700 bg-slate-50 ring-1 ring-inset ring-slate-600/20">
                            {line}
                          </span>
                        </div>
                      ))}
                    </p>
                  </div>
                </div>
                <p className="max-w-lg text-sm leading-7 text-gray-600 ">
                  {sang.description.map((line) => (
                    <div className="mt-3" key={line}>
                      <p>{line}</p>
                    </div>
                  ))}
                </p>
                <div className="flex flex-col mt-10">
                  <Link
                    href={`/repertoar/${songSlug}`}
                    className="text-sm font-semibold leading-6 transition-all duration-150 ease-in-out text-slate-800 hover:text-amber-600"
                  >
                    <button className="cursor-pointer">
                      Gå til sangsiden <span aria-hidden="true">→</span>
                    </button>
                  </Link>
                  <div className="mt-8 text-gray-700 lg:mb-3">
                    {sang.lyrics && (
                      <span>
                        <Expandable.Button>
                          <p className="">Tekst</p>
                        </Expandable.Button>
                      </span>
                    )}
                  </div>
                  <div>
                    {/* Added Link to dynamic song page using the generated slug */}
                  </div>
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
              </div>

              <div
                aria-hidden="true"
                className="relative hidden overflow-hidden rounded-lg lg:block"
              >
                <Image
                  src={sang.desktop}
                  alt={sang.title}
                  width={1456}
                  height={816}
                  className="object-cover object-center w-full overflow-hidden rounded-lg h-96"
                  unoptimized
                />
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
