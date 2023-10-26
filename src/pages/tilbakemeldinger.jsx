import Image from 'next/image';
import Link from 'next/link';

const featuredTestimonial = {
  body: 'Hei Nils, ‘En verdig begravelse’, ‘Jeg fikk sånn ro med en gang sangeren begynte å synge’, ‘Det varmet sjelen’, var noen av de tilbakemeldingene vi fikk. Tusen takk igjen for flott musikk. Jeg må si spesielt til ‘stjernen’ som du ble omtalt, Nils. Vi er så glade for at vi fikk dere som musikere til begravelsen til faren vår. ',
  author: {
    name: 'Bendik',
  },
};
const testimonials = [
  [
    [
      {
        body: 'Tusen hjertelig takk for en fantastisk vakker vokal i begravelsen til pappaen min idag, Alladin. Du har en unik stemme og tilstedeværelse.',
        author: {
          name: 'Lisa med familie',
        },
      },
      {
        body: 'Min mann gikk bort 20 august og vi hadde bisettelse i Haslum store seremonirom 31 august med deg som solist.For et lykketreff! Anthem ble nydelig fremført, og at du med din tenor fikset God natt kjære Oslo med glans - og så avslutningen da. Smile med Nat King Cole var min manns yndlings melodi. Min mann smilte bestandig - og spredte glede rundt seg så han ba meg om at Smile skulle være en siste hilsen fra ham til oss alle på denne dagen. Så tusen takk for at du gjorde en tung og vond dag til noe flott og verdifullt og ta med seg videre.',
        author: {
          name: 'Anne-Britt',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Kjære Nils Georg, ja, som Tante Ragny ofte sier, «det kunne ikke vært finere!». Alle var så imponerte over dere - det ble så minnerik, og vi er så takknemlig!',
        author: {
          name: 'Tina',
        },
      },
      {
        body: 'Jan-Tore er en klippe i vår portefølje av gravferdssangere. Jan-Tore er en varm, god og veldig dyktig sanger som alltid leverer, ofte mer en det som forventes! «Han e heil ved» og det er med en ektehet og innlevelse som beskriver at han virkelig ønsker å gi de etterlatte en så god opplevelse som mulig.',
        author: {
          name: 'Harry E.Hanssen, gravferdskonsulent',
          company: 'Klemmetsby-Firing begravelsesbyrå',
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: 'Tuuuuusen takk for fantastisk sang i dag i Mammas begravelse❤️ På minnesamværet tok vi en applaus for deg, alle syntes det hadde vært veldig vanskelig å ikke applaudere deg i kirken🤣 Det var rett og slett nydelig 🤗',
        author: {
          name: 'Sissel',
        },
      },
      {
        body: 'Du sang i gravferden til min sønn i Vestre gravlunds kapell sist tirsdag. Vi fikk ikke hilst på deg og takket for bidraget og fortalt hvor fornøyd vi, og alle andre vi snakket med, var med fremførelsen. Du sang nydelig og bidrog til en vakker og verdig avskjed. Takk!',
        author: {
          name: 'Torbjørn',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'For oss i Horten Begravelsesbyrå er Jan-Tore et av de aller sikreste kortene i bunken. Allsidig som få - dyktig som enda færre. Profesjonell - i alle aspekter av sitt virke. Han leverer alltid, uavhengig av hva vi utfordrer han på - til våre og ikke minst; over de pårørendes forventninger. Med Jan-Tore på laget - så er vi 100% trygge!',
        author: {
          name: 'Aron Preus, gravferdskonsulent',
          company: 'Horten begravelsesbyrå',
        },
      },
      {
        body: 'Hei! En stor takk for vakker sang og musikk fra deg og de andre i min mors bisettelse i går! Det var så vakkert og stemningsfullt, og vi satte stor pris på deres bidrag!',
        author: {
          name: 'Kristina',
        },
      },
      // More testimonials...
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function tilbakemeldinger() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Sang%20i%20begravelse/testimonial_roses_2_copy_lrvuhm.webp')",
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-white/60" />
      </div>
      <div className="relative pt-24 pb-32 isolate sm:pt-32">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-xl pt-12 mx-auto text-center">
            {/* <p className="text-lg font-semibold leading-8 tracking-tight text-slate-600">
              Testimonials
            </p> */}
            <h6 className="hidden mt-2 text-5xl text-gray-900 sm:text-6xl sm:block">
              Tilbakemeldinger
            </h6>
            <h6 className="mt-2 text-5xl text-gray-900 sm:hidden sm:text-6xl">
              Tilbake-
              <br />
              meldinger
            </h6>
          </div>
          <div className="grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 mx-auto mt-16 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="bg-white shadow-lg rounded-2xl ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center px-6 py-4 border-t gap-x-4 gap-y-4 border-gray-900/10 sm:flex-nowrap">
                <div className="flex-auto sm:px-6">
                  <div className="font-semibold">
                    {featuredTestimonial.author.name}
                  </div>
                </div>
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div
                key={columnGroupIdx}
                className="space-y-8 xl:contents xl:space-y-0"
              >
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 &&
                          columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-8'
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.author.handle}
                        className="p-6 bg-white shadow-lg rounded-2xl ring-1 ring-gray-900/5"
                      >
                        <blockquote className="text-gray-900">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="flex items-center mt-6 gap-x-4">
                          <div>
                            <div className="font-semibold">
                              {testimonial.author.name}
                            </div>
                            <div className="text-gray-600">
                              {testimonial.author.company}
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
