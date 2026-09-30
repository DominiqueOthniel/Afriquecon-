import Link from 'next/link';
import { ROUTES } from '@/lib/booking-data';

export default function HorairesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="mb-8">
          <Link href="/" className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à l'accueil
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Horaires et trajets</h1>
          <p className="text-gray-600 mb-8">Consultez les horaires de départ pour tous nos trajets</p>

          <div className="space-y-8">
            {ROUTES.map((route) => (
              <div key={route.id} className="border-2 border-gray-200 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{route.from} → {route.to}</h2>
                    <div className="flex gap-4 mt-2 text-sm text-gray-600">
                      <span>Durée: {route.duration}</span>
                      <span>Distance: {route.distance}</span>
                      <span>Fréquence: {route.frequency}</span>
                    </div>
                  </div>
                  <Link
                    href="/reserver"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl font-semibold transition-colors"
                  >
                    Réserver
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Silver Class</div>
                    <div className="text-xl font-bold text-red-600">{route.silverPrice.toLocaleString()} CFA</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Gold Class</div>
                    <div className="text-xl font-bold text-red-600">{route.goldPrice.toLocaleString()} CFA</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">Horaires de départ</div>
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
            <h3 className="font-bold text-lg mb-2">Information importante</h3>
            <p className="text-gray-700">
              Veuillez arriver à la gare 30 minutes avant l'heure de départ.
              Les horaires peuvent varier selon les conditions de circulation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
