'use client';

import { useState } from 'react';
import type { Booking } from '@/lib/booking-data';
import PageTopBar from '@/components/PageTopBar';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

export default function MaReservationPage() {
  const { t, formatPrice, formatDate } = useLanguage();
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
        setError(t.myBooking.notFound);
      }
    } catch (err) {
      setError(t.myBooking.searchError);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelRequest = () => {
    if (confirm(t.myBooking.cancelConfirm)) {
      const message = t.myBooking.cancelMessage(bookingNumber, booking?.passengerName ?? '', booking?.phone ?? '');
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
        <PageTopBar />

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">{t.myBooking.title}</h1>
          <p className="text-gray-600 mb-8">{t.myBooking.subtitle}</p>

          <form onSubmit={handleSearch} className="space-y-4 mb-8">
            <div>
              <label className="block text-sm font-semibold mb-2">{t.myBooking.number}</label>
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
              <label className="block text-sm font-semibold mb-2">{t.myBooking.phone}</label>
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
              {loading ? t.myBooking.searching : t.myBooking.search}
            </button>
          </form>

          {showBooking && booking && (
            <div className="border-t-2 border-gray-200 pt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">{t.myBooking.details}</h2>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(booking.status)}`}>
                  {t.status[booking.status] ?? booking.status}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">{t.myBooking.numberLabel}</span>
                  <span className="font-semibold">{bookingNumber}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">{t.myBooking.route}</span>
                  <span className="font-semibold">{booking.from} → {booking.to}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">{t.myBooking.date}</span>
                  <span className="font-semibold">{formatDate(booking.date)}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">{t.myBooking.time}</span>
                  <span className="font-semibold">{booking.departureTime}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">{t.myBooking.class}</span>
                  <span className="font-semibold">{booking.comfortClass === 'silver' ? 'Silver' : 'Gold'} Comfort</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">{t.myBooking.passengers}</span>
                  <span className="font-semibold">{booking.passengers}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">{t.myBooking.name}</span>
                  <span className="font-semibold">{booking.passengerName}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-600 font-bold">{t.myBooking.total}</span>
                  <span className="font-bold text-red-600 text-xl">{formatPrice(booking.totalPrice)}</span>
                </div>
              </div>

              {booking.status !== 'annulée' && booking.status !== 'payée' && (
                <div className="flex gap-3">
                  <button
                    onClick={handleCancelRequest}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-xl font-semibold transition-colors"
                  >
                    {t.myBooking.requestCancel}
                  </button>
                  <a
                    href={`https://wa.me/237620412171?text=${encodeURIComponent(t.myBooking.questionMessage(bookingNumber))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-colors text-center"
                  >
                    {t.myBooking.contactWhatsApp}
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
