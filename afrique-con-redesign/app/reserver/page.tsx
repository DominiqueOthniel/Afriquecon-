'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ROUTES, COMFORT_CLASSES } from '@/lib/booking-data';

export default function ReserverPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    routeId: '',
    date: '',
    departureTime: '',
    comfortClass: 'silver' as 'silver' | 'gold',
    passengers: 1,
    passengerName: '',
    phone: '',
    email: ''
  });
  const [bookingNumber, setBookingNumber] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const routeParam = params.get('route');
    const classParam = params.get('class');
    const route = ROUTES.find(r => r.id === routeParam);
    setFormData(prev => ({
      ...prev,
      routeId: route ? route.id : prev.routeId,
      comfortClass: classParam === 'gold' || classParam === 'silver' ? classParam : prev.comfortClass
    }));
    if (route) setStep(2);
  }, []);
  const [loading, setLoading] = useState(false);

  const selectedRoute = ROUTES.find(r => r.id === formData.routeId);
  const price = selectedRoute
    ? (formData.comfortClass === 'silver' ? selectedRoute.silverPrice : selectedRoute.goldPrice) * formData.passengers
    : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          from: selectedRoute?.from,
          to: selectedRoute?.to,
          totalPrice: price
        })
      });

      const data = await response.json();
      if (data.success) {
        setBookingNumber(data.bookingNumber);
        setStep(5);
      }
    } catch (error) {
      alert('Erreur lors de la réservation. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  const sendWhatsApp = () => {
    const message = `Bonjour, je confirme ma réservation:\nNuméro: ${bookingNumber}\nTrajet: ${selectedRoute?.from} → ${selectedRoute?.to}\nDate: ${formData.date}\nHoraire: ${formData.departureTime}\nClasse: ${formData.comfortClass === 'silver' ? 'Silver' : 'Gold'}\nPassagers: ${formData.passengers}\nPrix total: ${price.toLocaleString('fr-FR')} CFA\nNom: ${formData.passengerName}\nTéléphone: ${formData.phone}`;
    window.open(`https://wa.me/237620412171?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à l'accueil
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">Réserver un billet</h1>
          <p className="text-gray-600 mb-6 sm:mb-8">Remplissez le formulaire pour réserver votre voyage</p>

          <div className="flex items-center mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className={`flex items-center ${s < 4 ? 'flex-1' : ''}`}>
                <div className={`w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {s}
                </div>
                {s < 4 && <div className={`flex-1 h-1 mx-1 ${step > s ? 'bg-red-600' : 'bg-gray-200'}`}></div>}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Choisissez votre trajet</h2>
                <div className="space-y-4">
                  {ROUTES.map(route => (
                    <label key={route.id} className={`relative block p-4 border-2 rounded-xl cursor-pointer hover:border-red-600 ${formData.routeId === route.id ? 'border-red-600 bg-red-50' : 'border-gray-200'}`}>
                      <input
                        type="radio"
                        name="route"
                        value={route.id}
                        checked={formData.routeId === route.id}
                        onChange={(e) => setFormData({ ...formData, routeId: e.target.value, departureTime: '' })}
                        className="sr-only"
                      />
                      <div className="flex justify-between items-center gap-3">
                        <div className="min-w-0">
                          <div className="font-bold text-base sm:text-lg text-gray-900">{route.from} → {route.to}</div>
                          <div className="text-sm text-gray-600">{route.duration} • {route.frequency}</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-base sm:text-lg font-bold text-red-600 whitespace-nowrap">{route.silverPrice.toLocaleString('fr-FR')} CFA</div>
                          <div className="text-sm text-gray-600">à partir de</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => formData.routeId && setStep(2)}
                  disabled={!formData.routeId}
                  className="w-full mt-6 bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white py-4 rounded-xl font-semibold transition-colors"
                >
                  Continuer
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Date et horaire</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Date de départ</label>
                    <input
                      type="date"
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Horaire de départ</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {selectedRoute?.departureTimes.map(time => (
                        <label key={time} className={`relative block p-3 border-2 rounded-xl cursor-pointer text-center font-semibold hover:border-red-600 ${formData.departureTime === time ? 'border-red-600 bg-red-50' : 'border-gray-200'}`}>
                          <input
                            type="radio"
                            name="time"
                            value={time}
                            checked={formData.departureTime === time}
                            onChange={(e) => setFormData({ ...formData, departureTime: e.target.value })}
                            className="sr-only"
                          />
                          {time}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 rounded-xl font-semibold transition-colors"
                  >
                    Retour
                  </button>
                  <button
                    type="button"
                    onClick={() => formData.date && formData.departureTime && setStep(3)}
                    disabled={!formData.date || !formData.departureTime}
                    className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white py-4 rounded-xl font-semibold transition-colors"
                  >
                    Continuer
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Classe et passagers</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3">Classe de confort</label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {['silver', 'gold'].map(cls => (
                        <label key={cls} className={`relative block p-4 sm:p-6 border-2 rounded-xl cursor-pointer hover:border-red-600 ${formData.comfortClass === cls ? 'border-red-600 bg-red-50' : 'border-gray-200'}`}>
                          <input
                            type="radio"
                            name="class"
                            value={cls}
                            checked={formData.comfortClass === cls}
                            onChange={(e) => setFormData({ ...formData, comfortClass: e.target.value as 'silver' | 'gold' })}
                            className="sr-only"
                          />
                          <div className="font-bold text-lg mb-2">{COMFORT_CLASSES[cls as 'silver' | 'gold'].name}</div>
                          <div className="text-2xl font-bold text-red-600">
                            {((cls === 'silver' ? selectedRoute?.silverPrice : selectedRoute?.goldPrice) || 0).toLocaleString('fr-FR')} CFA
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nombre de passagers</label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={formData.passengers}
                      onChange={(e) => setFormData({ ...formData, passengers: parseInt(e.target.value) })}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 rounded-xl font-semibold transition-colors"
                  >
                    Retour
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold transition-colors"
                  >
                    Continuer
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Informations passager</h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nom complet</label>
                    <input
                      type="text"
                      value={formData.passengerName}
                      onChange={(e) => setFormData({ ...formData, passengerName: e.target.value })}
                      required
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Téléphone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="+237 6XX XXX XXX"
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email (optionnel)</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre@email.com"
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <h3 className="font-bold text-lg mb-4">Récapitulatif</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Trajet</span>
                      <span className="font-semibold">{selectedRoute?.from} → {selectedRoute?.to}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date</span>
                      <span className="font-semibold">{formData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Horaire</span>
                      <span className="font-semibold">{formData.departureTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Classe</span>
                      <span className="font-semibold">{formData.comfortClass === 'silver' ? 'Silver' : 'Gold'} Comfort Class</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Passagers</span>
                      <span className="font-semibold">{formData.passengers}</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t-2 border-gray-200">
                      <span className="font-bold">Prix total</span>
                      <span className="font-bold text-red-600 text-xl">{price.toLocaleString('fr-FR')} CFA</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 rounded-xl font-semibold transition-colors"
                  >
                    Retour
                  </button>
                  <button
                    type="submit"
                    disabled={loading || !formData.passengerName || !formData.phone}
                    className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white py-4 rounded-xl font-semibold transition-colors"
                  >
                    {loading ? 'En cours...' : 'Confirmer la réservation'}
                  </button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-3">Réservation confirmée !</h2>
                <p className="text-xl text-gray-600 mb-6">Votre numéro de réservation est</p>
                <div className="bg-red-50 border-2 border-red-600 rounded-xl p-6 mb-8">
                  <div className="text-4xl font-bold text-red-600">{bookingNumber}</div>
                  <p className="text-sm text-gray-600 mt-2">Conservez ce numéro pour suivre votre réservation</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-6 text-left">
                  <h3 className="font-bold mb-3">Paiement</h3>
                  <p className="text-sm mb-4">Payez en agence ou par Mobile Money:</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Orange Money:</span>
                      <span>+237 678 197 361</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">MTN MoMo:</span>
                      <span>+237 678 197 361</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={sendWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition-colors inline-flex items-center justify-center"
                  >
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Envoyer sur WhatsApp
                  </button>
                  <Link
                    href="/ma-reservation"
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 rounded-xl font-semibold transition-colors text-center"
                  >
                    Voir ma réservation
                  </Link>
                  <Link
                    href="/"
                    className="w-full bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-800 py-4 rounded-xl font-semibold transition-colors text-center"
                  >
                    Retour à l'accueil
                  </Link>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
