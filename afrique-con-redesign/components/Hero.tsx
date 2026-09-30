'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop"
          alt="Luxury Bus Travel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 animate-slide-up">
            <span className="inline-block px-6 py-3 bg-red-500/20 backdrop-blur-sm border border-red-500/50 text-red-300 rounded-full text-sm font-semibold mb-6">
              Votre partenaire de confiance depuis 2010
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white animate-slide-up leading-tight" style={{ animationDelay: '0.1s' }}>
            Voyagez à travers l'Afrique
            <span className="block text-white drop-shadow-2xl mt-4" style={{ textShadow: '0 0 30px rgba(237, 28, 36, 0.8), 0 0 60px rgba(237, 28, 36, 0.6)' }}>
              dans un confort exceptionnel
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Découvrez une nouvelle dimension du voyage inter-urbain. Connexions quotidiennes entre le Cameroun, le Nigeria, le Bénin, le Togo, le Ghana et la Côte d'Ivoire.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link
              href="#booking"
              className="bg-gradient-to-r from-red-600 to-red-700500 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3"
            >
              <span>Réserver un billet</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              href="#services"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Découvrir nos services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Départs quotidiens</h3>
              <p className="text-gray-300">Multiples départs chaque jour pour plus de flexibilité</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-800600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Sécurité garantie</h3>
              <p className="text-gray-300">Voyagez en toute sérénité avec nos standards élevés</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Confort premium</h3>
              <p className="text-gray-300">Sièges spacieux, climatisation et divertissement à bord</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <Link href="#services" className="block">
          <svg className="w-8 h-8 text-white/60 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
