import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import {barrel, swc_plugin_barrel} from 'vite-plugin-barrel';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.tsx', 'resources/scss/app.scss', 'resources/css/app.css'],
            refresh: true,
        }),
        react({
            plugins: [
                swc_plugin_barrel({
                    packages: ['@mui/material', '@mui/icons-material'],
                }),
            ],
        }),
        barrel({
            packages: ['@mui/material', '@mui/icons-material'],
            experimental: {
                intergration: 'plugin-react-swc',
            },
        }),
    ],
});
