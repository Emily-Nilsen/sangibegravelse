import Image from 'next/image';
import Link from 'next/link';

const navigation = {
  sanger: [
    { name: 'Repertoar', href: '/repertoar' },
    { name: 'Videoer', href: '/#videoer' },
  ],
  artister: [
    { name: 'Susanne Hals', href: '/susanne-hvinden-hals' },
    { name: 'Nils Nilsen', href: '/nils-georg-nilsen' },
    { name: 'Kathrine Hals', href: '/kathrine-hvinden-hals' },
    { name: 'Jan-Tore Saltnes', href: '/jan-tore-saltnes' },
  ],

  omOss: [
    { name: 'Hjem', href: '/' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
  personvern: [{ name: 'Personvernerklæring', href: '/personvernerklaering' }],
};

export function Footer() {
  return (
    <footer
      className="bg-white border-t border-slate-300/20"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-6 pt-16 pb-8 mx-auto max-w-7xl sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Sang i begravelse</span>
              <Image
                className="w-24 h-auto transition-all duration-300 ease-in-out cursor-pointer hover:rotate-3"
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/Bird_logo_-_singing_rcqvub.webp"
                alt="Sang i begravelse - logo"
                width={500}
                height={500}
              />
            </Link>
            <h6 className="text-3xl text-slate-9950">Sang i begravelse</h6>
            <p className="text-sm leading-6 text-gray-600">
              Vi hjelper pårørende med passende begravelsesmusikk.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-16 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Sanger
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.sanger.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Artister
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.artister.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Om oss
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.omOss.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Personvern
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.personvern.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-16 border-t border-gray-900/10 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Sang i begravelse.
          </p>
        </div>
      </div>
    </footer>
  );
}
