import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { Expandable } from '@/components/Expandable';
import { ViolinIcon } from './icons/Violin';
import { SoloIcon } from './icons/Solo';
import { DuetIcon } from './icons/Duet';

export function SongDetails({ isExpanded, expandedSongs, sang }) {
  const [repertoire, setRepertoire] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedArrangement, setSelectedArrangement] = useState('');

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

  // Event handlers for category and arrangement selection
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleArrangementChange = (event) => {
    setSelectedArrangement(event.target.value);
  };

  // const [expandedSongs, setExpandedSongs] = useState([]);

  const toggleSong = (songId) => {
    setExpandedSongs((prevExpandedSongs) => {
      if (prevExpandedSongs.includes(songId)) {
        return prevExpandedSongs.filter((id) => id !== songId);
      } else {
        return [...prevExpandedSongs, songId];
      }
    });
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
              <div className="p-3">
                <p className="max-w-lg text-sm leading-7 text-gray-600 ">
                  {sang.description.map((line) => (
                    <div className="mt-3" key={line}>
                      <p>{line}</p>
                    </div>
                  ))}
                </p>
                <div className="text-gray-700">
                  {sang.lyrics && (
                    <span>
                      <Expandable.Button>
                        <p className="">Tekst</p>
                      </Expandable.Button>
                    </span>
                  )}
                </div>
                {isExpanded ? (
                  <>
                    {sang.lyrics && (
                      <div className="p-8 mt-6 mb-2 overflow-hidden rounded-lg bg-amber-50/70 w-fit">
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

                <div className="pt-6">
                  <p className="text-sm font-semibold text-gray-900">Språk</p>
                  <p className="flex max-w-md gap-3 text-sm leading-7 text-gray-600">
                    {sang.language.map((line) => (
                      <div className="mt-3" key={line}>
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-slate-700 bg-slate-50 ring-1 ring-inset ring-slate-600/20">
                          {line}
                        </span>
                      </div>
                    ))}
                  </p>
                  <>
                    {sang.audio && (
                      <div className="mt-6">
                        <audio controls>
                          <source src={sang.audioUrl} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    )}
                    {sang.performers && (
                      <p className="max-w-lg pt-4 text-sm leading-7 text-gray-600">
                        {sang.performers}
                      </p>
                    )}
                  </>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="relative mt-2 mb-10 overflow-hidden rounded-lg sm:hidden"
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
              <div
                aria-hidden="true"
                className="relative hidden overflow-hidden rounded-lg sm:block"
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
