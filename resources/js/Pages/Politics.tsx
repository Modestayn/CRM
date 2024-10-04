// PrivacyPolicy.tsx
import { Link, Head } from '@inertiajs/react';
import { Footer } from '../Components';

const PrivacyPolicy = () => {
    return (
        <>
            <Head title="Політика конфіденційності" />
            <div className="main__info bg-white py-12">
                <div className="text-center max-w-3xl m-auto">
                    <h2 className="text-4xl font-bold tracking-wide text-gray-800 mt-4">
                        Політика конфіденційності
                    </h2>
                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <h3 className="font-bold text-2xl text-gray-700">1. Вступ</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Ця політика конфіденційності описує, як компанія CoffeeCRM ("ми", "нас" або "наш")
                            збирає, використовує, зберігає та захищає вашу особисту інформацію, коли ви користуєтеся
                            нашим веб-сайтом і послугами.
                        </p>
                    </div>
                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <h3 className="font-bold text-2xl text-gray-700">2. Збір інформації</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Ми можемо збирати особисту інформацію, яку ви надаєте нам безпосередньо, коли:
                        </p>
                        <ul className="list-disc text-gray-600 text-lg leading-relaxed pl-6">
                            <li>Реєструєтеся на нашому сайті.</li>
                            <li>Подаєте запити через наші контактні форми.</li>
                            <li>Використовуєте наші послуги.</li>
                        </ul>
                        <p className="text-gray-600 text-lg leading-relaxed mt-2">
                            Зібрана інформація може включати ваше ім'я, адресу електронної пошти, номер телефону та інші контактні дані.
                        </p>
                    </div>
                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <h3 className="font-bold text-2xl text-gray-700">3. Використання інформації</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Ми можемо використовувати вашу інформацію для:
                        </p>
                        <ul className="list-disc text-gray-600 text-lg leading-relaxed pl-6">
                            <li>Надання, підтримки та покращення наших послуг.</li>
                            <li>Спілкування з вами щодо вашого облікового запису або транзакцій.</li>
                            <li>Надсилання вам новин, оновлень та рекламних матеріалів (якщо ви підписалися на їх отримання).</li>
                        </ul>
                    </div>
                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <h3 className="font-bold text-2xl text-gray-700">4. Зберігання інформації</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Ми зберігаємо вашу інформацію лише стільки, скільки це необхідно для виконання цілей,
                            для яких вона була зібрана, або відповідно до законодавства.
                        </p>
                    </div>
                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <h3 className="font-bold text-2xl text-gray-700">5. Безпека інформації</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Ми вживаємо розумних заходів для захисту вашої особистої інформації від втрати,
                            крадіжки, несанкціонованого доступу, розкриття, зміни або знищення.
                            Однак, жоден метод передачі даних через Інтернет або електронне зберігання
                            не є на 100% безпечним.
                        </p>
                    </div>
                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <h3 className="font-bold text-2xl text-gray-700">6. Розкриття інформації третім особам</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Ми не продаємо, не обмінюємо та не передаємо вашу особисту інформацію третім особам без вашої згоди,
                            за винятком випадків, коли це потрібно для виконання наших зобов'язань перед вами
                            (наприклад, для обробки платежів) або коли цього вимагає закон.
                        </p>
                    </div>
                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <h3 className="font-bold text-2xl text-gray-700">7. Ваші права</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Ви маєте право:
                        </p>
                        <ul className="list-disc text-gray-600 text-lg leading-relaxed pl-6">
                            <li>Запитувати доступ до вашої особистої інформації.</li>
                            <li>Вимагати виправлення неточної інформації.</li>
                            <li>Вимагати видалення вашої особистої інформації.</li>
                        </ul>
                    </div>
                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <h3 className="font-bold text-2xl text-gray-700">8. Зміни в політиці</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Ми можемо оновлювати цю політику конфіденційності час від часу.
                            Будь-які зміни будуть опубліковані на цій сторінці з зазначенням дати останнього оновлення.
                            Рекомендуємо періодично переглядати цю політику, щоб бути в курсі, як ми захищаємо вашу інформацію.
                        </p>
                    </div>
                    <div className="mt-8 text-left mb-6 bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-lg shadow">
                        <h3 className="font-bold text-2xl text-gray-700">9. Контакти</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Якщо у вас є будь-які запитання або коментарі щодо цієї політики конфіденційності, будь ласка, зв’яжіться з нами:
                            <br />
                            <span className="font-bold">Електронна пошта:</span> info@coffeecRM.com
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

        </>
    );
};

export default PrivacyPolicy;
