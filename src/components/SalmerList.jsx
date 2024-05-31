import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import hymnes from '../lib/hymnesData';
import { SimplePlayer } from './SimplePlayer';

export function SalmerList() {
  const [openIndex, setOpenIndex] = useState(null);
  const [playingAudio, setPlayingAudio] = useState(null);

  const togglePanel = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAudioPlay = (audioElement) => {
    if (playingAudio && playingAudio !== audioElement) {
      playingAudio.pause();
    }
    setPlayingAudio(audioElement);
  };

  return (
    <div className="bg-white">
      <div className="px-6 pt-16 pb-12 mx-auto max-w-7xl sm:pb-16 lg:px-8 lg:pt-28">
        <div className="max-w-4xl mx-auto divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Salmer
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {hymnes.map((salme, index) => (
              <div key={salme.tittel} className="pt-6">
                <dt>
                  <div className="flex items-start justify-between w-full text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">
                      {salme.tittel}
                    </span>
                    <span className="text-right grow">
                      {salme.audio && (
                        <div className="inline-block">
                          <SimplePlayer
                            audio={salme.audio}
                            audioUrl={salme.audioUrl}
                            title={salme.title}
                            performers={salme.performers}
                            live={salme.live}
                            onPlay={handleAudioPlay}
                          />
                        </div>
                      )}
                    </span>
                    <span className="flex items-center ml-6 h-7">
                      {openIndex === index ? (
                        <MinusIcon
                          className="w-6 h-6 cursor-pointer"
                          aria-hidden="true"
                          onClick={() => togglePanel(index)}
                        />
                      ) : (
                        <PlusIcon
                          className="w-6 h-6 cursor-pointer"
                          aria-hidden="true"
                          onClick={() => togglePanel(index)}
                        />
                      )}
                    </span>
                  </div>
                </dt>
                {openIndex === index && (
                  <dd className="pr-0 mt-2">
                    {salme.lyrics ? (
                      <div className="mt-6 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Tekst
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {salme.lyrics}
                            </dd>
                          </div>
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Melodi
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {salme.melody}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    ) : null}

                    <div className="pt-6 border-t border-gray-100">
                      {salme.tekst.map((line, index) =>
                        line === '' ? (
                          <br key={index} />
                        ) : (
                          <p
                            key={index}
                            className="text-base leading-7 text-gray-600"
                          >
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
