'use client';

import Link from 'next/link';
import { ROUTES } from '@/lib/booking-data';
import PageTopBar from '@/components/PageTopBar';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

export default function HorairesPage() {
  const { t, formatPrice } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <PageTopBar />

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">{t.schedules.title}</h1>
          <p className="text-gray-600 mb-8">{t.schedules.subtitle}</p>

          <div className="space-y-8">
            {ROUTES.map((route) => (
              <div key={route.id} className="border-2 border-gray-200 rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{route.from} → {route.to}</h2>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-gray-600">
                      <span>{t.schedules.duration}: {route.duration}</span>
                      <span>{t.schedules.distance}: {route.distance}</span>
                      <span>{t.schedules.frequency}: {t.frequency[route.frequency]}</span>
                    </div>
                  </div>
                  <Link
                    href={`/reserver?route=${route.id}`}
                    className="shrink-0 text-center bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl font-semibold transition-colors"
                  >
                    {t.schedules.book}
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Silver Class</div>
                    <div className="text-xl font-bold text-red-600">{formatPrice(route.silverPrice)}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Gold Class</div>
                    <div className="text-xl font-bold text-red-600">{formatPrice(route.goldPrice)}</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">{t.schedules.departureTimes}</div>
                  <div className="flex flex-wrap gap-2">
                    {route.departureTimes.map((time) => (
                      <span key={time} className="px-4 py-2 bg-gray-100 rounded-lg font-semibold">
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-red-50 border-2 border-red-200 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2">{t.schedules.infoTitle}</h3>
            <p className="text-gray-700">
              {t.schedules.infoText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
