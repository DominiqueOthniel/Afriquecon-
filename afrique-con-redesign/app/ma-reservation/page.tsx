'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Booking } from '@/lib/booking-data';

export default function MaReservationPage() {
  const [bookingNumber, setBookingNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showBooking, setShowBooking] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setShowBooking(false);

    try {
      const response = await fetch(`/api/bookings?number=${encodeURIComponent(bookingNumber)}&phone=${encodeURIComponent(phone)}`);
      const data = await response.json();

      if (data.success) {
        setBooking(data.booking);
        setShowBooking(true);
      } else {
        setError('Réservation introuvable. Vérifiez votre numéro et téléphone.');
      }
    } catch (err) {
      setError('Erreur lors de la recherche. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelRequest = () => {
    if (confirm('Voulez-vous vraiment demander l\'annulation de cette réservation ?')) {
      const message = `Bonjour, je souhaite annuler ma réservation:\nNuméro: ${bookingNumber}\nNom: ${booking?.passengerName}\nTéléphone: ${booking?.phone}`;
      window.open(`https://wa.me/237620412171?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmée': return 'bg-blue-100 text-blue-800';
      case 'payée': return 'bg-green-100 text-green-800';
      case 'annulée': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <div className="mb-8">
          <Link href="/" className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à l'accueil
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Ma réservation</h1>
          <p className="text-gray-600 mb-8">Recherchez votre réservation avec votre numéro et téléphone</p>

          <form onSubmit={handleSearch} className="space-y-4 mb-8">
            <div>
              <label className="block text-sm font-semibold mb-2">Numéro de réservation</label>
              <input
                type="text"
                value={bookingNumber}
                onChange={(e) => setBookingNumber(e.target.value)}
                placeholder="AC-XXXXXX"
                required
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Téléphone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+237 6XX XXX XXX"
                required
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none"
              />
            </div>
            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-red-700">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white py-4 rounded-xl font-semibold transition-colors"
            >
              {loading ? 'Recherche...' : 'Rechercher ma réservation'}
            </button>
          </form>

          {showBooking && booking && (
            <div className="border-t-2 border-gray-200 pt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Détails de la réservation</h2>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(booking.status)}`}>
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Numéro</span>
                  <span className="font-semibold">{bookingNumber}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Trajet</span>
                  <span className="font-semibold">{booking.from} → {booking.to}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Date</span>
                  <span className="font-semibold">{booking.date}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Horaire</span>
                  <span className="font-semibold">{booking.departureTime}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Classe</span>
                  <span className="font-semibold">{booking.comfortClass === 'silver' ? 'Silver' : 'Gold'} Comfort</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Passagers</span>
                  <span className="font-semibold">{booking.passengers}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Nom</span>
                  <span className="font-semibold">{booking.passengerName}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-600 font-bold">Prix total</span>
                  <span className="font-bold text-red-600 text-xl">{booking.totalPrice.toLocaleString()} CFA</span>
                </div>
              </div>

              {booking.status !== 'annulée' && booking.status !== 'payée' && (
                <div className="flex gap-3">
                  <button
                    onClick={handleCancelRequest}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Demander l'annulation
                  </button>
                  <a
                    href={`https://wa.me/237620412171?text=${encodeURIComponent(`Bonjour, j'ai une question sur ma réservation ${bookingNumber}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-colors text-center"
                  >
                    Contacter sur WhatsApp
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
