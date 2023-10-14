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
        className={`w-12 h-12 text-xl text-muted-yellow-700 transition-all duration-300 ease-in-out bg-muted-yellow-50 bg-opacity-100 shadow-lg rounded-full focus:outline-none hover:shadow-md ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        ↑
      </button>
    </div>
  );
}
