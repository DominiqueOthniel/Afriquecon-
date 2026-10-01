'use client';

import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

export default function PageTopBar({ className = 'mb-8' }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <div className={`flex items-center justify-between gap-3 ${className}`}>
      <Link href="/" className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center">
        <svg className="w-5 h-5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {t.common.backHome}
      </Link>
      <LanguageSwitcher />
    </div>
  );
}
