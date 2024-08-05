import { useState } from 'react';
import Image from 'next/image';
import { SimplePlayer } from './SimplePlayer';

export function ArtistSamples({
  features,
  imageUrl,
  imageAlt,
  subtitle,
  title,
  imageCredit, // New prop for image credit
}) {
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
    <div className="pb-24 overflow-hidden bg-white sm:pb-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-slate-600">
                {subtitle}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h1>
              <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="relative pl-11 rounded-2xl "
                  >
                    <dt className="inline font-semibold text-gray-900">
                      <span
                        className="absolute w-5 h-5 left-1 top-1"
                        aria-hidden="true"
                      >
                        {feature.audio && (
                          <div className="inline-block pr-3">
                            <SimplePlayer
                              audio={feature.audio}
                              audioUrl={feature.audioUrl}
                              onPlay={handleAudioPlay}
                            />
                          </div>
                        )}
                      </span>
                      {feature.title}
                    </dt>{' '}
                    <dd className="block">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative">
            <Image
              src={imageUrl}
              alt={imageAlt}
              className="w-[34rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 object-right"
              width={1920}
              height={1080}
              loading="lazy"
            />
            {imageCredit && (
              <div className="absolute bottom-0 left-0 p-2 text-xs bg-black bg-opacity-50 text-white/70 rounded-tr-xl rounded-bl-xl">
                Foto av {imageCredit}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
