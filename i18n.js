import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "welcome": "Welcome to my app!",
                    "hello": "Hello, {{name}}!",
                    "dashboard": "Dashboard",
                    "login": "Login",
                    "register": "Register",
                    "success_message": "Brew success with CoffeeCRM",
                    "optimize": "Optimize your coffee business operations with our specialized CRM solution.",
                    "about": "About CoffeeCRM",
                    "crm_description": "This modern CRM solution helps optimize coffee business management. Key features include:",
                    "feature_1": "Adding and managing product categories.",
                    "feature_2": "Tracking coffee and other products.",
                    "feature_3": "Adding and storing supplier contacts.",
                    "feature_4": "Inventory management, stock control.",
                    "feature_5": "Creating orders and maintaining purchase history.",
                    "more_info": "More Information",
                    "policy": "Privacy policy",
                    "privacy_policy": {
                        "title": "Privacy Policy",
                        "heading": "Privacy Policy",
                        "introduction": {
                            "title": "1. Introduction",
                            "text": "This privacy policy describes how CoffeeCRM ('we', 'us', or 'our') collects, uses, stores, and protects your personal information when you use our website and services."
                        },
                        "data_collection": {
                            "title": "2. Data Collection",
                            "text": "We may collect personal information that you provide to us directly when:",
                            "list": {
                                "register": "You register on our website.",
                                "contact": "You submit inquiries through our contact forms.",
                                "services": "You use our services."
                            },
                            "info": "The collected information may include your name, email address, phone number, and other contact details."
                        },
                        "usage": {
                            "title": "3. Use of Information",
                            "text": "We may use your information for:",
                            "list": {
                                "service": "Providing, maintaining, and improving our services.",
                                "communication": "Communicating with you about your account or transactions.",
                                "marketing": "Sending you news, updates, and promotional materials (if you have opted in to receive them)."
                            }
                        },
                        "storage": {
                            "title": "4. Data Storage",
                            "text": "We store your information only as long as necessary to fulfill the purposes for which it was collected or as required by law."
                        },
                        "security": {
                            "title": "5. Data Security",
                            "text": "We take reasonable measures to protect your personal information from loss, theft, unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure."
                        },
                        "disclosure": {
                            "title": "6. Disclosure to Third Parties",
                            "text": "We do not sell, trade, or transfer your personal information to third parties without your consent, except as necessary to fulfill our obligations to you (e.g., for payment processing) or as required by law."
                        },
                        "rights": {
                            "title": "7. Your Rights",
                            "text": "You have the right to:",
                            "list": {
                                "access": "Request access to your personal information.",
                                "correction": "Request correction of inaccurate information.",
                                "deletion": "Request deletion of your personal information."
                            }
                        },
                        "changes": {
                            "title": "8. Changes to the Policy",
                            "text": "We may update this privacy policy from time to time. Any changes will be posted on this page with the date of the last update. We encourage you to periodically review this policy to stay informed about how we protect your information."
                        },
                        "contacts": {
                            "title": "9. Contacts",
                            "text": "If you have any questions or comments regarding this privacy policy, please contact us:",
                            "email_label": "Email:"
                        },
                        "back_to_home": "Back to Home"
                    },
                    "more_infoStr": {
                        "title": "More Information",
                        "project_description": {
                            "heading": "1. Project Description:",
                            "text": "The coffee shop CRM system is designed to streamline customer interaction management and optimize internal processes. It allows employees to effectively handle customer information, manage loyalty programs, orders, and promotions."
                        },
                        "features": {
                            "heading": "2. Functional Capabilities:",
                            "list": {
                                "customer_base": {
                                    "title": "Customer Base:",
                                    "text": "Adding, editing, and deleting customers, tracking their order history and loyalty program status."
                                },
                                "loyalty_program": {
                                    "title": "Loyalty Program:",
                                    "text": "Managing bonus points, customer levels, and creating personalized offers."
                                },
                                "orders": {
                                    "title": "Orders:",
                                    "text": "Filtering and searching for orders, viewing details of each order, and managing their statuses."
                                },
                                "promotions": {
                                    "title": "Promotions and Offers:",
                                    "text": "Creating and managing advertising campaigns, displaying active offers to customers."
                                }
                            }
                        },
                        "business_benefits": {
                            "heading": "3. Business Benefits:",
                            "list": {
                                "management_efficiency": {
                                    "title": "Management Efficiency:",
                                    "text": "Simplifies the work of baristas, managers, and marketers through a centralized customer and order management system."
                                },
                                "personalized_service": {
                                    "title": "Personalization of Service:",
                                    "text": "Increases customer loyalty through individual offers and promotions based on their preferences."
                                },
                                "ease_of_use": {
                                    "title": "Ease of Use:",
                                    "text": "User-friendly interface for quick training of employees and easy access to necessary information."
                                }
                            }
                        },
                        "security_and_scalability": {
                            "heading": "4. Security and Scalability:",
                            "text": "The CRM system provides a high level of data security through the use of modern encryption technologies, protection against SQL injections, and other cyber threats. The system is also easily scalable to support an increasing number of clients and business expansion."
                        },
                        "back_to_home": "Back to Home",
                        'dashboard': 'Dashboard',
                        'login': 'Login',
                        'register': 'Register'
                    }
                }
            },
            ua: {
                translation: {
                    "welcome": "Привіт",
                    "hello": "Привіт, {{name}}!",
                    "dashboard": "Панель управління",
                    "login": "Увійти",
                    "register": "Зареєструватись",
                    "success_message": "Заваріть успіх з CoffeeCRM",
                    "optimize": "Оптимізуйте операції вашого кавового бізнесу за допомогою нашого спеціалізованого CRM-рішення.",
                    "about": "Про CoffeeCRM",
                    "crm_description": "Це сучасне CRM-рішення, яке допомагає оптимізувати управління кавовим бізнесом. Основні функції включають:",
                    "feature_1": "Додавання та управління категоріями товарів.",
                    "feature_2": "Ведення обліку грамовки кави та інших продуктів.",
                    "feature_3": "Додавання та зберігання контактів постачальників.",
                    "feature_4": "Управління запасами, контроль залишків товарів.",
                    "feature_5": "Створення замовлень та ведення історії закупівель.",
                    "more_info": "Більше інформації",
                    "policy": "Усі права захищено",
                    "privacy_policy": {
                        "title": "Політика конфіденційності",
                        "heading": "Політика конфіденційності",
                        "introduction": {
                            "title": "1. Вступ",
                            "text": "Ця політика конфіденційності описує, як компанія CoffeeCRM ('ми', 'нас' або 'наш') збирає, використовує, зберігає та захищає вашу особисту інформацію, коли ви користуєтеся нашим веб-сайтом і послугами."
                        },
                        "data_collection": {
                            "title": "2. Збір інформації",
                            "text": "Ми можемо збирати особисту інформацію, яку ви надаєте нам безпосередньо, коли:",
                            "list": {
                                "register": "Ви реєструєтеся на нашому сайті.",
                                "contact": "Ви подаєте запити через наші контактні форми.",
                                "services": "Ви використовуєте наші послуги."
                            },
                            "info": "Зібрана інформація може включати ваше ім'я, адресу електронної пошти, номер телефону та інші контактні дані."
                        },
                        "usage": {
                            "title": "3. Використання інформації",
                            "text": "Ми можемо використовувати вашу інформацію для:",
                            "list": {
                                "service": "Надання, підтримки та покращення наших послуг.",
                                "communication": "Спілкування з вами щодо вашого облікового запису або транзакцій.",
                                "marketing": "Надсилання вам новин, оновлень та рекламних матеріалів (якщо ви підписалися на їх отримання)."
                            }
                        },
                        "storage": {
                            "title": "4. Зберігання інформації",
                            "text": "Ми зберігаємо вашу інформацію лише стільки, скільки це необхідно для виконання цілей, для яких вона була зібрана, або відповідно до законодавства."
                        },
                        "security": {
                            "title": "5. Безпека інформації",
                            "text": "Ми вживаємо розумних заходів для захисту вашої особистої інформації від втрати, крадіжки, несанкціонованого доступу, розкриття, зміни або знищення. Однак, жоден метод передачі даних через Інтернет або електронне зберігання не є на 100% безпечним."
                        },
                        "disclosure": {
                            "title": "6. Розкриття інформації третім особам",
                            "text": "Ми не продаємо, не обмінюємо та не передаємо вашу особисту інформацію третім особам без вашої згоди, за винятком випадків, коли це потрібно для виконання наших зобов'язань перед вами (наприклад, для обробки платежів) або коли цього вимагає закон."
                        },
                        "rights": {
                            "title": "7. Ваші права",
                            "text": "Ви маєте право:",
                            "list": {
                                "access": "Запитувати доступ до вашої особистої інформації.",
                                "correction": "Вимагати виправлення неточної інформації.",
                                "deletion": "Вимагати видалення вашої особистої інформації."
                            }
                        },
                        "changes": {
                            "title": "8. Зміни в політиці",
                            "text": "Ми можемо оновлювати цю політику конфіденційності час від часу. Будь-які зміни будуть опубліковані на цій сторінці з зазначенням дати останнього оновлення. Рекомендуємо періодично переглядати цю політику, щоб бути в курсі, як ми захищаємо вашу інформацію."
                        },
                        "contacts": {
                            "title": "9. Контакти",
                            "text": "Якщо у вас є будь-які запитання або коментарі щодо цієї політики конфіденційності, будь ласка, зв’яжіться з нами:",
                            "email_label": "Електронна пошта:"
                        },
                        "back_to_home": "На головну"
                    },
                    "more_infoStr": {
                        "title": "Більше Інформації",
                        "project_description": {
                            "heading": "1. Опис проєкту:",
                            "text": "CRM система кав'ярні призначена для спрощення управління взаємодією з клієнтами та оптимізації внутрішніх процесів. Вона дозволяє співробітникам ефективно обробляти інформацію про клієнтів, управління програмою лояльності, замовленнями та акціями."
                        },
                        "features": {
                            "heading": "2. Функціональні можливості:",
                            "list": {
                                "customer_base": {
                                    "title": "Клієнтська база:",
                                    "text": "Додавання, редагування і видалення клієнтів, відстеження їх історії замовлень та статусу в програмі лояльності."
                                },
                                "loyalty_program": {
                                    "title": "Програма лояльності:",
                                    "text": "Управління бонусними балами, рівнями клієнтів, створення персоналізованих пропозицій."
                                },
                                "orders": {
                                    "title": "Замовлення:",
                                    "text": "Фільтрація та пошук замовлень, перегляд деталей кожного замовлення, управління їх статусами."
                                },
                                "promotions": {
                                    "title": "Акції та пропозиції:",
                                    "text": "Створення і управління рекламними кампаніями, відображення активних пропозицій для клієнтів."
                                }
                            }
                        },
                        "business_benefits": {
                            "heading": "3. Переваги для бізнесу:",
                            "list": {
                                "management_efficiency": {
                                    "title": "Ефективність управління:",
                                    "text": "Спрощує роботу барист, менеджерів та маркетологів завдяки централізованій системі управління клієнтами та замовленнями."
                                },
                                "personalized_service": {
                                    "title": "Персоналізація обслуговування:",
                                    "text": "Підвищує лояльність клієнтів за рахунок індивідуальних пропозицій і акцій на основі їхніх вподобань."
                                },
                                "ease_of_use": {
                                    "title": "Простота використання:",
                                    "text": "Інтуїтивно зрозумілий інтерфейс для швидкого навчання співробітників та легкого доступу до необхідної інформації."
                                }
                            }
                        },
                        "security_and_scalability": {
                            "heading": "4. Безпека та масштабованість:",
                            "text": "CRM система передбачає високий рівень безпеки даних завдяки використанню сучасних технологій шифрування, захисту від SQL-ін'єкцій та інших кіберзагроз. Також система легко масштабується для підтримки збільшення кількості клієнтів та розширення бізнесу."
                        },
                        "back_to_home": "На головну",
                        'dashboard': 'Панель управління',
                        'login': 'Увійти',
                        'register': 'Зареєструватись'
                    }
                }
            }
        },
        lng: "en", // default language
        fallbackLng: "en", // fallback language
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
