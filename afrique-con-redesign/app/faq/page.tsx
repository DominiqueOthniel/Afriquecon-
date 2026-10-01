'use client';

import PageTopBar from '@/components/PageTopBar';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

export default function FAQPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <PageTopBar />

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">{t.faq.title}</h1>
          <p className="text-gray-600 mb-8">{t.faq.subtitle}</p>

          <div className="space-y-8">
            {t.faq.categories.map((category, idx) => (
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
            <h3 className="font-bold text-lg mb-2">{t.faq.notFoundTitle}</h3>
            <p className="text-gray-700 mb-4">
              {t.faq.notFoundText}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+237678197361"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                {t.faq.call}
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
