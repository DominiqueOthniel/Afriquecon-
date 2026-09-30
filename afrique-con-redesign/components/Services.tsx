import Image from 'next/image';

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'WiFi gratuit',
      description: 'Internet haut débit sans restriction'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Divertissement',
      description: 'Écrans individuels avec films et musique'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Restauration',
      description: 'Repas et boissons servis à bord'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Anti-COVID 98%',
      description: 'Ionisation active de l\'air'
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Nos services
          </h2>
          <p className="text-lg text-gray-600">
            Confort et sécurité à bord
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
            >
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-4 text-white mx-auto">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-600 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20">
            <Image
              src="/images/can2021-1.jpg"
              alt="CAN 2021"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Partenaire CAN 2021</h3>
            <p className="text-lg">
              Transport officiel des équipes africaines durant la Coupe d'Afrique des Nations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
