import { YoutubeVideo } from '@/components/YoutubeVideo';

export function PetterVideoShowcase() {
  return (
    <section className="pb-24 bg-white sm:pb-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg font-semibold leading-8 tracking-tight text-slate-600">
            Video
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Se og hør Petter Vermeli
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Opplev Petter i to fremførelser som viser spennvidden hans innenfor
            musikal- og popsjangeren.
          </p>
        </div>
        <div className="grid gap-12 mt-16 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold leading-7 text-gray-900">
              «She»
            </h3>

            <p className="text-base leading-7 text-gray-600">
              Elvis Costellos udødelige kjærlighetssang tolket av Petter.
            </p>
            <YoutubeVideo publicId="https://www.youtube.com/watch?v=nQWRYMw3GSk" />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold leading-7 text-gray-900">
              «Det vakreste som finns»
            </h3>
            <p className="text-base leading-7 text-gray-600">
              Et utdrag fra Jahn Teigens klassiker fremført av Petter.
            </p>
            <YoutubeVideo publicId="https://www.youtube.com/watch?v=ufn2oQJ1K4A" />
          </div>
        </div>
      </div>
    </section>
  );
}
