import Image from 'next/image';
import { tilbakemeldingerData } from '../lib/tilbakemeldinger';

export function Tilbakemeldinger({ artistName }) {
  // Filter testimonials by artist
  const filteredTestimonials = tilbakemeldingerData.filter(
    (testimonial) => testimonial.artist === artistName
  );

  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h6 className="hidden mt-2 text-6xl text-gray-900 sm:block">
            Tilbakemeldinger
          </h6>
          <h6 className="mt-2 text-5xl text-gray-900 sm:hidden">
            Tilbake-
            <br />
            meldinger
          </h6>
        </div>
        <div className="flow-root max-w-2xl mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {filteredTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="relative p-8 text-sm leading-6 bg-white shadow-lg rounded-2xl ring-1 ring-gray-900/5">
                  <div className="absolute inset-0 overflow-hidden bg-pink-50 rounded-2xl">
                    <Image
                      className="object-cover object-right-bottom w-full h-full"
                      src={testimonial.image}
                      alt="hvite roser"
                      width={2000}
                      height={2000}
                    />
                    <div className="absolute inset-0 bg-white/70" />
                  </div>
                  <blockquote className="relative z-10 text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="relative z-10 flex items-center mt-6 gap-x-4">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">
                        {testimonial.author.place}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
