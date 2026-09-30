import Image from 'next/image';

export default function ComfortClasses() {
  return (
    <section id="comfort" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Classes de confort
          </h2>
          <p className="text-xl text-gray-600">
            Choisissez l'expérience qui vous correspond
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
            <div className="relative h-64">
              <Image
                src="/images/service-interior.jpg"
                alt="Silver Comfort Class"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-semibold">
                  Classique
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Silver Comfort Class</h3>
              <p className="text-gray-600 text-lg mb-6">L'essentiel du confort pour voyager sereinement</p>

              <div className="mb-6">
                <p className="text-4xl font-bold text-gray-900">
                  <span className="text-red-600">50,000 CFA</span>
                </p>
                <p className="text-gray-600">à partir de</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Sièges confortables',
                  'Espace pour les jambes',
                  'WiFi gratuit',
                  'Bus climatisés',
                  'Restauration à bord',
                  'Prises électriques',
                  'Divertissement vidéo'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-4 rounded-xl font-semibold transition-colors">
                Choisir Silver Class
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-red-200">
            <div className="relative h-64">
              <Image
                src="/images/bus-comfort-class.jpg"
                alt="Gold Comfort Class"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="px-4 py-2 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-full text-sm font-semibold">
                  Premium
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Gold Comfort Class</h3>
              <p className="text-gray-700 text-lg mb-6">L'excellence du voyage avec services premium</p>

              <div className="mb-6">
                <p className="text-2xl font-bold text-red-600">
                  Disponible sur toutes nos lignes
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Tout ce qui est inclus en Silver',
                  'Embarquement prioritaire',
                  'Salon Gold Comfort exclusif',
                  'Écrans individuels HD',
                  'Sièges premium extra-larges',
                  'Restauration améliorée',
                  'Kit confort offert',
                  'Service personnalisé'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-red-600 to-yellow-500 hover:shadow-xl text-white py-4 rounded-xl font-semibold transition-all">
                Choisir Gold Class
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-red-50 rounded-2xl p-8 shadow-lg max-w-2xl">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Vous hésitez entre les deux classes ?
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              Notre équipe est disponible 24/7 pour vous conseiller
            </p>
            <a 
              href="tel:+237678197361" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              +237 678 197 361
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
