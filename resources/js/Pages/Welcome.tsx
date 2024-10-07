import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Footer } from '../Components';
import { useTranslation } from 'react-i18next';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{
    laravelVersion: string,
    phpVersion: string
}>) {
    const { t, i18n } = useTranslation();

    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <Head title={t("welcome")} />
            <header className="header bg-white shadow-lg">
                <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
                    <p className="header__logo flex items-center">
                        <span className="ml-2 font-bold text-2xl text-gray-800">CoffeeCRM</span>
                    </p>
                    <div className="routes flex items-center gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-md px-4 py-2 bg-gray-800 text-white border border-gray-300 transition"
                            >
                                {t("dashboard")}
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="rounded-md px-4 py-2 transition hover:bg-gray-700 hover:text-white"
                                >
                                    {t("login")}
                                </Link>
                                <span className="text-gray-500">/</span>
                                <Link
                                    href={route('register')}
                                    className="rounded-md px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white"
                                >
                                    {t("register")}
                                </Link>
                            </>
                        )}
                        <div>
                            <select name="" id="">
                                <option onClick={() => changeLanguage('en')} className="btn">En</option>
                                <option onClick={() => changeLanguage('ua')} className="btn">Укр</option>
                            </select>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="bg-white text-gray-800 min-h-screen">
                <div className="main__center flex flex-col items-center justify-center">
                    <div className="text-center py-16">
                        <h1 className="main__title text-6xl font-bold tracking-wide">
                            {t("success_message")}
                            <span className="ml-2">CoffeeCRM</span>
                        </h1>
                        <p className="text-gray-600 text-xl mt-4 max-w-2xl mx-auto">
                            {t("optimize")}
                        </p>
                    </div>
                </div>
                <div className="about__CRM text-left py-16 max-w-2xl margin-left-30">
                    <h2 className="CRM__title text-6xl font-bold tracking-wide">
                        {t("about")}
                        <span className="ml-2">CoffeeCRM</span>
                    </h2>
                    <p className="CRM__text text-gray-600 text-xl mt-4 max-w-2xl mx-auto">
                        {t("crm_description")}
                        <ul className="mt-2 list-disc margin-left-30">
                            <li>{t("feature_1")}</li>
                            <li>{t("feature_2")}</li>
                            <li>{t("feature_3")}</li>
                            <li>{t("feature_4")}</li>
                            <li>{t("feature_5")}</li>
                        </ul>
                    </p>
                    <div className='mt-4'>
                        <Link href={route('moreInfo')} className="CRM__btn rounded-md px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white max-w-2xl mx-auto text-xl">
                            {t("more_info")}
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
