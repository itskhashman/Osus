import type { Metadata } from "next";
import "./globals.css";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/domain/locale";
import { routing } from "@/i18n/routing";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollReveal from "@/components/common/ScrollReveal";
import { getDirection } from "@/rules/locale";

export const metadata: Metadata = {
  title: "OSUS Alroqey Ltd. Co. — Your Engineering Solutions Partner",
  description:
    "Pumps, valves, control systems and complete HVAC solutions across Saudi Arabia. Over 25 years of mechanical engineering experience.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  const messages = await getMessages({ locale });
  const dir = getDirection(locale as Locale);

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600;700&family=Noto+Kufi+Arabic:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ScrollReveal>
            <Header />
          </ScrollReveal>

          <main>{children}</main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
