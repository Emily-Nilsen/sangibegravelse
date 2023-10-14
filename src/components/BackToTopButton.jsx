import { useEffect, useState } from 'react';
import Image from 'next/image';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Detect scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed z-50 bottom-4 right-4">
      <button
        onClick={scrollToTop}
        className={`transition-opacity duration-300 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        ↑
        <Image
          className="w-auto h-12 transition-all duration-300 ease-in-out cursor-pointer sm:h-24 hover:rotate-3 transform scale-x-[-1]"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/Bird_logo_-_singing_rcqvub.webp"
          alt="Sang i begravelse - logo"
          width={265}
          height={230}
        />
      </button>
    </div>
  );
}
