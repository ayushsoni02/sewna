/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: { accent: '#00b67f' },
            fontFamily: { sans: ['Inter', 'sans-serif'] },
        },
    },
    plugins: [],
}
