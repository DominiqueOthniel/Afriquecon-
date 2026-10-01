'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Booking, BookingStatus } from '@/lib/booking-data';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

const STATUSES: BookingStatus[] = ['en attente', 'confirmée', 'payée', 'annulée'];

interface BookingWithNumber extends Booking {
  number: string;
}

export default function AdminPage() {
  const { t, locale, formatPrice } = useLanguage();
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [bookings, setBookings] = useState<BookingWithNumber[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<BookingStatus | 'all'>('all');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem('adminToken', password);
    setAuthenticated(true);
    fetchBookings(password);
  };

  const fetchBookings = async (token: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/bookings', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      if (data.success) {
        setBookings(data.bookings);
      } else {
        setAuthenticated(false);
        sessionStorage.removeItem('adminToken');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (bookingNumber: string, status: BookingStatus) => {
    const token = sessionStorage.getItem('adminToken') || '';
    try {
      const response = await fetch('/api/admin/bookings', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ bookingNumber, status })
      });
      const data = await response.json();
      if (data.success) {
        fetchBookings(token);
      }
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  const exportCSV = () => {
    const csv = [
      t.admin.csvHeaders.join(','),
      ...filteredBookings.map(b => [
        b.number,
        t.status[b.status] ?? b.status,
        `${b.from} → ${b.to}`,
        b.date,
        b.departureTime,
        b.comfortClass,
        b.passengers,
        b.passengerName,
        b.phone,
        b.email || '',
        b.totalPrice,
        new Date(b.createdAt).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-GB')
      ].join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${t.admin.csvFilename}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  useEffect(() => {
    const token = sessionStorage.getItem('adminToken');
    if (token) {
      setPassword(token);
      setAuthenticated(true);
      fetchBookings(token);
    }
  }, []);

  const filteredBookings = filter === 'all' 
    ? bookings 
    : bookings.filter(b => b.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmée': return 'bg-blue-100 text-blue-800';
      case 'payée': return 'bg-green-100 text-green-800';
      case 'annulée': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="flex items-start justify-between gap-3 mb-6">
            <h1 className="text-3xl font-bold">{t.admin.title}</h1>
            <LanguageSwitcher />
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">{t.admin.password}</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-colors"
            >
              {t.admin.login}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{t.admin.heading}</h1>
            <p className="text-gray-600">{t.admin.subtitle}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={exportCSV}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              {t.admin.exportCsv}
            </button>
            <Link
              href="/"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              {t.admin.backToSite}
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl font-semibold transition-colors ${filter === 'all' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              {t.admin.filters.all} ({bookings.length})
            </button>
            <button
              onClick={() => setFilter('en attente')}
              className={`px-4 py-2 rounded-xl font-semibold transition-colors ${filter === 'en attente' ? 'bg-yellow-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              {t.admin.filters['en attente']} ({bookings.filter(b => b.status === 'en attente').length})
            </button>
            <button
              onClick={() => setFilter('confirmée')}
              className={`px-4 py-2 rounded-xl font-semibold transition-colors ${filter === 'confirmée' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              {t.admin.filters['confirmée']} ({bookings.filter(b => b.status === 'confirmée').length})
            </button>
            <button
              onClick={() => setFilter('payée')}
              className={`px-4 py-2 rounded-xl font-semibold transition-colors ${filter === 'payée' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              {t.admin.filters['payée']} ({bookings.filter(b => b.status === 'payée').length})
            </button>
            <button
              onClick={() => setFilter('annulée')}
              className={`px-4 py-2 rounded-xl font-semibold transition-colors ${filter === 'annulée' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              {t.admin.filters['annulée']} ({bookings.filter(b => b.status === 'annulée').length})
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200 text-left">
                    <th className="py-3 px-4 font-semibold">{t.admin.columns.number}</th>
                    <th className="py-3 px-4 font-semibold">{t.admin.columns.date}</th>
                    <th className="py-3 px-4 font-semibold">{t.admin.columns.route}</th>
                    <th className="py-3 px-4 font-semibold">{t.admin.columns.passengers}</th>
                    <th className="py-3 px-4 font-semibold">{t.admin.columns.name}</th>
                    <th className="py-3 px-4 font-semibold">{t.admin.columns.phone}</th>
                    <th className="py-3 px-4 font-semibold">{t.admin.columns.price}</th>
                    <th className="py-3 px-4 font-semibold">{t.admin.columns.status}</th>
                    <th className="py-3 px-4 font-semibold">{t.admin.columns.actions}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr key={booking.number} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-mono text-sm">{booking.number}</td>
                      <td className="py-3 px-4 text-sm">{booking.date} {booking.departureTime}</td>
                      <td className="py-3 px-4 text-sm">{booking.from} → {booking.to}</td>
                      <td className="py-3 px-4 text-sm">{booking.passengers}</td>
                      <td className="py-3 px-4 text-sm">{booking.passengerName}</td>
                      <td className="py-3 px-4 text-sm">{booking.phone}</td>
                      <td className="py-3 px-4 text-sm font-semibold">{formatPrice(booking.totalPrice)}</td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}>
                          {t.status[booking.status] ?? booking.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <select
                          value={booking.status}
                          onChange={(e) => updateStatus(booking.number, e.target.value as BookingStatus)}
                          className="text-sm border-2 border-gray-200 rounded-lg px-2 py-1 focus:border-red-600 focus:outline-none"
                        >
                          {STATUSES.map((status) => (
                            <option key={status} value={status}>{t.status[status]}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredBookings.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  {t.admin.empty}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
