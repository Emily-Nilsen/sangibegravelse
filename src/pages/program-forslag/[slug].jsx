import { useRouter } from 'next/router';
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Import your suggestions data
import { suggestions } from '@/components/ForslagPreview';
import { LineSeparator } from '@/components/icons/LineSeparator';

export default function SuggestionPage({ suggestion }) {
  const router = useRouter();

  // If the page is not yet generated, show a loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <section className="relative bg-white">
      <div className="absolute inset-0 hidden md:block">
        <Image
          src={suggestion.image}
          alt="Blomster"
          className="object-cover w-full h-full opacity-50 scale-x-[-1]"
          width={3000}
          height={1681}
        />
      </div>
      <div className="absolute inset-0 md:hidden">
        <Image
          src={suggestion.image}
          alt="Blomster"
          width={2176}
          height={3264}
          className="absolute inset-0 object-cover object-left w-full h-full opacity-20 scale-x-[-1]"
        />
      </div>
      <div className="px-6 py-24 mx-auto bg-t isolate sm:py-32 lg:px-40 max-w-7xl">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        ></div>

        <div className="">
          <div className="px-6 py-32 rounded-lg bg-white/70 lg:px-8">
            <div className="max-w-3xl mx-auto text-base leading-7 text-gray-700">
              <div className="max-w-2xl mx-auto text-center">
                <h1 className="mb-2 text-lg leading-8 text-gray-600">
                  Program forslag for
                </h1>
                <h6 className="mt-5 mb-16 text-5xl text-gray-900 sm:text-7xl">
                  {suggestion.name}
                </h6>
              </div>
              <div className="max-w-2xl mx-auto text-center">
                <h1 className="mt-10 text-xl leading-8 text-gray-800">
                  Inngangsmusikk
                </h1>
                <LineSeparator className="my-10 w-28 fill-[#b4b297] mx-auto" />
                <div className="max-w-2xl">
                  <h1 className="text-xl leading-8 text-gray-800">Solo 1</h1>
                  <p>{suggestion.solo_1}</p>
                </div>
                <LineSeparator className="my-10 w-28 fill-[#b4b297] mx-auto" />
                {suggestion.salme_1 && (
                  <>
                    <div className="max-w-2xl">
                      <h1 className="text-xl leading-8 text-gray-800">
                        Salme 1
                      </h1>
                      <p>{suggestion.salme_1}</p>
                    </div>
                  </>
                )}
                {suggestion.fellessang_1 ? (
                  <>
                    <div className="max-w-2xl">
                      <h1 className="text-xl leading-8 text-gray-800">
                        Fellessang
                      </h1>
                      <p>{suggestion.fellessang_1}</p>
                      <LineSeparator className="my-10 w-28 fill-[#b4b297] mx-auto" />
                    </div>
                  </>
                ) : null}

                <h1 className="text-xl leading-8 text-gray-800">Minneord</h1>
                <LineSeparator className="my-10 w-28 fill-[#b4b297] mx-auto" />
                <div className="max-w-2xl">
                  <h1 className="text-xl leading-8 text-gray-800">Solo 2</h1>
                  <p>{suggestion.solo_2}</p>
                </div>
                <LineSeparator className="my-10 w-28 fill-[#b4b297] mx-auto" />
                {suggestion.salme_2 && (
                  <>
                    <div className="max-w-2xl">
                      <h1 className="text-xl leading-8 text-gray-800">
                        Salme 2
                      </h1>
                      <p>{suggestion.salme_2}</p>
                    </div>
                    <LineSeparator className="my-10 w-28 fill-[#b4b297] mx-auto" />
                  </>
                )}
                {suggestion.fiolinsolo && (
                  <>
                    <div className="max-w-2xl">
                      <h1 className="text-xl leading-8 text-gray-800">
                        Fionlinsolo
                      </h1>

                      <p>{suggestion.fiolinsolo}</p>
                    </div>
                    <LineSeparator className="my-10 w-28 fill-[#b4b297] mx-auto" />
                  </>
                )}
                {suggestion.salme_3 && (
                  <>
                    <div className="max-w-2xl">
                      <h1 className="text-xl leading-8 text-gray-800">
                        Salme 3
                      </h1>
                      <p>{suggestion.salme_3}</p>
                    </div>
                    <LineSeparator className="my-10 w-28 fill-[#b4b297] mx-auto" />
                  </>
                )}
                <div className="max-w-2xl">
                  <h1 className="text-xl leading-8 text-gray-800">Solo 3</h1>
                  <p>{suggestion.solo_3}</p>
                </div>
                <LineSeparator className="my-10 w-28 fill-[#b4b297] mx-auto" />
                {suggestion.fellessang_2 ? (
                  <>
                    <div className="max-w-2xl">
                      <h1 className="text-xl leading-8 text-gray-800">
                        Fellessang
                      </h1>
                      <p>{suggestion.fellessang_2}</p>
                      <LineSeparator className="my-10 w-28 fill-[#b4b297] mx-auto" />
                    </div>
                  </>
                ) : null}
                {suggestion.solo_4 && (
                  <>
                    <div className="max-w-2xl">
                      <h1 className="text-xl leading-8 text-gray-800">
                        Solo 4
                      </h1>
                      <p>{suggestion.solo_4}</p>
                    </div>
                    <LineSeparator className="my-10 w-28 fill-[#b4b297] mx-auto" />
                  </>
                )}
                <h1 className="text-xl leading-8 text-gray-800">
                  Utgangsmusikk
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticPaths() {
  // Create paths from suggestions ids
  const paths = suggestions.map((suggestion) => ({
    params: { slug: suggestion.id.toString() },
  }));

  return {
    paths,
    fallback: true, // or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const suggestion = suggestions.find(
    (suggestion) => suggestion.id.toString() === params.slug
  );

  // Return suggestion as a prop
  return {
    props: { suggestion },
  };
}
