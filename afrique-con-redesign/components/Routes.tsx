'use client';

import Link from 'next/link';
import { ROUTES } from '@/lib/booking-data';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

export default function Routes() {
  const { t, formatNumber } = useLanguage();

  return (
    <section id="routes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {t.routes.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.routes.subtitle}
          </p>
        </div>

        <div className="relative h-64 md:h-80 mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/images/can2021-2.jpg"
            alt={t.routes.fleetAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">{t.routes.fleetTitle}</h3>
            <p className="text-lg md:text-xl">{t.routes.fleetSubtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROUTES.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="bg-red-600 p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="text-sm font-semibold mb-1">{t.routes.departure}</p>
                    <p className="text-2xl font-bold">{route.from}</p>
                  </div>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="text-right">
                    <p className="text-sm font-semibold mb-1">{t.routes.arrival}</p>
                    <p className="text-2xl font-bold">{route.to}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <p className="text-2xl font-bold text-red-600">{formatNumber(route.silverPrice)}</p>
                    <p className="text-xs text-gray-600">CFA</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{route.duration}</p>
                    <p className="text-xs text-gray-600">{t.routes.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{t.frequency[route.frequency]}</p>
                    <p className="text-xs text-gray-600">{t.routes.departures}</p>
                  </div>
                </div>

                <Link
                  href={`/reserver?route=${route.id}`}
                  className="block w-full text-center bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  {t.routes.book}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="tel:+237678197361" className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-lg">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {t.routes.needHelp}
          </a>
        </div>
      </div>
    </section>
  );
}
