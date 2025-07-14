/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",                           // index.html is in root
        "./src/**/*.{js,jsx,ts,tsx}",            // All JS/TS files in src
    ],
    theme: {
        extend: {
            colors: {
                'edu-blue': '#1e40af',
                'edu-light-blue': '#3b82f6',
                'edu-navy': '#1e3a8a',
                'edu-gray': '#6b7280'
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-in-out',
                'slide-in': 'slideIn 0.6s ease-out'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' }
                }
            }
        },
    },
    plugins: []
}