import Image from 'next/image';

export default function Routes() {
  const routes = [
    {
      from: 'Yaoundé',
      to: 'Lagos',
      duration: '8h',
      price: '50,000',
      frequency: 'Quotidien',
      image: '/images/service-bus-white.jpg'
    },
    {
      from: 'Douala',
      to: 'Abuja',
      duration: '10h',
      price: '55,000',
      frequency: 'Quotidien',
      image: '/images/service-bus-night.jpg'
    },
    {
      from: 'Buea',
      to: 'Port Harcourt',
      duration: '5h',
      price: '35,000',
      frequency: 'Quotidien',
      image: '/images/hero-bus-people.jpg'
    },
    {
      from: 'Yaoundé',
      to: 'Accra',
      duration: '24h',
      price: '85,000',
      frequency: '3x/semaine',
      image: '/images/passengers-boarding.jpg'
    },
    {
      from: 'Douala',
      to: 'Abidjan',
      duration: '30h',
      price: '95,000',
      frequency: '2x/semaine',
      image: '/images/service-bus-white.jpg'
    },
    {
      from: 'Buea',
      to: 'Yaoundé',
      duration: '4h',
      price: '15,000',
      frequency: 'Quotidien',
      image: '/images/service-bus-night.jpg'
    },
  ];

  return (
    <section id="routes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Nos destinations
          </h2>
          <p className="text-xl text-gray-600">
            Voyagez confortablement vers les grandes villes d'Afrique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={route.image}
                  alt={`${route.from} to ${route.to}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="bg-red-600 p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="text-sm font-semibold mb-1">Départ</p>
                    <p className="text-2xl font-bold">{route.from}</p>
                  </div>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="text-right">
                    <p className="text-sm font-semibold mb-1">Arrivée</p>
                    <p className="text-2xl font-bold">{route.to}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <p className="text-2xl font-bold text-red-600">{route.price}</p>
                    <p className="text-xs text-gray-600">CFA</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{route.duration}</p>
                    <p className="text-xs text-gray-600">Durée</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{route.frequency}</p>
                    <p className="text-xs text-gray-600">Départs</p>
                  </div>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-colors">
                  Réserver
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="tel:+237678197361" className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-lg">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Besoin d'aide ? +237 678 197 361
          </a>
        </div>
      </div>
    </section>
  );
}
