import Image from 'next/image';
import HomeView from './modules/home/view/homeView';
import initTranslations from '../i18n';
import TranslationsProvider from '../TranslationsProvider';
import {LanguageChanger} from './modules/_common';
const i18nNamespaces = ['home'];
export default async function Home({params: {locale}}: any) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HomeView />
        <p>{t('hello_world')}</p>
        <LanguageChanger />
    </main>
    </TranslationsProvider>
  )
}
