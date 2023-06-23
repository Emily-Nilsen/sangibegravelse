import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function Personvernerklæring() {
  return (
    <div className="px-6 py-32 bg-white lg:px-8">
      <div className="max-w-3xl mx-auto text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-slate-600">
          Sang i begravelse
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Personvernerklæring
        </h1>
        <p className="mt-6 text-xl leading-8">
          Sang i begravelse er opptatt av å ivareta personvernet til våre
          brukere. Denne personvernerklæringen beskriver hvordan vi samler inn,
          bruker, lagrer og beskytter personopplysninger i forbindelse med
          driften av vår nettside. Ved å bruke nettsiden vår, samtykker du til
          vår behandling av personopplysninger i tråd med denne erklæringen.
        </p>
        <div className="max-w-2xl mt-10">
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit. Faucibus commodo massa rhoncus, volutpat.
            Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id.
          </p>
          {/* <ul role="list" className="max-w-xl mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="flex-none w-5 h-5 mt-1 text-slate-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Data types.
                </strong>{' '}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="flex-none w-5 h-5 mt-1 text-slate-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">Loops.</strong>{' '}
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="flex-none w-5 h-5 mt-1 text-slate-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">Events.</strong>{' '}
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                Et magna sit morbi lobortis.
              </span>
            </li>
          </ul> */}
          <p className="mt-8">
            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
            odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
            diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
            hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem
            vel integer orci.
          </p>
          {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            From beginner to expert in 3 hours
          </h2> */}
          <p className="mt-6">
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat
            in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum
            mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
            tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
            Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis
            diam.
          </p>

          <p className="mt-10">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit.
          </p>
        </div>

        <div className="max-w-2xl mt-16">
          {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Everything you need to get up and running
          </h2> */}
          <p className="mt-6">
            Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam
            varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales
            cursus tristique. Tincidunt sed tempus ut viverra ridiculus non
            molestie. Gravida quis fringilla amet eget dui tempor dignissim.
            Facilisis auctor venenatis varius nunc, congue erat ac. Cras
            fermentum convallis quam.
          </p>
          <p className="mt-8">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit.
          </p>
        </div>
      </div>
    </div>
  );
}
