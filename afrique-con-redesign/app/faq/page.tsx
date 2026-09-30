import Link from 'next/link';

export default function FAQPage() {
  const faqs = [
    {
      category: 'Réservation',
      questions: [
        {
          q: 'Comment réserver un billet ?',
          a: 'Vous pouvez réserver en ligne sur notre site web, par téléphone au +237 678 197 361, sur WhatsApp au +237 620 412 171, ou directement dans nos agences.'
        },
        {
          q: 'Puis-je annuler ma réservation ?',
          a: 'Oui, l\'annulation est possible jusqu\'à 24h avant le départ. Contactez-nous via WhatsApp ou téléphone avec votre numéro de réservation.'
        },
        {
          q: 'Comment obtenir mon numéro de réservation ?',
          a: 'Votre numéro de réservation (format AC-XXXXXX) vous est envoyé immédiatement après confirmation de votre réservation.'
        }
      ]
    },
    {
      category: 'Paiement',
      questions: [
        {
          q: 'Quels modes de paiement acceptez-vous ?',
          a: 'Nous acceptons le paiement en espèces dans nos agences, Orange Money et MTN Mobile Money. Le paiement en ligne sera bientôt disponible.'
        },
        {
          q: 'Dois-je payer au moment de la réservation ?',
          a: 'Vous pouvez réserver votre place et payer jusqu\'à 2h avant le départ dans nos agences ou par Mobile Money.'
        },
        {
          q: 'Puis-je obtenir un remboursement ?',
          a: 'Les remboursements sont possibles pour les annulations effectuées au moins 24h avant le départ, avec une retenue de 10%.'
        }
      ]
    },
    {
      category: 'Bagages',
      questions: [
        {
          q: 'Combien de bagages puis-je emporter ?',
          a: 'Chaque passager a droit à 30kg de bagages en soute et 1 bagage à main de 5kg maximum.'
        },
        {
          q: 'Y a-t-il des articles interdits ?',
          a: 'Les objets dangereux, inflammables, armes et produits illégaux sont strictement interdits à bord.'
        },
        {
          q: 'Que faire si mes bagages sont perdus ?',
          a: 'Signalez immédiatement la perte à notre personnel. Nous localisons et restituons les bagages perdus dans les 48h.'
        }
      ]
    },
    {
      category: 'Voyage',
      questions: [
        {
          q: 'Quelle est la différence entre Silver et Gold Class ?',
          a: 'Gold Class offre des sièges plus larges, embarquement prioritaire, salon exclusif, écrans individuels HD et service de restauration amélioré.'
        },
        {
          q: 'Y a-t-il du WiFi dans les bus ?',
          a: 'Oui, tous nos bus sont équipés de WiFi gratuit et illimité pour nos passagers.'
        },
        {
          q: 'Dois-je arriver en avance ?',
          a: 'Oui, nous recommandons d\'arriver 30 minutes avant l\'heure de départ pour l\'enregistrement et l\'embarquement.'
        }
      ]
    },
    {
      category: 'Enfants',
      questions: [
        {
          q: 'Les enfants paient-ils le plein tarif ?',
          a: 'Les enfants de moins de 3 ans voyagent gratuitement (sans siège). De 3 à 12 ans: 50% de réduction. Plus de 12 ans: tarif adulte.'
        },
        {
          q: 'Un enfant peut-il voyager seul ?',
          a: 'Les enfants de moins de 12 ans doivent être accompagnés d\'un adulte. Pour les 12-15 ans, une autorisation parentale est requise.'
        }
      ]
    }
  ];

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

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Questions fréquentes</h1>
          <p className="text-gray-600 mb-8">Trouvez rapidement les réponses à vos questions</p>

          <div className="space-y-8">
            {faqs.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-bold text-red-600 mb-4">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, qIdx) => (
                    <div key={qIdx} className="border-2 border-gray-200 rounded-xl p-6">
                      <h3 className="font-bold text-lg mb-2 text-gray-900">{faq.q}</h3>
                      <p className="text-gray-700">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-red-50 border-2 border-red-200 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2">Vous ne trouvez pas votre réponse ?</h3>
            <p className="text-gray-700 mb-4">
              Notre équipe est disponible 24/7 pour répondre à toutes vos questions.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+237678197361"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Appeler +237 678 197 361
              </a>
              <a
                href="https://wa.me/237620412171"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
