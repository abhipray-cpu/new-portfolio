/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            keyframes: {
                'slide-left': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
            animation: {
                'slide-left-infinite': 'slide-left 15s linear infinite',
            },
            fontFamily: {
                ingrid: ['Ingrid Darling'],
                inter: ['Inter'],
                'inter-normal': ['Inter', 400],
                'inter-semi': ['Inter', 500],
                'inter-bold': ['Inter', 800]
            },
        },
    },
    breakpoints: {
        'sm': '600px',
        'md': '768px',
        'lg': '976px',
        'xl': '1440px',
    },
    plugins: [function({ addUtilities }) {
        const newUtilities = {
            '.bg-light': {
                backgroundColor: '#ffffff', // Use the light background color
            },
            '.bg-dark': {
                backgroundColor: '#05050D', // Use the dark background color
            },
            '.text-light1': {
                color: '#2C2C2C'
            },
            '.text-light2': {
                color: '#000000'
            },
            '.text-dark1': {
                color: '#B5B5B8'
            },
            '.text-dark2': {
                color: '#ffffff'
            }
        }
        addUtilities(newUtilities, ['responsive', 'hover'])
    }],
}