import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

export function RepertoarList() {
  const [repertoire, setRepertoire] = useState([]);

  useEffect(() => {
    fetch('/api/repertoire')
      .then((response) => response.json())
      .then((data) => setRepertoire(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <section>
        <div className="bg-white">
          <div className="px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8 lg:py-40">
            <div className="max-w-4xl mx-auto divide-y divide-gray-900/10">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                Omfattende repertoar for begravelsessang
              </h2>
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {repertoire.map((sang) => (
                  <Disclosure as="div" key={sang.objectID} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                            <div className="flex flex-col pl-3">
                              <span className="text-base font-semibold leading-7">
                                {sang.title}
                              </span>
                              <span className="text-base font-medium leading-7 text-slate-500">
                                {sang.composer}
                              </span>
                            </div>
                            <span className="flex items-center pr-3 ml-6 h-7">
                              {open ? (
                                <MinusSmallIcon
                                  className="w-6 h-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmallIcon
                                  className="w-6 h-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2">
                          <div className="bg-t">
                            <p className="max-w-3xl pl-3 pr-12 text-base leading-7 text-gray-600 ">
                              {sang.description.map((line) => (
                                <div className="mt-3" key={line}>
                                  <p>{line}</p>
                                </div>
                              ))}
                            </p>
                            <div
                              aria-hidden="true"
                              className="relative overflow-hidden rounded-b-lg"
                            >
                              <Image
                                src={sang.image}
                                alt=""
                                width={500}
                                height={300}
                                className="object-cover object-center w-full h-96"
                              />
                              <div className="absolute inset-0 bg-gradient-to-b from-white" />
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
