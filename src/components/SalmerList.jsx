import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import salmer from '../lib/salmerData';

export function SalmerList() {
  return (
    <div className="bg-white">
      <div className="px-6 pt-24 mx-auto max-w-7xl sm:pt-32 lg:px-8 lg:pt-40">
        <div className="max-w-4xl mx-auto divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Salmer
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {salmer.map((salme) => (
              <Disclosure as="div" key={salme.tittel} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {salme.tittel}
                        </span>
                        <span className="flex items-center ml-6 h-7">
                          {open ? (
                            <MinusIcon className="w-6 h-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="w-6 h-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="pr-12 mt-2">
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
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
