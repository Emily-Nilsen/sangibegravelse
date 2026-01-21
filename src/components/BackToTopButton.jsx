import { useEffect, useState } from 'react';

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
        className={`w-12 h-12 text-xl text-amber-700 transition-all duration-300 ease-in-out bg-amber-50 bg-opacity-100 shadow-lg shadow-slate-200/50 shadow-opacity-50 rounded-full hover:shadow-slate-200/50 focus:outline-none ring-1 ring-amber-200/50 hover:animate-bounce hover:shadow-md ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        ↑
      </button>
    </div>
  );
}
