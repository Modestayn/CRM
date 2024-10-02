import {Link, Head} from '@inertiajs/react';
import {PageProps} from '@/types';
import React, {useState, useEffect} from 'react';

export default function Welcome({auth, laravelVersion, phpVersion}: PageProps<{
    laravelVersion: string,
    phpVersion: string
}>) {
    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

    useEffect(() => {
        const updateYear = () => {
            setCurrentYear(new Date().getFullYear());
        };
        updateYear();

    }, []);

    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <header className="header bg-white shadow-lg">
                <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
                    <p className="header__logo flex items-center">
                        <span className="ml-2 font-bold text-2xl text-gray-800">CoffeeCRM</span>
                    </p>
                    <div className="routes flex items-center gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-md px-4 py-2 bg-gray-800 text-gray-800  border border-gray-300  transition"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="rounded-md  px-4 py-2 transition hover:bg-gray-700 hover:text-white"
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

            <main className="bg-white text-gray-800 min-h-screen ">
                <div className="main__center flex flex-col items-center justify-center">
                    <div className="text-center py-16">
                        <h1 className="text-6xl font-bold tracking-wide">
                            Заваріть успіх з
                            <span className="ml-2">CoffeeCRM</span>
                        </h1>
                        <p className="text-gray-600 text-xl mt-4 max-w-2xl mx-auto">
                            Оптимізуйте операції вашого кавового бізнесу за допомогою нашого спеціалізованого
                            CRM-рішення
                        </p>

                    </div>
                </div>
                <div className="about__CRM text-left py-16 max-w-2xl margin-left-30">
                    <h2 className="CRM__title text-6xl font-bold tracking-wide">
                        Про
                        <span className="ml-2">CoffeeCRM</span>
                    </h2>
                    <p className="CRM__text text-gray-600 text-xl mt-4 max-w-2xl mx-auto">
                        це сучасне CRM-рішення, яке допомагає оптимізувати управління кавовим бізнесом. Основні функції включають:
                        <ul className="mt-2 list-disc margin-left-30">
                            <li>Додавання та управління категоріями товарів.</li>
                            <li>Ведення обліку грамовки кави та інших продуктів.</li>
                            <li>Додавання та зберігання контактів постачальників.</li>
                            <li>Управління запасами, контроль залишків товарів.</li>
                            <li>Створення замовлень та ведення історії закупівель.</li>
                        </ul>
                    </p>
                    <div className='mt-4'>
                        <Link href={route('moreInfo')} className="CRM__btn rounded-md px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white max-w-2xl mx-auto text-xl">
                            Більше інформації
                        </Link>
                    </div>
                </div>
            </main>

            <footer className="py-4 text-center bg-white border-t border-gray-300">
                &copy; {currentYear} CRM coffee bean - <Link href={route('politics')} className="text-gray-700 hover:underline">Усі
                права захищено</Link>
            </footer>
        </>
    );
}
