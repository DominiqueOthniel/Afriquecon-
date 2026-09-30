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
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form) as any).toString()
    })
      .then(() => {
        setFormSubmitted(true);
        setFormData({ from: '', to: '', date: '', passengers: '1', class: 'silver' });
      })
      .catch(() => alert('Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter directement.'));
  };

  const cities = [
    'Yaoundé', 'Douala', 'Buea', 'Bamenda',
    'Lagos', 'Abuja', 'Port Harcourt', 'Calabar', 'Ikom',
    'Accra', 'Lomé', 'Cotonou', 'Abidjan'
  ];

  if (formSubmitted) {
    return (
      <section id="booking" className="py-24 bg-gradient-to-br from-red-50 via-white to-red-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center bg-white rounded-3xl shadow-2xl p-12">
            <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4">Demande envoyée avec succès</h3>
            <p className="text-xl text-gray-600 mb-8">
              Nous avons bien reçu votre demande de réservation. Notre équipe vous contactera dans les plus brefs délais.
            </p>
            <button
              onClick={() => setFormSubmitted(false)}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
            >
              Faire une nouvelle recherche
            </button>
            <p className="text-sm text-gray-500 mt-6">
              Ou appelez-nous directement au <a href="tel:+237678197361" className="text-red-600 font-semibold hover:underline">+237 678 197 361</a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-gradient-to-br from-red-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1526512340740-9217d0159da9?q=80&w=2070&auto=format&fit=crop"
          alt="Map"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Réservez votre <span className="text-red-600">voyage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous pour rechercher les horaires disponibles
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form 
            onSubmit={handleSubmit} 
            name="reservation" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            <input type="hidden" name="form-name" value="reservation" />
            <div style={{ display: 'none' }}>
              <label>
                Ne pas remplir: <input name="bot-field" />
              </label>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="from" className="block text-sm font-semibold text-gray-700 mb-3">
                  Ville de départ
                </label>
                <select
                  id="from"
                  name="from"
                  value={formData.from}
                  onChange={(e) => setFormData({...formData, from: e.target.value})}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors text-gray-900"
                  required
                >
                  <option value="">Sélectionnez une ville</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="to" className="block text-sm font-semibold text-gray-700 mb-3">
                  Ville d'arrivée
                </label>
                <select
                  id="to" name="to"
                  value={formData.to}
                  onChange={(e) => setFormData({...formData, to: e.target.value})}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors text-gray-900"
                  required
                >
                  <option value="">Sélectionnez une ville</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-3">
                  Date de départ
                </label>
                <input
                  type="date"
                  id="date" name="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors text-gray-900"
                  required
                />
              </div>

              <div>
                <label htmlFor="passengers" className="block text-sm font-semibold text-gray-700 mb-3">
                  Nombre de passagers
                </label>
                <select
                  id="passengers" name="passengers"
                  value={formData.passengers}
                  onChange={(e) => setFormData({...formData, passengers: e.target.value})}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors text-gray-900"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'passager' : 'passagers'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Classe de confort
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className={`cursor-pointer p-6 rounded-xl border-2 transition-all ${formData.class === 'silver' ? 'border-red-500 bg-red-50 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}>
                  <input
                    type="radio"
                    name="comfort-class"
                    value="silver"
                    checked={formData.class === 'silver'}
                    onChange={(e) => setFormData({...formData, class: e.target.value})}
                    className="mr-3"
                  />
                  <span className="font-semibold text-gray-900">Silver Comfort Class</span>
                  <span className="block text-sm text-gray-600 ml-6 mt-1">Confort essentiel</span>
                </label>

                <label className={`cursor-pointer p-6 rounded-xl border-2 transition-all ${formData.class === 'gold' ? 'border-red-500 bg-red-50 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}>
                  <input
                    type="radio"
                    name="comfort-class"
                    value="gold"
                    checked={formData.class === 'gold'}
                    onChange={(e) => setFormData({...formData, class: e.target.value})}
                    className="mr-3"
                  />
                  <span className="font-semibold text-gray-900">Gold Comfort Class</span>
                  <span className="block text-sm text-gray-600 ml-6 mt-1">Expérience premium</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Rechercher les horaires</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              Ou appelez-nous directement au <a href="tel:+237678197361" className="text-red-600 font-semibold hover:underline">+237 678 197 361</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
