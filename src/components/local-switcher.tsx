'use client';

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from 'next/navigation';
import {ChangeEvent, useTransition} from 'react';

export default function LocalSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const pathname = usePathname();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            const newPath = pathname.replace(`/${localActive}`, `/${nextLocale}`)
            router.replace(newPath)
        });
    };
    return (
        <label className='border-2 rounded'>
            <p className='sr-only'>change language</p>
            <select
                defaultValue={localActive}
                className='bg-transparent py-2'
                onChange={onSelectChange}
                disabled={isPending}
            >
                <option value='en'>English</option>
                <option value='tr'>Türkçe</option>
            </select>
        </label>
    );
}
