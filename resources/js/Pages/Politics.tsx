// PrivacyPolicy.tsx
import { Link, Head } from '@inertiajs/react';
import { Footer } from '../Components';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <>
            <Head title={t('privacy_policy.title')} />
            <div className="main__info bg-white py-12">
                <div className="text-center max-w-3xl m-auto">
                    <h2 className="text-4xl font-bold tracking-wide text-gray-800 mt-4">
                        {t('privacy_policy.heading')}
                    </h2>
                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <h3 className="font-bold text-2xl text-gray-700">{t('privacy_policy.introduction.title')}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t('privacy_policy.introduction.text')}
                        </p>
                    </div>
                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <h3 className="font-bold text-2xl text-gray-700">{t('privacy_policy.data_collection.title')}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t('privacy_policy.data_collection.text')}
                        </p>
                        <ul className="list-disc text-gray-600 text-lg leading-relaxed pl-6">
                            <li>{t('privacy_policy.data_collection.list.register')}</li>
                            <li>{t('privacy_policy.data_collection.list.contact')}</li>
                            <li>{t('privacy_policy.data_collection.list.services')}</li>
                        </ul>
                        <p className="text-gray-600 text-lg leading-relaxed mt-2">
                            {t('privacy_policy.data_collection.info')}
                        </p>
                    </div>
                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <h3 className="font-bold text-2xl text-gray-700">{t('privacy_policy.usage.title')}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t('privacy_policy.usage.text')}
                        </p>
                        <ul className="list-disc text-gray-600 text-lg leading-relaxed pl-6">
                            <li>{t('privacy_policy.usage.list.service')}</li>
                            <li>{t('privacy_policy.usage.list.communication')}</li>
                            <li>{t('privacy_policy.usage.list.marketing')}</li>
                        </ul>
                    </div>
                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <h3 className="font-bold text-2xl text-gray-700">{t('privacy_policy.storage.title')}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t('privacy_policy.storage.text')}
                        </p>
                    </div>
                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <h3 className="font-bold text-2xl text-gray-700">{t('privacy_policy.security.title')}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t('privacy_policy.security.text')}
                        </p>
                    </div>
                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <h3 className="font-bold text-2xl text-gray-700">{t('privacy_policy.disclosure.title')}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t('privacy_policy.disclosure.text')}
                        </p>
                    </div>
                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <h3 className="font-bold text-2xl text-gray-700">{t('privacy_policy.rights.title')}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t('privacy_policy.rights.text')}
                        </p>
                        <ul className="list-disc text-gray-600 text-lg leading-relaxed pl-6">
                            <li>{t('privacy_policy.rights.list.access')}</li>
                            <li>{t('privacy_policy.rights.list.correction')}</li>
                            <li>{t('privacy_policy.rights.list.deletion')}</li>
                        </ul>
                    </div>
                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <h3 className="font-bold text-2xl text-gray-700">{t('privacy_policy.changes.title')}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t('privacy_policy.changes.text')}
                        </p>
                    </div>
                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <h3 className="font-bold text-2xl text-gray-700">{t('privacy_policy.contacts.title')}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {t('privacy_policy.contacts.text')}
                            <br />
                            <span className="font-bold">{t('privacy_policy.contacts.email_label')}</span> info@coffeecRM.com
                        </p>
                    </div>
                    <Link
                        href={route('home')}
                        className="rounded-md px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white"
                    >
                        {t('privacy_policy.back_to_home')}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
