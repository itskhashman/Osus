'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { dictionary } from './content';
import { fonts } from './theme';

type Locale = keyof typeof dictionary;
type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggle: () => void;
  t: (typeof dictionary)[Locale];
  dir: string;
  isRtl: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = 'osus.locale';

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && saved in dictionary) setLocale(saved as Locale);
  }, []);

  useEffect(() => {
    const t = dictionary[locale];
    document.documentElement.lang = locale;
    document.documentElement.dir = t.dir;
    document.body.style.fontFamily = locale === 'ar' ? fonts.arabic : fonts.body;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const toggle = () => setLocale((l) => (l === 'en' ? 'ar' : 'en'));

  const value = {
    locale,
    setLocale,
    toggle,
    t: dictionary[locale],
    dir: dictionary[locale].dir,
    isRtl: dictionary[locale].dir === 'rtl',
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used inside <LocaleProvider>');
  return ctx;
}
