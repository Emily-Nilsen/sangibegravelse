import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const categories = [
  { id: 0, name: 'Alle' },
  { id: 1, name: 'Folkemusikk' },
  { id: 2, name: 'Jazz' },
  { id: 3, name: 'Klassisk' },
  { id: 4, name: 'Musikal' },
  { id: 5, name: 'Pop' },
  { id: 6, name: 'Rock/Soul/R&B' },
  { id: 7, name: 'Salmer' },
  { id: 8, name: 'Vinter/Jul' },
  { id: 9, name: 'Viser' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function CategoryDropdown({ handleCategoryChange }) {
  const [selected, setSelected] = useState(categories[0]);

  const handleSelectionChange = (category) => {
    setSelected(category);
    // Pass an empty string to indicate "All" category
    const categoryValue = category.name === 'Alle' ? '' : category.name;
    handleCategoryChange(categoryValue);
  };

  return (
    <Listbox value={selected} onChange={handleSelectionChange}>
      {({ open }) => (
        <div className="w-full sm:w-auto">
          <div className="block mb-1">
            <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
              Kategori
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
              <Listbox.Options className="absolute z-10 w-auto py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-none ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {categories.map((category) => (
                  <Listbox.Option
                    key={category.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-amber-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={category}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block'
                          )}
                        >
                          {category.name}
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
