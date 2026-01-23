import { YoutubeVideo } from '@/components/YoutubeVideo';

export function TrineVideoShowcase() {
  return (
    <section className="pb-24 bg-white sm:pb-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg font-semibold leading-8 tracking-tight text-slate-600">
            Video
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Se og hør Trine Rein
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Fire utvalgte fremførelser som viser bredden i Trines uttrykk.
          </p>
        </div>
        <div className="grid gap-12 mt-16 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold leading-7 text-gray-900">
              «Amazing Grace»
            </h3>
            <p className="text-base leading-7 text-gray-600">
              En varm og nær tolkning av den tidløse salmen.
            </p>
            <YoutubeVideo publicId="https://youtu.be/7q-t0n4-x7o?si=NT-gqVQ9L8NeWGJH" />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold leading-7 text-gray-900">
              «You’ll Never Walk Alone»
            </h3>
            <p className="text-base leading-7 text-gray-600">
              En gripende klassiker som skaper fellesskap og trøst.
            </p>
            <YoutubeVideo publicId="https://youtu.be/2McnZtvnzHE?si=FYgezEk12rlzLdME" />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold leading-7 text-gray-900">
              «Danse Mot Vår»
            </h3>
            <p className="text-base leading-7 text-gray-600">
              En lys og poetisk fremføring med nordisk klang.
            </p>
            <YoutubeVideo publicId="https://youtu.be/hEE9FW4NKfQ?si=j7XFN6RskDM9roRb" />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold leading-7 text-gray-900">
              «Vi Vandrar Saman»
            </h3>
            <p className="text-base leading-7 text-gray-600">
              En rolig og samlende sang om å gå veien sammen.
            </p>
            <YoutubeVideo publicId="https://youtu.be/7Dx8FPGA2nI?si=K_ykPUEoC2iLrlOF" />
          </div>
        </div>
      </div>
    </section>
  );
}
