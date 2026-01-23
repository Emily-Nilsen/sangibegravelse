import { YoutubeVideo } from '@/components/YoutubeVideo';

export function SusanneVideoShowcase() {
  return (
    <section className="pb-24 bg-white sm:pb-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg font-semibold leading-8 tracking-tight text-slate-600">
            Video
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Se og hør Susanne Hvinden Hals
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Utvalgte fremførelser fra popballader til opera som viser
            spennvidden hennes.
          </p>
        </div>
        <div className="grid gap-12 mt-16 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold leading-7 text-gray-900">
              «The Prayer»
            </h3>
            <p className="text-base leading-7 text-gray-600">
              David Fosters mektige ballade fremført med varme og presisjon.
            </p>
            <YoutubeVideo publicId="https://youtu.be/ZOOmEYtOCUo?si=s0Sl094kr8fhfplW" />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold leading-7 text-gray-900">
              «Hvem er jeg?»
            </h3>
            <p className="text-base leading-7 text-gray-600">
              En personlig og nær tolkning som viser Susannes fortellerkraft.
            </p>
            <YoutubeVideo publicId="https://youtu.be/TAqPhOHex6M?si=abBq3yxzogXY9n9p" />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold leading-7 text-gray-900">
              «Ach ich fühl’s»
            </h3>
            <p className="text-base leading-7 text-gray-600">
              Mozarts operaklassiker med lyrisk klang og operatisk
              tilstedeværelse.
            </p>
            <YoutubeVideo publicId="https://youtu.be/cIEWg-XSqAI?si=yUWnU2-hukT9h6d2" />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold leading-7 text-gray-900">
              «Kjærlighet»
            </h3>
            <p className="text-base leading-7 text-gray-600">
              Rolf Toftes melodiøse låt levert med inderlighet og klarhet.
            </p>
            <YoutubeVideo publicId="https://youtu.be/atdbe9jFw2g?si=Q-clns5e10_8zloB" />
          </div>
        </div>
      </div>
    </section>
  );
}
