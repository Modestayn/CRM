// MoreInfo.tsx
import { Head, Link } from '@inertiajs/react';
import { Footer } from '../Components';
import { useTranslation } from 'react-i18next';

interface MoreInfoProps {
    auth: any;
}

function MoreInfo({ auth }: MoreInfoProps) {
    const { t } = useTranslation();

    return (
        <>
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
                                {t('more_infoStr.dashboard')}
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="rounded-md px-4 py-2 transition hover:bg-gray-700 hover:text-white"
                                >
                                    {t('more_infoStr.login')}
                                </Link>
                                <span className="text-gray-500">/</span>
                                <Link
                                    href={route('register')}
                                    className="rounded-md px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white"
                                >
                                    {t('more_infoStr.register')}
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </header>
            <div className="main__info bg-white py-12">
                <div className="text-center max-w-3xl m-auto">
                    <Head title={t('more_infoStr.title')} />

                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <span className="font-bold text-2xl text-gray-700 block mb-2">{t('more_infoStr.project_description.heading')}</span>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t('more_infoStr.project_description.text')}
                        </p>
                    </div>

                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <span className="font-bold text-2xl text-gray-700 block mb-2">{t('more_infoStr.features.heading')}</span>
                        <ul className="list-disc text-gray-600 text-lg leading-relaxed pl-6">
                            <li className="mb-2">
                                <span className="font-bold text-lg text-gray-800">{t('more_infoStr.features.list.customer_base.title')}</span>: {t('more_infoStr.features.list.customer_base.text')}
                            </li>
                            <li className="mb-2">
                                <span className="font-bold text-lg text-gray-800">{t('more_infoStr.features.list.loyalty_program.title')}</span>: {t('more_infoStr.features.list.loyalty_program.text')}
                            </li>
                            <li className="mb-2">
                                <span className="font-bold text-lg text-gray-800">{t('more_infoStr.features.list.orders.title')}</span>: {t('more_infoStr.features.list.orders.text')}
                            </li>
                            <li className="mb-2">
                                <span className="font-bold text-lg text-gray-800">{t('more_infoStr.features.list.promotions.title')}</span>: {t('more_infoStr.features.list.promotions.text')}
                            </li>
                        </ul>
                    </div>

                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <span className="font-bold text-2xl text-gray-700 block mb-2">{t('more_infoStr.business_benefits.heading')}</span>
                        <ul className="list-disc text-gray-600 text-lg leading-relaxed pl-6">
                            <li className="mb-2">
                                <span className="font-bold text-lg text-gray-800">{t('more_infoStr.business_benefits.list.management_efficiency.title')}</span>: {t('more_infoStr.business_benefits.list.management_efficiency.text')}
                            </li>
                            <li className="mb-2">
                                <span className="font-bold text-lg text-gray-800">{t('more_infoStr.business_benefits.list.personalized_service.title')}</span>: {t('more_infoStr.business_benefits.list.personalized_service.text')}
                            </li>
                            <li className="mb-2">
                                <span className="font-bold text-lg text-gray-800">{t('more_infoStr.business_benefits.list.ease_of_use.title')}</span>: {t('more_infoStr.business_benefits.list.ease_of_use.text')}
                            </li>
                        </ul>
                    </div>

                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <span className="font-bold text-2xl text-gray-700 block mb-2">{t('more_infoStr.security_and_scalability.heading')}</span>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t('more_infoStr.security_and_scalability.text')}
                        </p>
                    </div>

                    <Link
                        href={route('home')}
                        className="rounded-md px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white"
                    >
                        {t('more_infoStr.back_to_home')}
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MoreInfo;
