import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css';
import StoreProvider from '../store/StoreProvider';
import i18nConfig from '../../../i18nConfig';
import { dir } from 'i18next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TstHieuu Pofolio',
  description: 'Excuting my plan',
}

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({children, params: { locale }}: any) {
  return (
    <StoreProvider>
      <html lang={locale} dir={dir(locale)} >
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  )
}
