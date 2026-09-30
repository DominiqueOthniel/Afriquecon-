export default function Routes() {
  const routes = [
    {
      from: 'Yaoundé',
      to: 'Lagos',
      duration: '8h',
      price: '50,000',
      frequency: 'Quotidien'
    },
    {
      from: 'Douala',
      to: 'Abuja',
      duration: '10h',
      price: '55,000',
      frequency: 'Quotidien'
    },
    {
      from: 'Buea',
      to: 'Port Harcourt',
      duration: '5h',
      price: '35,000',
      frequency: 'Quotidien'
    },
    {
      from: 'Yaoundé',
      to: 'Accra',
      duration: '24h',
      price: '85,000',
      frequency: '3x/semaine'
    },
    {
      from: 'Douala',
      to: 'Abidjan',
      duration: '30h',
      price: '95,000',
      frequency: '2x/semaine'
    },
    {
      from: 'Buea',
      to: 'Yaoundé',
      duration: '4h',
      price: '15,000',
      frequency: 'Quotidien'
    },
  ];

  return (
    <section id="routes" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Nos destinations
          </h2>
          <p className="text-lg text-gray-600">
            Tarifs et horaires des principales routes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-200"
            >
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
                <div className="grid grid-cols-3 gap-4 text-center">
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

                <button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Réserver
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="tel:+237678197361" className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Besoin d'aide ? Appelez +237 678 197 361
          </a>
        </div>
      </div>
    </section>
  );
}
