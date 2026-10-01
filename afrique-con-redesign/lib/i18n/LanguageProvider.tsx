'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  formatDate as formatDateFor,
  formatNumber as formatNumberFor,
  formatPrice as formatPriceFor,
  isLocale,
  type Locale,
} from './config';
import { dictionaries, type Dictionary } from './dictionaries';

interface LanguageContextValue {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  formatPrice: (value: number) => string;
  formatNumber: (value: number) => string;
  formatDate: (isoDate: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const listeners = new Set<() => void>();

function readStoredLocale(): Locale {
  try {
    const match = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_STORAGE_KEY}=(en|fr)`));
    if (match && isLocale(match[1])) return match[1];
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {}
  return DEFAULT_LOCALE;
}

function persistLocale(locale: Locale) {
  try {
    document.cookie = `${LOCALE_STORAGE_KEY}=${locale}; path=/; max-age=31536000; samesite=lax`;
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {}
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === LOCALE_STORAGE_KEY) listener();
  };
  window.addEventListener('storage', onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', onStorage);
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, readStoredLocale, () => DEFAULT_LOCALE);
  const t = dictionaries[locale];
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    if (locale === readStoredLocale()) root.classList.remove('locale-pending');
  }, [locale, t, pathname]);

  const setLocale = useCallback((next: Locale) => persistLocale(next), []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      t,
      setLocale,
      formatPrice: (value) => formatPriceFor(value, locale),
      formatNumber: (value) => formatNumberFor(value, locale),
      formatDate: (isoDate) => formatDateFor(isoDate, locale),
    }),
    [locale, t, setLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}
