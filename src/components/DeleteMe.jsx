import React, { useState } from 'react';
// ... (other imports)

export function RepertoarToggle() {
  // ... (previous code)

  // State to track expanded state of the lyrics section for each song
  const [expandedLyricsMap, setExpandedLyricsMap] = useState({});

  // Function to toggle the expanded state of the lyrics section for a specific song
  const toggleLyrics = (songId) => {
    setExpandedLyricsMap((prevExpandedLyricsMap) => ({
      ...prevExpandedLyricsMap,
      [songId]: !prevExpandedLyricsMap[songId],
    }));
  };

  return (
    <section>
      {/* ... (previous code) */}
      <tbody className="bg-white divide-y divide-gray-200">
        {repertoire.filter(filterSongs).map((sang) => (
          <React.Fragment key={sang.objectID}>
            <tr>
              {/* ... (previous code) */}
              <td className="py-4 pl-3 pr-4 text-sm font-medium text-right sm:pr-0">
                {/* Toggle button */}
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
                            {/* ... (previous code) */}
                            <div className="text-gray-700">
                              {sang.lyrics && (
                                <span>
                                  <Expandable.Button
                                    onClick={() => toggleLyrics(sang.objectID)}
                                  >
                                    <p className="">
                                      {expandedLyricsMap[sang.objectID]
                                        ? 'Skjul sang tekst'
                                        : 'Se sang tekst'}
                                    </p>
                                  </Expandable.Button>
                                </span>
                              )}
                            </div>

                            {/* Song text */}
                            {expandedLyricsMap[sang.objectID] &&
                              sang.lyrics && (
                                <div
                                  className={`p-8 mt-6 mb-2 overflow-hidden rounded-lg ${
                                    expandedLyrics ? 'bg-amber-50/70' : ''
                                  } w-fit`}
                                >
                                  <p className="max-w-lg text-sm font-medium leading-7 text-gray-600 ">
                                    {sang.lyrics.map((line, i) => (
                                      <div className="mt-0" key={i}>
                                        {line === '' ? <br /> : <p>{line}</p>}
                                      </div>
                                    ))}
                                  </p>
                                </div>
                              )}

                            {/* ... (previous code) */}
                          </div>
                          {/* ... (previous code) */}
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
    </section>
  );
}
