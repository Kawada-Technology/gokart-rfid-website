import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

const locales = ['zh', 'en', 'ms', 'ta'];
const defaultLocale = 'en';

export default getRequestConfig(async () => {
    // Get locale from cookie
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get('locale')?.value;

    // Validate locale, fallback to default if invalid or missing
    const locale = (cookieLocale && locales.includes(cookieLocale)) ? cookieLocale : defaultLocale;

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});
