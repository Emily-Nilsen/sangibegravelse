import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function Personvernerklæring() {
  return (
    <div className="px-6 py-32 bg-white lg:px-8">
      <div className="max-w-3xl mx-auto text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-slate-600">
          Sang i begravelse
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Personvernerklæring
        </h1>
        <p className="mt-6 text-xl leading-8">
          Din personvern er viktig for oss. Denne personvernerklæringen
          forklarer hvordan ‘Sang i begravelse’ samler inn, bruker, beskytter og
          deler informasjon som samles inn gjennom nettkontaktskjemaet.
        </p>

        <div className="max-w-2xl">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Informasjon vi samler inn
          </h2>
          <p className="mt-6 ">
            Når du sender inn informasjon gjennom nettkontaktskjemaet på ‘Sang i
            begravelse’, kan vi samle inn følgende typer informasjon:
          </p>
          <ul role="list" className="max-w-xl mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="flex-none w-5 h-5 mt-1 text-slate-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Kontaktinformasjon.
                </strong>{' '}
                Ditt navn, e-postadresse, telefonnummer og eventuell
                tilleggsinformasjon du oppgir i meldingen.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="flex-none w-5 h-5 mt-1 text-slate-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Meldingsinnhold.
                </strong>{' '}
                Eventuelle meldinger, spørsmål eller kommentarer du velger å
                inkludere i kontaktskjemaet.
              </span>
            </li>
          </ul>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Hvordan vi bruker informasjonen
          </h2>
          <p className="mt-6">
            Vi bruker informasjonen som samles inn gjennom nettkontaktskjemaet
            til følgende formål:
          </p>
          <ul role="list" className="max-w-xl mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="flex-none w-5 h-5 mt-1 text-slate-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Kontakt.
                </strong>{' '}
                Vi bruker kontaktinformasjonen for å kunne svare på dine
                henvendelser og forespørsler.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="flex-none w-5 h-5 mt-1 text-slate-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Kundeservice.
                </strong>{' '}
                Vi bruker meldingsinnholdet for å gi deg relevant informasjon og
                assistanse i forbindelse med våre tjenester.
              </span>
            </li>
          </ul>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Databeskyttelse og deling
          </h2>
          <p className="mt-6">
            Vi tar ditt personvern på alvor og deler ikke din informasjon med
            tredjeparter uten ditt samtykke, med mindre det er nødvendig for å
            oppfylle dine forespørsler eller i samsvar med gjeldende lover og
            regler.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Lagring av informasjon
          </h2>
          <p className="mt-6">
            Vi lagrer informasjonen du sender inn gjennom nettkontaktskjemaet så
            lenge det er nødvendig for å håndtere dine henvendelser og gi deg
            relevant kundeservice. Etter dette kan vi lagre informasjonen i
            samsvar med gjeldende lover og regler.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Dine rettigheter
          </h2>
          <p className="mt-6">
            Du har rett til å be om innsyn i den informasjonen vi har samlet inn
            om deg gjennom nettkontaktskjemaet, samt rett til å be om retting,
            sletting eller begrensning av bruken av denne informasjonen. Du har
            også rett til å trekke tilbake eventuelle samtykker du har gitt.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Kontakt oss
          </h2>
          <p className="mt-6">
            Hvis du har spørsmål eller bekymringer angående personvernet ditt
            eller vår bruk av informasjonen din, vennligst kontakt oss på{' '}
            <span className="font-semibold">nils.g.nilsen@gmail.com</span>.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Endringer i personvernerklæringen
          </h2>
          <p className="mt-6">
            Vi forbeholder oss retten til å oppdatere denne
            personvernerklæringen når som helst. Eventuelle endringer vil bli
            publisert på nettsiden vår, og endringsdatoen øverst på denne
            erklæringen vil bli justert.
          </p>
        </div>
      </div>
    </div>
  );
}
