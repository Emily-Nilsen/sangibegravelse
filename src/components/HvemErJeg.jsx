import { YoutubeVideo } from '@/components/YoutubeVideo';

export function HvemErJeg() {
  return (
    <div className="pt-6 pb-24 overflow-hidden bg-white sm:py-32">
      <div className="px-4 mx-auto max-w-7xl lg:px-8">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Hvem er jeg?
        </h1>

        <div className="px-0 mx-auto max-w-7xl">
          {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
          <div className="mx-auto max-w-7xl">
            {/* <VideoFeature /> */}
            <div className="">
              <div className="relative z-0 aspect-[7/4] w-full rounded-2xl object-cover lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2">
                <div className="absolute flex items-center justify-center w-full h-auto pt-10 overflow-hidden z-1 rounded-2xl">
                  <div className="relative object-cover w-full aspect-video rounded-2xl">
                    <YoutubeVideo publicId="https://youtu.be/TAqPhOHex6M?si=8n2TSf4DxGbu6ADz" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 space-y-3">
          <p className="max-w-sm pt-10 text-sm text-gray-500 sm:m-0 sm:mt-10 sm:max-w-lg sm:px-0 sm:text-base lg:mx-auto lg:max-w-none lg:px-0 lg:pt-0 lg:text-gray-500">
            Tekst og melodi:{' '}
            <span className="font-bold text-gray-700">Christian Heggen</span>
          </p>
          <p className="max-w-sm text-sm text-gray-500 sm:m-0 sm:mt-10 sm:max-w-lg sm:px-0 sm:text-base lg:mx-auto lg:max-w-none lg:px-0 lg:pt-0 lg:text-gray-500">
            Sang: <span className="font-bold text-gray-700">Susanne Hals</span>
          </p>
          <p className="max-w-sm text-sm text-gray-500 sm:m-0 sm:mt-10 sm:max-w-lg sm:px-0 sm:text-base lg:mx-auto lg:max-w-none lg:px-0 lg:pt-0 lg:text-gray-500">
            Fiolin:{' '}
            <span className="font-bold text-gray-700">Kathrine Hals</span>
          </p>
          <p className="max-w-sm pt-0 text-sm text-gray-500 sm:m-0 sm:mt-10 sm:max-w-lg sm:px-0 sm:text-base lg:mx-auto lg:max-w-none lg:px-0 lg:pt-0 lg:text-gray-500">
            Piano:{' '}
            <span className="font-bold text-gray-700">Christian Heggen</span>
          </p>
        </div>
      </div>
    </div>
  );
}
