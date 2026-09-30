import { NextRequest, NextResponse } from 'next/server';
import { getStore } from '@netlify/blobs';
import { v4 as uuidv4 } from 'uuid';
import type { Booking } from '@/lib/booking-data';

function generateBookingNumber(): string {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `AC-${randomNum}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const bookingNumber = generateBookingNumber();
    const booking: Booking = {
      id: uuidv4(),
      routeId: body.routeId,
      from: body.from,
      to: body.to,
      date: body.date,
      departureTime: body.departureTime,
      comfortClass: body.comfortClass,
      passengers: body.passengers,
      passengerName: body.passengerName,
      phone: body.phone,
      email: body.email,
      totalPrice: body.totalPrice,
      status: 'en attente',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const store = getStore('bookings');
    await store.setJSON(bookingNumber, booking);

    return NextResponse.json({ success: true, bookingNumber, booking });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json({ success: false, error: 'Failed to create booking' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const bookingNumber = searchParams.get('number');
    const phone = searchParams.get('phone');

    if (!bookingNumber || !phone) {
      return NextResponse.json({ success: false, error: 'Missing parameters' }, { status: 400 });
    }

    const store = getStore('bookings');
    const booking = await store.get(bookingNumber, { type: 'json' }) as Booking | null;

    if (!booking) {
      return NextResponse.json({ success: false, error: 'Booking not found' }, { status: 404 });
    }

    if (booking.phone !== phone) {
      return NextResponse.json({ success: false, error: 'Invalid phone number' }, { status: 403 });
    }

    return NextResponse.json({ success: true, booking, bookingNumber });
  } catch (error) {
    console.error('Fetch booking error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch booking' }, { status: 500 });
  }
}
