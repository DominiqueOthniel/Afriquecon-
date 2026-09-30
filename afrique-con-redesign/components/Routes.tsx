export default function Routes() {
  const routes = [
    {
      from: 'Yaoundé',
      to: 'Lagos',
      duration: '8h',
      price: '50,000',
      frequency: 'Quotidien',
      stops: ['Douala', 'Calabar']
    },
    {
      from: 'Douala',
      to: 'Abuja',
      duration: '10h',
      price: '55,000',
      frequency: 'Quotidien',
      stops: ['Bamenda', 'Enugu']
    },
    {
      from: 'Buea',
      to: 'Port Harcourt',
      duration: '5h',
      price: '35,000',
      frequency: 'Plusieurs départs/jour',
      stops: ['Ikom', 'Calabar']
    },
    {
      from: 'Yaoundé',
      to: 'Accra',
      duration: '24h',
      price: '85,000',
      frequency: '3x/semaine',
      stops: ['Lagos', 'Cotonou', 'Lomé']
    },
    {
      from: 'Douala',
      to: 'Abidjan',
      duration: '30h',
      price: '95,000',
      frequency: '2x/semaine',
      stops: ['Lagos', 'Accra']
    },
    {
      from: 'Buea',
      to: 'Yaoundé',
      duration: '4h',
      price: '15,000',
      frequency: 'Plusieurs départs/jour',
      stops: ['Douala']
    },
  ];

  return (
    <section id="routes" className="py-24 bg-gradient-to-br from-gray-50 to-red-70050 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop"
          alt="African Road"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="bg-gradient-to-r from-red-600 to-red-800600 text-transparent bg-clip-text">destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connexions rapides et sûres vers de nombreuses destinations en Afrique de l'Ouest et Centrale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-red-500 to-red-800500 p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="text-sm opacity-90 mb-1">Départ</p>
                    <p className="text-2xl font-bold">{route.from}</p>
                  </div>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="text-right">
                    <p className="text-sm opacity-90 mb-1">Arrivée</p>
                    <p className="text-2xl font-bold">{route.to}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Durée</p>
                    <p className="font-semibold text-gray-900">{route.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Prix à partir de</p>
                    <p className="font-bold text-red-600">{route.price} CFA</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Escales</p>
                  <div className="flex flex-wrap gap-2">
                    {route.stops.map((stop, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {stop}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-red-600 font-medium flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {route.frequency}
                  </span>
                  <button className="text-red-600 hover:text-red-700 font-semibold text-sm hover:underline">
                    Réserver →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Plus de destinations disponibles</p>
          <button className="bg-gradient-to-r from-red-600 to-red-800600 text-white px-10 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-200">
            Voir toutes les destinations
          </button>
        </div>
      </div>
    </section>
  );
}
