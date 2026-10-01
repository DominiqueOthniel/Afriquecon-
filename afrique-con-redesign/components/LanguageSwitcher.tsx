'use client';

import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { LOCALES } from '@/lib/i18n/config';

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.common.switchTo}
      className={`inline-flex shrink-0 items-center rounded-lg border border-gray-300 bg-white p-0.5 text-sm font-semibold ${className}`}
    >
      {LOCALES.map((code, index) => (
        <span key={code} className="flex items-center">
          {index > 0 && <span aria-hidden="true" className="px-0.5 text-gray-300">|</span>}
          <button
            type="button"
            lang={code}
            aria-pressed={locale === code}
            onClick={() => setLocale(code)}
            className={`min-w-9 rounded-md px-2 py-1 transition-colors ${
              locale === code ? 'bg-red-600 text-white' : 'text-gray-700 hover:text-red-600'
            }`}
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
