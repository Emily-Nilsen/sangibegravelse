import { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const arrangements = [
  { id: 1, name: 'Alle' },
  { id: 2, name: 'Duett' },
  { id: 3, name: 'Fiolin' },
  { id: 4, name: 'Solo' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function ArrangementDropdown({ handleArrangementChange }) {
  const [selected, setSelected] = useState(arrangements[0]);

  const handleSelectionChange = (arrangement) => {
    setSelected(arrangement);
    handleArrangementChange(arrangement.name);
  };

  return (
    <Listbox value={selected} onChange={handleSelectionChange}>
      {({ open }) => (
        <div>
          <div className="block mb-1">
            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
              Arrangement
            </Listbox.Label>
          </div>
          <div className="relative">
            <Listbox.Button className="relative w-auto cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600 sm:text-sm sm:leading-6">
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
              <Listbox.Options className="absolute left-0 z-10 w-48 py-1 mt-2 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {arrangements.map((arrangement) => (
                  <Listbox.Option
                    key={arrangement.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-amber-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={arrangement}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block'
                          )}
                        >
                          {arrangement.name}
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
