export default function ComfortClasses() {
  return (
    <section id="comfort" className="py-24 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop"
          alt="Luxury Bus Seats"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choisissez votre <span className="bg-gradient-to-r from-red-600 to-red-800600 text-transparent bg-clip-text">classe de confort</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sélectionnez l'expérience qui correspond à vos besoins et profitez d'un voyage exceptionnel
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-200">
            <div className="absolute top-6 right-6">
              <span className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-semibold shadow-lg">
                Classique
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Silver Comfort Class</h3>
              <p className="text-gray-600 text-lg">L'essentiel du confort pour voyager sereinement</p>
            </div>

            <div className="mb-8">
              <p className="text-4xl font-bold text-gray-900">
                À partir de <span className="text-red-600">50,000 CFA</span>
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Espace généreux pour les jambes',
                'Divertissement vidéo à bord',
                'WiFi gratuit et illimité',
                'Bus climatisés',
                'Service de restauration',
                'Prises électriques',
                'Sièges confortables'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-gray-800 text-white py-4 rounded-full font-bold text-lg hover:bg-gray-900 hover:shadow-lg transition-all duration-200">
              Choisir Silver Class
            </button>
          </div>

          <div className="relative bg-gradient-to-br from-red-50 via-yellow-50 to-red-700100 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-red-300">
            <div className="absolute top-6 right-6">
              <span className="px-4 py-2 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full text-sm font-semibold shadow-lg">
                Premium
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Gold Comfort Class</h3>
              <p className="text-gray-700 text-lg">L'excellence du voyage avec services premium</p>
            </div>

            <div className="mb-8">
              <p className="text-4xl font-bold text-gray-900">
                Disponible sur <span className="bg-gradient-to-r from-red-600 to-red-800600 text-transparent bg-clip-text">toutes nos lignes</span>
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Tout ce qui est inclus en Silver Class',
                'Traitement prioritaire et embarquement',
                'Accès au salon Gold Comfort exclusif',
                'Écrans individuels personnels',
                'Système de divertissement avancé',
                'Sièges premium extra-larges',
                'Service de restauration amélioré',
                'Kit confort offert'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-800 font-medium text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-gradient-to-r from-red-600 to-yellow-500 text-white py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-200">
              Choisir Gold Class
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-red-100 to-red-800100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Vous hésitez entre les deux classes ?
            </h3>
            <p className="text-gray-700 mb-6 max-w-xl text-lg">
              Notre équipe est disponible 24/7 pour vous conseiller et vous aider à choisir la classe qui correspond le mieux à vos besoins
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-gradient-to-r from-red-600 to-red-800600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-200"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
