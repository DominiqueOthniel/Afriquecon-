'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bus-people.jpg"
          alt="Afrique-con Bus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 mb-20 md:mb-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Voyagez en toute sécurité à travers l'Afrique
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Transport inter-urbain de qualité. Cameroun, Nigeria, Ghana, Togo, Bénin, Côte d'Ivoire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/reserver"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Réserver un billet</span>
            </Link>
            
            <a
              href="tel:+237678197361"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 text-white px-10 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+237 678 197 361</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-2">50,000 CFA</div>
              <p className="text-gray-300">À partir de</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-2">Quotidien</div>
              <p className="text-gray-300">Départs multiples</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <p className="text-gray-300">Service client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
