import Link from 'next/link';

export default function Footer() {
  const agencies = {
    cameroon: [
      {
        city: 'Yaoundé',
        address: 'Opposite Mansel Hotel, Quartier Fouda, Route de Ngousso',
        phone: '+237 678 197 361'
      },
      {
        city: 'Buea',
        address: 'Mile 17 Junction',
        phone: '+237 657 675 501'
      },
      {
        city: 'Douala Bonabéri',
        address: 'Opposite Mayor Ndobo, Bonabéri',
        phone: '+237 678 197 360'
      },
      {
        city: 'Douala Akwa',
        address: 'Opposite small Total, Camp Yabasi, Beside Unity Hall',
        phone: '+237 678 197 360'
      }
    ],
    nigeria: [
      {
        city: 'Ikom',
        address: 'Peace Mass Transit',
        phone: '+234 706 118 7679'
      }
    ]
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Afrique-con</h3>
                <p className="text-sm text-gray-400">#ConnectingAfrica</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Votre partenaire de confiance pour voyager à travers l'Afrique dans un confort exceptionnel depuis 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-red-500 transition-colors">Accueil</Link></li>
              <li><Link href="/reserver" className="text-gray-400 hover:text-red-500 transition-colors">Réserver</Link></li>
              <li><Link href="/horaires" className="text-gray-400 hover:text-red-500 transition-colors">Horaires</Link></li>
              <li><Link href="/agences" className="text-gray-400 hover:text-red-500 transition-colors">Nos agences</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-red-500 transition-colors">FAQ</Link></li>
              <li><Link href="/ma-reservation" className="text-gray-400 hover:text-red-500 transition-colors">Ma réservation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Agences Cameroun</h4>
            <ul className="space-y-3">
              {agencies.cameroon.map((agency, idx) => (
                <li key={idx}>
                  <p className="font-semibold text-red-500">{agency.city}</p>
                  <p className="text-sm text-gray-400">{agency.address}</p>
                  <a href={`tel:${agency.phone.replace(/\s/g, '')}`} className="text-sm text-gray-300 hover:text-white">
                    {agency.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact & Support</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-2">Service client 24/7</p>
                <a href="tel:+237620412171" className="text-red-500 font-semibold hover:text-red-400">
                  WhatsApp: +237 620 412 171
                </a>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Email</p>
                <a href="mailto:support@afrique-con.com" className="text-red-500 font-semibold hover:text-red-400">
                  support@afrique-con.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Siège social</p>
                <p className="text-sm text-gray-300">
                  Middle Farms Limbe<br />
                  P.B 144 Buea, Cameroun
                </p>
              </div>
              {agencies.nigeria.map((agency, idx) => (
                <div key={idx}>
                  <p className="text-gray-400 mb-2">Nigeria - {agency.city}</p>
                  <p className="text-sm text-gray-300">{agency.address}</p>
                  <a href={`tel:${agency.phone.replace(/\s/g, '')}`} className="text-sm text-red-500 hover:text-red-400">
                    {agency.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Afrique-con Plc. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Conditions d'utilisation</a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
