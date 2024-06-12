import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
import Image from 'next/image'
import { AudioPlayer } from './AudioPlayer'
import { SimplePlayer } from './SimplePlayer';

const features = [
  {
    title: 'Caruso',
    description:
      'En klassisk italiensk sang av Lucio Dalla. ',
      audio: true,
    audioUrl: 'https://res.cloudinary.com/dt3k2apqd/video/upload/v1717600157/Sang%20i%20begravelse/Audio/Caruso_with_piano_ks4yca.mp3',
  },
  {
    title: 'Crazy',
    description: 'En pop sang av Willie Nelson.',
    audio: true,
    audioUrl: 'https://res.cloudinary.com/dt3k2apqd/video/upload/v1717672445/Sang%20i%20begravelse/Audio/Crazy_Repertoire_byr4my.mp3',
  },
  {
    title: 'Vise i vinterlys',
    description: 'En vinter og jul sang av Finn Ludt og Erik Bye.',
    audio: true,
    audioUrl: 'https://res.cloudinary.com/dt3k2apqd/video/upload/v1717604981/Sang%20i%20begravelse/Audio/Vinterlyset_wznnto.mp3',
  },
  {
    title: 'Unchained melody',
    description: 'En pop sang av Alex North og Hy Zaret.',
    audio: true,
    audioUrl: 'https://res.cloudinary.com/dt3k2apqd/video/upload/v1717604831/Sang%20i%20begravelse/Audio/Unchained_melody_tj2url.mp3',
  },
]

export function ArtistSamples({audio,
  audioUrl}) {

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
              <p className="text-base font-semibold leading-7 text-slate-600">Allsidig sanger med</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Et bredt repertoar</h1>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p> */}
               <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.title} className="relative pl-11 rounded-2xl ">
                    <dt className="inline font-semibold text-gray-900">
                      {/* <feature.icon className="absolute w-5 h-5 text-indigo-600 left-1 top-1" aria-hidden="true" /> */}
                      <span className="absolute w-5 h-5 left-1 top-1" aria-hidden="true">
                      {feature.audio && (
                        <div className="inline-block pr-3 ">
                          <SimplePlayer
                            audio={feature.audio}
                            audioUrl={feature.audioUrl}
                            // title={feature.title}
                            // performers={feature.performers}
                            // live={feature.live}
                            onPlay={handleAudioPlay}
                          />
                        </div>
                      )}
                    </span>
                      {feature.title}
                    </dt>{' '}
                    <dd className="block">{feature.description}</dd>
                    {/* Audio player */}
          {/* {feature.audio && (
            <div className="mt-6">
              <AudioPlayer
                audio={feature.audio}
                audioUrl={feature.songAudioUrl}
                title={feature.title}
              />
            </div>
          )} */}
                    
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1718187049/Sang%20i%20begravelse/artists/NG_1_singing_tvjntc.webp"
            alt="Nils Georg Nilsen"
            className="w-[34rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </div>
  )
}
