// MoreInfo.tsx
import {Head, Link} from '@inertiajs/react';
import { Footer } from '../Components';

interface MoreInfoProps {
    auth: any;
}
function MoreInfo({auth}: MoreInfoProps) {
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
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="rounded-md px-4 py-2 transition hover:bg-gray-700 hover:text-white"
                                >
                                    Увійти
                                </Link>
                                <span className="text-gray-500">/</span>
                                <Link
                                    href={route('register')}
                                    className="rounded-md px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white"
                                >
                                    Зареєструватись
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </header>
            <div className="main__info bg-white py-12">
                <div className="text-center max-w-3xl m-auto">
                    <Head title="Більше Інформації" />
                    {/* Описание проекта */}
                    <div
                        className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <span className="font-bold text-2xl text-gray-700 block mb-2">1. Опис проєкту:</span>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            CRM система кав'ярні призначена для спрощення управління взаємодією з клієнтами та
                            оптимізації
                            внутрішніх процесів. Вона дозволяє співробітникам ефективно обробляти інформацію про
                            клієнтів,
                            управління програмою лояльності, замовленнями та акціями.
                        </p>
                    </div>
                    {/* Функціональні можливості */}
                    <div
                        className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <span
                            className="font-bold text-2xl text-gray-700 block mb-2">2. Функціональні можливості:</span>
                        <ul className="list-disc text-gray-600 text-lg leading-relaxed pl-6">
                            <li className="mb-2">
                                <span className="font-bold text-lg text-gray-800">Клієнтська база:</span> Додавання,
                                редагування і видалення клієнтів, відстеження їх історії замовлень та статусу в програмі
                                лояльності.
                            </li>
                            <li className="mb-2">
                                <span className="font-bold text-lg text-gray-800">Програма лояльності:</span> Управління
                                бонусними балами, рівнями клієнтів, створення персоналізованих пропозицій.
                            </li>
                            <li className="mb-2">
                                <span className="font-bold text-lg text-gray-800">Замовлення:</span> Фільтрація та пошук
                                замовлень, перегляд деталей кожного замовлення, управління їх статусами.
                            </li>
                            <li className="mb-2">
                                <span className="font-bold text-lg text-gray-800">Акції та пропозиції:</span> Створення
                                і управління рекламними кампаніями, відображення активних пропозицій для клієнтів.
                            </li>
                        </ul>
                    </div>
                    {/* Переваги для бізнесу */}
                    <div
                        className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <span className="font-bold text-2xl text-gray-700 block mb-2">3. Переваги для бізнесу:</span>
                        <ul className="list-disc text-gray-600 text-lg leading-relaxed pl-6">
                            <li className="mb-2">
                                <span
                                    className="font-bold text-lg text-gray-800">Ефективність управління:</span> Спрощує
                                роботу барист, менеджерів та маркетологів завдяки централізованій системі управління
                                клієнтами та замовленнями.
                            </li>
                            <li className="mb-2">
                                <span
                                    className="font-bold text-lg text-gray-800">Персоналізація обслуговування:</span> Підвищує
                                лояльність клієнтів за рахунок індивідуальних пропозицій і акцій на основі їхніх
                                вподобань.
                            </li>
                            <li className="mb-2">
                                <span
                                    className="font-bold text-lg text-gray-800">Простота використання:</span> Інтуїтивно
                                зрозумілий інтерфейс для швидкого навчання співробітників та легкого доступу до
                                необхідної інформації.
                            </li>
                        </ul>
                    </div>
                    {/* Безпека та масштабованість */}
                    <div
                        className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <span
                            className="font-bold text-2xl text-gray-700 block mb-2">4. Безпека та масштабованість:</span>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            CRM система передбачає високий рівень безпеки даних завдяки використанню сучасних технологій
                            шифрування, захисту від SQL-ін'єкцій та інших кіберзагроз. Також система легко масштабується
                            для підтримки збільшення кількості клієнтів та розширення бізнесу.
                        </p>
                    </div>
                    <Link
                        href={route('home')}
                        className="rounded-md px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white"
                    >
                        На головну
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default MoreInfo;
