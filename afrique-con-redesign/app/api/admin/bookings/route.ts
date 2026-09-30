import { NextRequest, NextResponse } from 'next/server';
import { getStore } from '@netlify/blobs';
import type { Booking, BookingStatus } from '@/lib/booking-data';

function checkAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  const password = process.env.ADMIN_PASSWORD || 'admin123';
  
  if (!authHeader || authHeader !== `Bearer ${password}`) {
    return false;
  }
  return true;
}

export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const store = getStore('bookings');
    const { blobs } = await store.list();
    
    const bookings = await Promise.all(
      blobs.map(async (blob) => {
        const booking = await store.get(blob.key, { type: 'json' }) as Booking;
        return { number: blob.key, ...booking };
      })
    );

    bookings.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({ success: true, bookings });
  } catch (error) {
    console.error('Admin list error:', error);
    return NextResponse.json({ success: false, error: 'Failed to list bookings' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { bookingNumber, status } = body;

    if (!bookingNumber || !status) {
      return NextResponse.json({ success: false, error: 'Missing parameters' }, { status: 400 });
    }

    const store = getStore('bookings');
    const booking = await store.get(bookingNumber, { type: 'json' }) as Booking | null;

    if (!booking) {
      return NextResponse.json({ success: false, error: 'Booking not found' }, { status: 404 });
    }

    booking.status = status as BookingStatus;
    booking.updatedAt = new Date().toISOString();

    await store.setJSON(bookingNumber, booking);

    return NextResponse.json({ success: true, booking });
  } catch (error) {
    console.error('Admin update error:', error);
    return NextResponse.json({ success: false, error: 'Failed to update booking' }, { status: 500 });
  }
}
