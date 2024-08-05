import Image from 'next/image';
import Link from 'next/link';

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import MyLink from '@/components/MyLink';

import navigation from './Navigation';
import { Search } from './Search'; // Import the Search component
import { AlgoliaAutocomplete } from './AlgoliaAutocomplete';
import Logo from '../images/svgs/logo.svg';
import dropdownBg from '../images/general/dropdown-bg.webp';

export function Header({ textColour }) {
  const [isAlgoliaOpen, setAlgoliaOpen] = useState(false); // For AlgoliaAutocomplete
  const [showSearch, setShowSearch] = useState(true); // For controlling Search visibility

  const handleAlgoliaOpen = () => {
    setAlgoliaOpen(true);
    setShowSearch(false);
  };

  const handleAlgoliaClose = () => {
    setAlgoliaOpen(false);
    setShowSearch(true);
  };

  // Original variables
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const textColourClass =
    textColour === 'white' ? 'text-white' : 'text-slate-700';

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="group">
          <div className="flex p-1 transition-all duration-300 ease-in-out rounded-full bg-white/70 group-hover:bg-white/90 lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Sang i begravelse</span>
              <Image
                className="w-12 h-auto transition-all duration-300 ease-in-out cursor-pointer"
                src={Logo}
                alt="Sang i begravelse - logo"
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>
        <div className="hidden mr-6 -my-5 lg:block sm:mr-8 md:mr-0 justify-self-end">
          {showSearch && <Search handleAlgoliaOpen={handleAlgoliaOpen} />}{' '}
          {/* Conditionally render Search */}
        </div>
        {/* ...existing code */}
        {isAlgoliaOpen && (
          <AlgoliaAutocomplete
            open={isAlgoliaOpen}
            setOpen={handleAlgoliaClose}
          />
        )}
        {/* ...existing code */}
        <div className="hidden lg:flex lg:gap-x-7">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm leading-6 transition duration-300 ease-in-out hover:bg-white/50 hover:text-slate-950 cursor:pointer px-2.5 py-1.5 rounded-md ${textColourClass}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-8">
          <div className="lg:hidden">
            {showSearch && <Search handleAlgoliaOpen={handleAlgoliaOpen} />}{' '}
            {/* Conditionally render Search */}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-900 bg-white/20"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className="w-6 h-6 text-amber-600/60"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Transition
          as={Fragment}
          show={mobileMenuOpen} // Add this line to set the show prop
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-amber-50 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="absolute inset-0 ">
              <Image
                src={dropdownBg}
                alt="Hvite roser"
                width={2176}
                height={3264}
                className="absolute inset-0 object-cover object-left w-full h-full transform scale-x-[-1] lg:hidden -z-10"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-white/30" />
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Sang i begravelse</span>
                <h6 className="text-4xl text-slate-950">Sang i begravelse</h6>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="relative z-10 flow-root mt-6">
              <div className="-my-6 divide-y divide-slate-500/25">
                <div className="py-6 space-y-2">
                  {navigation.map((item) => (
                    <MyLink
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 -mx-3 text-base font-medium leading-7 transition-all duration-300 ease-in-out rounded-lg text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </MyLink>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Transition>
      </Dialog>
    </header>
  );
}
