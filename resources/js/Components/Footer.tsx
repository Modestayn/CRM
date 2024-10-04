import {Link} from '@inertiajs/react';
import React, {useState, useEffect} from 'react';

export const Footer: React.FC = () => {
    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

    useEffect(() => {
        const updateYear = () => {
            setCurrentYear(new Date().getFullYear());
        };
        updateYear();
    }, []);

    return (
        <footer className="py-4 text-center bg-white border-t border-gray-300">
            &copy; {currentYear} CRM coffee bean -
            <Link href={route('politics')} className="text-gray-700 hover:underline">Усі права захищено</Link>
        </footer>
    );
};

