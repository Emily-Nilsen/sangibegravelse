import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

import { ViolinIcon } from './icons/Violin';
import { SoloIcon } from './icons/Solo';
import { DuetIcon } from './icons/Duet';

export function RepertoarListe() {
  const [repertoire, setRepertoire] = useState([]);
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

  useEffect(() => {
    fetch('/api/repertoire')
      .then((response) => response.json())
      .then((data) => setRepertoire(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      <div className="px-4 py-24 sm:px-6 lg:px-8 sm:py-32">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Repertoar
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              En omfattende repertoarliste for begravelsessanger, inkludert
              sangtittel, komponist, arrangement og kategori.
            </p>
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
              {repertoire.map((sang) => (
                <tr key={sang.objectID}>
                  <td className="w-full py-4 pl-4 pr-3 text-sm font-medium text-gray-900 max-w-0 sm:w-auto sm:max-w-none sm:pl-0">
                    {sang.title}{' '}
                    {sang.recommended === true ? (
                      <>
                        <span className="inline-flex items-center px-2 py-1 ml-2 text-xs font-medium rounded-md text-rose-700 bg-rose-50 ring-1 ring-inset ring-rose-600/20">
                          Anbefales
                        </span>
                      </>
                    ) : null}
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
                          {sang.arrangement.includes('duet') && (
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
                      {sang.arrangement.includes('duet') && (
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
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-700 rounded-md bg-green-50 ring-1 ring-inset ring-green-600/20">
                          {sang.category}
                        </span>
                      </>
                    ) : sang.category === 'Pop' ? (
                      <>
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-orange-700 rounded-md bg-orange-50 ring-1 ring-inset ring-orange-600/20">
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
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-fuchsia-700 bg-fuchsia-50 ring-1 ring-inset ring-fuchsia-600/20">
                          {sang.category}
                        </span>
                      </>
                    ) : null}
                  </td>
                  <td className="py-4 pl-3 pr-4 text-sm font-medium text-right sm:pr-0">
                    <Link
                      href="#"
                      className="text-slate-600 hover:text-slate-900"
                    >
                      <PlusSmallIcon className="w-6 h-6" aria-hidden="true" />
                      <span className="sr-only">, {sang.title}</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
