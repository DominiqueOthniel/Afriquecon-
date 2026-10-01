export type FrequencyKey = 'daily' | 'thrice-weekly' | 'twice-weekly';

export const ROUTES = [
  {
    id: 'yaounde-lagos',
    from: 'Yaoundé',
    to: 'Lagos',
    duration: '8h',
    distance: '450 km',
    silverPrice: 50000,
    goldPrice: 75000,
    frequency: 'daily' as FrequencyKey,
    departureTimes: ['06:00', '10:00', '14:00', '18:00']
  },
  {
    id: 'douala-abuja',
    from: 'Douala',
    to: 'Abuja',
    duration: '10h',
    distance: '600 km',
    silverPrice: 55000,
    goldPrice: 82000,
    frequency: 'daily' as FrequencyKey,
    departureTimes: ['06:00', '12:00', '18:00']
  },
  {
    id: 'buea-port-harcourt',
    from: 'Buea',
    to: 'Port Harcourt',
    duration: '5h',
    distance: '250 km',
    silverPrice: 35000,
    goldPrice: 52000,
    frequency: 'daily' as FrequencyKey,
    departureTimes: ['07:00', '11:00', '15:00', '19:00']
  },
  {
    id: 'yaounde-accra',
    from: 'Yaoundé',
    to: 'Accra',
    duration: '24h',
    distance: '1200 km',
    silverPrice: 85000,
    goldPrice: 127000,
    frequency: 'thrice-weekly' as FrequencyKey,
    departureTimes: ['06:00']
  },
  {
    id: 'douala-abidjan',
    from: 'Douala',
    to: 'Abidjan',
    duration: '30h',
    distance: '1500 km',
    silverPrice: 95000,
    goldPrice: 142000,
    frequency: 'twice-weekly' as FrequencyKey,
    departureTimes: ['06:00']
  },
  {
    id: 'buea-yaounde',
    from: 'Buea',
    to: 'Yaoundé',
    duration: '4h',
    distance: '200 km',
    silverPrice: 15000,
    goldPrice: 22000,
    frequency: 'daily' as FrequencyKey,
    departureTimes: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00']
  }
];

export const COMFORT_CLASSES = {
  silver: {
    id: 'silver',
    name: 'Silver Comfort Class',
    features: [
      'Sièges confortables',
      'WiFi gratuit',
      'Bus climatisés',
      'Restauration à bord',
      'Prises électriques',
      'Divertissement vidéo'
    ]
  },
  gold: {
    id: 'gold',
    name: 'Gold Comfort Class',
    features: [
      'Tout ce qui est inclus en Silver',
      'Embarquement prioritaire',
      'Salon Gold Comfort exclusif',
      'Écrans individuels HD',
      'Sièges premium extra-larges',
      'Restauration améliorée',
      'Kit confort offert'
    ]
  }
};

export const AGENCIES = [
  {
    id: 'yaounde',
    city: 'Yaoundé',
    address: 'Carrefour Nlongkak, en face de la station Total',
    phone: '+237 678 197 361',
    whatsapp: '+237 620 412 171',
    email: 'yaounde@afrique-con.com',
    hours: 'Lun-Dim: 05:00 - 22:00',
    mapsUrl: 'https://maps.google.com/?q=Yaoundé+Nlongkak'
  },
  {
    id: 'buea',
    city: 'Buea',
    address: 'Mile 17 Motor Park',
    phone: '+237 678 197 361',
    whatsapp: '+237 620 412 171',
    email: 'buea@afrique-con.com',
    hours: 'Lun-Dim: 05:00 - 22:00',
    mapsUrl: 'https://maps.google.com/?q=Buea+Mile+17'
  },
  {
    id: 'douala-bonaberi',
    city: 'Douala Bonabéri',
    address: 'Gare routière Bonabéri',
    phone: '+237 678 197 361',
    whatsapp: '+237 620 412 171',
    email: 'douala@afrique-con.com',
    hours: 'Lun-Dim: 05:00 - 22:00',
    mapsUrl: 'https://maps.google.com/?q=Douala+Bonaberi'
  },
  {
    id: 'douala-akwa',
    city: 'Douala Akwa',
    address: 'Boulevard de la Liberté, près du marché central',
    phone: '+237 678 197 361',
    whatsapp: '+237 620 412 171',
    email: 'douala-akwa@afrique-con.com',
    hours: 'Lun-Dim: 05:00 - 22:00',
    mapsUrl: 'https://maps.google.com/?q=Douala+Akwa'
  },
  {
    id: 'ikom',
    city: 'Ikom',
    address: 'Ikom Motor Park',
    phone: '+237 678 197 361',
    whatsapp: '+237 620 412 171',
    email: 'ikom@afrique-con.com',
    hours: 'Lun-Dim: 05:00 - 22:00',
    mapsUrl: 'https://maps.google.com/?q=Ikom+Motor+Park'
  }
];

export type BookingStatus = 'en attente' | 'confirmée' | 'payée' | 'annulée';

export interface Booking {
  id: string;
  routeId: string;
  from: string;
  to: string;
  date: string;
  departureTime: string;
  comfortClass: 'silver' | 'gold';
  passengers: number;
  passengerName: string;
  phone: string;
  email?: string;
  totalPrice: number;
  status: BookingStatus;
  createdAt: string;
  updatedAt: string;
}
