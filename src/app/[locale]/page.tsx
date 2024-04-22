import {useLocale, useTranslations} from 'next-intl';
import LocalSwitcher from "@/components/local-switcher";
import React from "react";
import Link from "next/link";

export default function Home() {
  const t = useTranslations('IndexPage');
    const localActive = useLocale();

  return (
    <div className="text-center">
      <h1 className='text-4xl mb-4 font-semibold'>{t('title')}</h1>
      <p>{t('description')}</p>
        <LocalSwitcher/>
        <br/>
        <Link href={`/${localActive}/editor`}>Editor</Link>
    </div>
  );
}
