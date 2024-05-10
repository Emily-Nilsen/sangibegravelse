import React, { useEffect, useState, forwardRef } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/outline';
import { filterSongs } from '../../utilities/filterSongs';
import { Expandable } from '@/components/Expandable';
import { TableHeader } from './TableHeader';
import { SongDetails } from './SongDetails';
import { ViolinIcon } from './icons/Violin';
import { SoloIcon } from './icons/Solo';
import { DuetIcon } from './icons/Duet';
import { CategoryTag } from './CategoryTag';
import { SimplePlayer } from './SimplePlayer';
import { SpotifyPlayer } from './SpotifyPlayer';

export function RepertoireListComponent(
  { selectedCategory, selectedArrangement, selectedLanguage, repertoire },
  ref
) {
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

  // Utility function to get the arrangement icon
  const getArrangementIcon = (arrangement, type, IconComponent) => {
    return arrangement.includes(type) ? (
      <span className="inline-flex items-center p-1.5 text-xs font-medium text-slate-700 rounded-full bg-slate-50 ring-1 ring-inset ring-slate-600/20">
        <IconComponent className="w-3 h-3 fill-slate-600" aria-hidden="true" />
      </span>
    ) : null;
  };

  return (
    // Add scroll to the div below
    <div className="relative mt-8 -mx-4 sm:-mx-0">
      <table ref={ref} className="min-w-full divide-y divide-gray-300">
        <TableHeader />
        <tbody className="bg-white divide-y divide-gray-200">
          {repertoire
            .filter((song) =>
              filterSongs(
                song,
                selectedCategory,
                selectedLanguage
                // selectedArrangement
              )
            )
            .map((sang) => (
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
                  {/* New table data for Play Icon and SimplePlayer */}
                  <td className="hidden px-3 py-4 text-center sm:flex">
                    {sang.audio && (
                      <>
                        <div className="inline">
                          <SimplePlayer
                            audio={sang.audio}
                            audioUrl={sang.audioUrl}
                            title={sang.title}
                            performers={sang.performers}
                            live={sang.live}
                          />
                        </div>
                      </>
                    )}
                  </td>

                  <td className="px-3 py-4 text-sm text-gray-500">
                    {sang.category && (
                      <>
                        <CategoryTag
                          category={sang}
                          categoryVariable="category"
                        />

                        <div className="hidden pt-2.5 space-x-1 sm:hidden">
                          {getArrangementIcon(
                            sang.arrangement,
                            'solo',
                            SoloIcon
                          )}
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
                  <td>
                    {/* Arrangement icons on mobile */}
                    <div className="sm:hidden">
                      {sang.audio && (
                        <>
                          <div className="inline">
                            <SimplePlayer
                              audio={sang.audio}
                              audioUrl={sang.audioUrl}
                              title={sang.title}
                              performers={sang.performers}
                              live={sang.live}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="py-4 pl-3 pr-4 text-sm font-medium text-right sm:pr-0">
                    <button
                      className="ml-2 focus:outline-none"
                      onClick={() => toggleSong(sang.objectID)}
                    >
                      {expandedSongs.includes(sang.objectID) ? (
                        <MinusIcon
                          className="w-6 h-6 text-gray-700"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusIcon
                          className="w-6 h-6 text-gray-700"
                          aria-hidden="true"
                        />
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

export const RepertoireList = forwardRef(RepertoireListComponent);
