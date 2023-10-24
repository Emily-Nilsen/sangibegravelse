import React, { useEffect, useState } from 'react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { Expandable } from '@/components/Expandable';
import { TableHeader } from './TableHeader';
import { SongDetails } from './SongDetails';
import { ViolinIcon } from './icons/Violin';
import { SoloIcon } from './icons/Solo';
import { DuetIcon } from './icons/Duet';

export function RepertoireList({
  selectedCategory,
  selectedArrangement,
  selectedLanguage,
  repertoire,
}) {
  const filterSongs = (song) => {
    // Basic filters for category and language
    const basicFilters = [
      [selectedCategory, song.category],
      [selectedLanguage, song.language],
    ];

    const passesBasicFilters = basicFilters.every(([selected, property]) => {
      return !selected || selected === 'Alle' || property.includes(selected);
    });

    // Additional filter for arrangement
    if (selectedArrangement && selectedArrangement !== 'Alle') {
      return (
        passesBasicFilters &&
        song.arrangement.some(
          (arr) => arr.toLowerCase() === selectedArrangement.toLowerCase()
        )
      );
    }

    return passesBasicFilters;
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

  const categoryStyles = {
    Salmer: 'text-lime-700 bg-lime-50 ring-lime-600/20',
    Pop: 'text-yellow-700 bg-yellow-50 ring-yellow-600/20',
    Viser: 'text-blue-700 bg-blue-50 ring-blue-600/20',
    Klassisk: 'text-rose-700 bg-rose-50 ring-rose-600/20',
    Musikal: 'text-yellow-700 bg-yellow-50 ring-yellow-600/20',
    'Rock/Soul/R&B': 'text-purple-700 bg-purple-50 ring-purple-600/20',
    Folkemusikk: 'text-indigo-700 bg-indigo-50 ring-indigo-600/20',
    Jazz: 'text-sky-700 bg-sky-50 ring-sky-600/20',
  };

  // Utility function to get the arrangement icon
  const getArrangementIcon = (arrangement, type, IconComponent) => {
    return arrangement.includes(type) ? (
      <span className="inline-flex items-center p-1.5 text-xs font-medium text-slate-700 rounded-full bg-slate-50 ring-1 ring-inset ring-slate-600/20">
        <IconComponent className="w-3 h-3 fill-slate-600" aria-hidden="true" />
      </span>
    ) : null;
  };

  return (
    <div className="mt-8 -mx-4 sm:-mx-0">
      <table className="min-w-full divide-y divide-gray-300">
        <TableHeader />
        <tbody className="bg-white divide-y divide-gray-200">
          {repertoire.filter(filterSongs).map((sang) => (
            <React.Fragment key={sang.objectID}>
              <tr>
                <td className="w-full py-4 pl-4 pr-3 text-sm font-medium text-gray-900 max-w-0 sm:w-auto sm:max-w-none sm:pl-0">
                  {sang.title}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Composer</dt>
                    <dd className="mt-1 text-gray-700 truncate">
                      {sang.composer}
                    </dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  {sang.composer}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  <div className="flex space-x-1">
                    {getArrangementIcon(sang.arrangement, 'solo', SoloIcon)}
                    {getArrangementIcon(sang.arrangement, 'duett', DuetIcon)}
                    {getArrangementIcon(sang.arrangement, 'fiolin', ViolinIcon)}
                  </div>
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">
                  {sang.category && (
                    <>
                      <div
                        className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-md ring-1 ring-inset ring-600/20 ${
                          categoryStyles[sang.category]
                        }`}
                      >
                        {sang.category}
                      </div>
                      {/* Arrangement icons on mobile */}
                      <div className="flex pt-2.5 space-x-1 sm:hidden">
                        {getArrangementIcon(sang.arrangement, 'solo', SoloIcon)}
                        {getArrangementIcon(
                          sang.arrangement,
                          'duett',
                          DuetIcon
                        )}
                        {getArrangementIcon(
                          sang.arrangement,
                          'fiolin',
                          ViolinIcon
                        )}
                      </div>
                    </>
                  )}
                </td>
                <td className="py-4 pl-3 pr-4 text-sm font-medium text-right sm:pr-0">
                  <button
                    className="ml-2 focus:outline-none"
                    onClick={() => toggleSong(sang.objectID)}
                  >
                    {expandedSongs.includes(sang.objectID) ? (
                      <MinusSmallIcon className="w-6 h-6" aria-hidden="true" />
                    ) : (
                      <PlusSmallIcon className="w-6 h-6" aria-hidden="true" />
                    )}
                  </button>
                </td>
              </tr>
              <Expandable>
                {({ isExpanded }) => (
                  <SongDetails
                    isExpanded={isExpanded}
                    expandedSongs={expandedSongs}
                    sang={sang}
                  />
                )}
              </Expandable>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
