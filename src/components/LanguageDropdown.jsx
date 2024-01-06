import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const languages = [
  { id: 1, name: 'Alle' },
  { id: 2, name: 'dansk' },
  { id: 3, name: 'engelsk' },
  { id: 4, name: 'fransk' },
  { id: 5, name: 'islandisk' },
  { id: 6, name: 'italiensk' },
  { id: 7, name: 'latinsk' },
  { id: 8, name: 'norsk' },
  { id: 9, name: 'spansk' },
  { id: 10, name: 'svensk' },
  { id: 11, name: 'tysk' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function LanguageDropdown({ handleLanguageChange }) {
  const [selected, setSelected] = useState(languages[0]);

  const handleSelectionChange = (language) => {
    setSelected(language);
    if (language.name === 'Alle') {
      handleLanguageChange(null);
    } else {
      handleLanguageChange(language.name);
    }
  };

  return (
    <Listbox value={selected} onChange={handleSelectionChange}>
      {({ open }) => (
        <div className="w-full sm:w-auto">
          <div className="block mb-1">
            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
              Språk
            </Listbox.Label>
          </div>
          <div className="relative">
            <Listbox.Button className="relative w-full sm:w-auto cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600 sm:text-sm sm:leading-6">
              <span className="block">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronUpDownIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute left-0 z-10 w-auto py-1 mt-2 overflow-auto text-base bg-white rounded-md shadow-lg max-h-none ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {languages.map((language) => (
                  <Listbox.Option
                    key={language.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-amber-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={language}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block'
                          )}
                        >
                          {language.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-amber-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}
