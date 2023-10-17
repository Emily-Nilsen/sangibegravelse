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

export function RepertoarToggle() {
  const [repertoire, setRepertoire] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
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
    if (
      selectedSubcategory &&
      !song.subcategory.includes(selectedSubcategory)
    ) {
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

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };

  const handleArrangementChange = (event) => {
    setSelectedArrangement(event.target.value);
  };

  const [expandedSongs, setExpandedSongs] = useState([]);

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
    <section>
      <div className="px-4 py-24 overflow-hidden max-w-screen sm:px-6 lg:px-8 sm:py-32">
        <div>
          <div className="max-w-2xl lg:flex-auto">
            <p className="text-base font-medium leading-7 text-slate-600">
              Utforsk vår omfattende
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Repertoar for begravelsessang
            </h1>
            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Få mer informasjon om hver sang ved å klikke på plusssymbolet og
              lytt til våre eksempler.
            </motion.p>
          </div>
          {/* Filter controls */}
          <div className="pt-12 sm:pb-4">
            <div className="flex items-center space-x-4 text-sm">
              <div>
                <label
                  htmlFor="category"
                  className="text-sm font-medium leading-6 text-gray-900"
                >
                  Kategori
                </label>
                <select
                  id="category"
                  name="category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-slate-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Alle</option>
                  <option value="Folkemusikk">Folkemusikk</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Julesanger">Julesanger</option>
                  <option value="Klassisk">Klassisk</option>
                  <option value="Musikal">Musikal</option>
                  <option value="Opera">Opera</option>
                  <option value="Pop">Pop</option>
                  <option value="Rock/Soul/R&B">Rock/Soul/R&B</option>
                  <option value="Salmer">Salmer</option>
                  <option value="Viser">Viser</option>
                </select>
              </div>
              {/* Subcategory */}
              <div>
                <label
                  htmlFor="subcategory"
                  className="text-sm font-medium leading-6 text-gray-900"
                >
                  Språk
                </label>
                <select
                  id="subcategory"
                  name="subcategory"
                  value={selectedSubcategory}
                  onChange={handleSubcategoryChange}
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-slate-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Alle</option>
                  <option value="dansk">dansk</option>
                  <option value="engelsk">engelsk</option>
                  <option value="fransk">fransk</option>
                  <option value="islandisk">islandisk</option>
                  <option value="italiensk">italiensk</option>
                  <option value="latinsk">latinsk</option>
                  <option value="norsk">norsk</option>
                  <option value="spansk">spansk</option>
                  <option value="svensk">svensk</option>
                  <option value="tysk">tysk</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="arrangement"
                  className="text-sm font-medium leading-6 text-gray-900"
                >
                  Arrangement
                </label>
                <select
                  id="arrangement"
                  name="arrangement"
                  value={selectedArrangement}
                  onChange={handleArrangementChange}
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-slate-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Alle</option>
                  <option value="duett">Duett</option>
                  <option value="fiolin">Fiolin</option>
                  <option value="solo">Solo</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 -mx-4 sm:-mx-0">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Sangtittel
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Komponist
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Arrangement
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Kategori
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Les mer</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {repertoire.filter(filterSongs).map((sang) => (
                <React.Fragment key={sang.objectID}>
                  <tr>
                    <td className="w-full py-4 pl-4 pr-3 text-sm font-medium text-gray-900 max-w-0 sm:w-auto sm:max-w-none sm:pl-0">
                      {sang.title}{' '}
                      <dl className="font-normal lg:hidden">
                        <dt className="sr-only">Komponist</dt>
                        <dd className="mt-1 text-gray-700 truncate">
                          {sang.composer}
                        </dd>
                        <dt className="sr-only sm:hidden">Arrangement</dt>
                        <dd className="mt-1 text-gray-500 truncate sm:hidden">
                          <div className="flex space-x-1">
                            {sang.arrangement.includes('solo') && (
                              <>
                                <span className="inline-flex items-center p-1.5 text-xs font-medium text-slate-700 rounded-full bg-slate-50 ring-1 ring-inset ring-slate-600/20">
                                  <SoloIcon
                                    className="w-3 h-3 fill-slate-600"
                                    aria-hidden="true"
                                  />
                                </span>
                              </>
                            )}
                            {sang.arrangement.includes('duett') && (
                              <>
                                <span className="inline-flex items-center p-1.5 text-xs font-medium text-slate-700 rounded-full bg-slate-50 ring-1 ring-inset ring-slate-600/20">
                                  <DuetIcon
                                    className="w-3 h-3 fill-slate-600"
                                    aria-hidden="true"
                                  />
                                </span>
                              </>
                            )}
                            {sang.arrangement.includes('fiolin') && (
                              <>
                                <span className="inline-flex items-center p-1.5 text-xs font-medium rounded-full text-slate-700 bg-slate-50 ring-1 ring-inset ring-slate-600/20">
                                  <ViolinIcon
                                    className="w-3 h-3 fill-slate-600"
                                    aria-hidden="true"
                                  />
                                </span>
                              </>
                            )}
                          </div>
                        </dd>
                      </dl>
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      {sang.composer}
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                      <div className="flex space-x-1">
                        {sang.arrangement.includes('solo') && (
                          <>
                            <span className="inline-flex items-center p-1.5 text-xs font-medium text-slate-700 rounded-full bg-slate-50 ring-1 ring-inset ring-slate-600/20">
                              <SoloIcon
                                className="w-3 h-3 fill-slate-600"
                                aria-hidden="true"
                              />
                            </span>
                          </>
                        )}
                        {sang.arrangement.includes('duett') && (
                          <>
                            <span className="inline-flex items-center p-1.5 text-xs font-medium text-slate-700 rounded-full bg-slate-50 ring-1 ring-inset ring-slate-600/20">
                              <DuetIcon
                                className="w-3 h-3 fill-slate-600"
                                aria-hidden="true"
                              />
                            </span>
                          </>
                        )}
                        {sang.arrangement.includes('fiolin') && (
                          <>
                            <span className="inline-flex items-center p-1.5 text-xs font-medium rounded-full text-slate-700 bg-slate-50 ring-1 ring-inset ring-slate-600/20">
                              <ViolinIcon
                                className="w-3 h-3 fill-slate-600"
                                aria-hidden="true"
                              />
                            </span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {sang.category === 'Salmer' ? (
                        <>
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-lime-700 bg-lime-50 ring-1 ring-inset ring-lime-600/20">
                            {sang.category}
                          </span>
                        </>
                      ) : sang.category === 'Pop' ? (
                        <>
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-yellow-700 rounded-md bg-yellow-50 ring-1 ring-inset ring-yellow-600/20">
                            {sang.category}
                          </span>
                        </>
                      ) : sang.category === 'Viser' ? (
                        <>
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-700 rounded-md bg-blue-50 ring-1 ring-inset ring-blue-600/20">
                            {sang.category}
                          </span>
                        </>
                      ) : sang.category === 'Klassisk' ? (
                        <>
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-rose-700 bg-rose-50 ring-1 ring-inset ring-rose-600/20">
                            {sang.category}
                          </span>
                        </>
                      ) : sang.category === 'Musikal' ? (
                        <>
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-yellow-700 rounded-md bg-yellow-50 ring-1 ring-inset ring-yellow-600/20">
                            {sang.category}
                          </span>
                        </>
                      ) : sang.category === 'Rock/Soul/R&B' ? (
                        <>
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-purple-700 rounded-md bg-purple-50 ring-1 ring-inset ring-purple-600/20">
                            {sang.category}
                          </span>
                        </>
                      ) : sang.category === 'Folkemusikk' ? (
                        <>
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-indigo-700 rounded-md bg-indigo-50 ring-1 ring-inset ring-indigo-600/20">
                            {sang.category}
                          </span>
                        </>
                      ) : sang.category === 'Jazz' ? (
                        <>
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-sky-700 bg-sky-50 ring-1 ring-inset ring-sky-600/20">
                            {sang.category}
                          </span>
                        </>
                      ) : sang.category === 'Folkemusikk' ? (
                        <>
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-cyan-700 bg-cyan-50 ring-1 ring-inset ring-cyan-600/20">
                            {sang.category}
                          </span>
                        </>
                      ) : null}
                    </td>
                    <td className="py-4 pl-3 pr-4 text-sm font-medium text-right sm:pr-0">
                      {/* Toggle button */}
                      <button
                        className="ml-2 focus:outline-none"
                        onClick={() => toggleSong(sang.objectID)}
                      >
                        {expandedSongs.includes(sang.objectID) ? (
                          <MinusSmallIcon
                            className="w-6 h-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="w-6 h-6"
                            aria-hidden="true"
                          />
                        )}
                      </button>
                    </td>
                  </tr>
                  <Expandable>
                    {({ isExpanded }) => (
                      <>
                        {/* Additional information */}
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
                                                {line === '' ? (
                                                  <br />
                                                ) : (
                                                  <p>{line}</p>
                                                )}
                                              </div>
                                            ))}
                                          </p>
                                        </div>
                                      )}
                                    </>
                                  ) : null}

                                  <div className="pt-6">
                                    <p className="text-sm font-semibold text-gray-900">
                                      Språk
                                    </p>
                                    <p className="flex max-w-md gap-3 text-sm leading-7 text-gray-600">
                                      {sang.subcategory.map((line) => (
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
                                            <source
                                              src={sang.audioUrl}
                                              type="audio/mpeg"
                                            />
                                            Your browser does not support the
                                            audio element.
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
                    )}
                  </Expandable>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
