export default function ComfortClasses() {
  return (
    <section id="comfort" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choisissez votre <span className="gradient-text">classe de confort</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sélectionnez l'expérience qui correspond à vos besoins et profitez d'un voyage exceptionnel
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-200">
            <div className="absolute top-6 right-6">
              <span className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-semibold">
                Classique
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Silver Comfort Class</h3>
              <p className="text-gray-600 text-lg">L'essentiel du confort pour voyager sereinement</p>
            </div>

            <div className="mb-8">
              <p className="text-4xl font-bold text-gray-900">
                À partir de <span className="text-amber-600">50,000 CFA</span>
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
                  <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-gray-800 text-white py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-colors duration-200">
              Choisir Silver Class
            </button>
          </div>

          <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-amber-300">
            <div className="absolute top-6 right-6">
              <span className="px-4 py-2 bg-gradient-to-r from-amber-600 to-yellow-500 text-white rounded-full text-sm font-semibold">
                Premium
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Gold Comfort Class</h3>
              <p className="text-gray-700 text-lg">L'excellence du voyage avec services premium</p>
            </div>

            <div className="mb-8">
              <p className="text-4xl font-bold text-gray-900">
                Disponible sur <span className="gradient-text">toutes nos lignes</span>
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
                  <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-800 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-gradient-to-r from-amber-600 to-yellow-500 text-white py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Choisir Gold Class
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-amber-100 to-emerald-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Vous hésitez entre les deux classes ?
            </h3>
            <p className="text-gray-700 mb-4 max-w-xl">
              Notre équipe est disponible 24/7 pour vous conseiller et vous aider à choisir la classe qui correspond le mieux à vos besoins
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-gradient-to-r from-amber-600 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
