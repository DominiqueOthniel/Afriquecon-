export const LOCALES = ['en', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALE_STORAGE_KEY = 'locale';

export function isLocale(value: unknown): value is Locale {
  return value === 'en' || value === 'fr';
}

export function formatNumber(value: number, locale: Locale): string {
  const digits = Math.round(value).toString();
  const separator = locale === 'fr' ? '\u00a0' : ',';
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export function formatPrice(value: number, locale: Locale): string {
  return `${formatNumber(value, locale)}\u00a0CFA`;
}

export function formatDate(isoDate: string, locale: Locale): string {
  if (!isoDate) return '';
  const date = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

/*
 * Runs in <head> before hydration so French visitors never see the English
 * prerendered HTML: it sets html[lang] and hides the body until the provider
 * has rendered the French content (with a safety timeout).
 */
export const LOCALE_BOOTSTRAP_SCRIPT = `(function(){try{var m=document.cookie.match(/(?:^|; )${LOCALE_STORAGE_KEY}=(en|fr)/);var l=m?m[1]:localStorage.getItem('${LOCALE_STORAGE_KEY}');if(l==='fr'){var h=document.documentElement;h.lang='fr';h.classList.add('locale-pending');setTimeout(function(){h.classList.remove('locale-pending')},2500)}}catch(e){}})();`;
