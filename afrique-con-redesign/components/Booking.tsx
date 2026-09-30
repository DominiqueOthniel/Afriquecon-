'use client';

import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '1',
    class: 'silver'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre intérêt ! Cette fonctionnalité sera bientôt disponible. Contactez-nous directement pour réserver.');
  };

  const cities = [
    'Yaoundé', 'Douala', 'Buea', 'Bamenda',
    'Lagos', 'Abuja', 'Port Harcourt', 'Calabar', 'Ikom',
    'Accra', 'Lomé', 'Cotonou', 'Abidjan'
  ];

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Réservez votre <span className="gradient-text">voyage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous pour rechercher les horaires disponibles
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="from" className="block text-sm font-semibold text-gray-700 mb-2">
                  Ville de départ
                </label>
                <select
                  id="from"
                  value={formData.from}
                  onChange={(e) => setFormData({...formData, from: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Sélectionnez une ville</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="to" className="block text-sm font-semibold text-gray-700 mb-2">
                  Ville d'arrivée
                </label>
                <select
                  id="to"
                  value={formData.to}
                  onChange={(e) => setFormData({...formData, to: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Sélectionnez une ville</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                  Date de départ
                </label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="passengers" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre de passagers
                </label>
                <select
                  id="passengers"
                  value={formData.passengers}
                  onChange={(e) => setFormData({...formData, passengers: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'passager' : 'passagers'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Classe de confort
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${formData.class === 'silver' ? 'border-amber-500 bg-amber-50' : 'border-gray-200 hover:border-gray-300'}`}>
                  <input
                    type="radio"
                    name="class"
                    value="silver"
                    checked={formData.class === 'silver'}
                    onChange={(e) => setFormData({...formData, class: e.target.value})}
                    className="mr-3"
                  />
                  <span className="font-semibold">Silver Comfort Class</span>
                  <span className="block text-sm text-gray-600 ml-6">Confort essentiel</span>
                </label>

                <label className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${formData.class === 'gold' ? 'border-amber-500 bg-amber-50' : 'border-gray-200 hover:border-gray-300'}`}>
                  <input
                    type="radio"
                    name="class"
                    value="gold"
                    checked={formData.class === 'gold'}
                    onChange={(e) => setFormData({...formData, class: e.target.value})}
                    className="mr-3"
                  />
                  <span className="font-semibold">Gold Comfort Class</span>
                  <span className="block text-sm text-gray-600 ml-6">Expérience premium</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-600 to-emerald-600 text-white py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Rechercher les horaires</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              Ou appelez-nous directement au <a href="tel:+237678197361" className="text-amber-600 font-semibold hover:underline">+237 678 197 361</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
