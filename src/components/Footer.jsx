import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { name: 'Hjem', href: '#' },
  { name: 'Repertoar', href: '#' },
  { name: 'Artister', href: '#' },
  { name: 'Kontakt', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="px-6 py-20 mx-auto overflow-hidden max-w-7xl sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-xs leading-5 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Sang i begravelse.
        </p>
      </div>
    </footer>
  );
}
