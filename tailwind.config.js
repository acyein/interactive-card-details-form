/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        extend: {
            fontFamily: {
                'primary': ['"Space Grotesk"', 'sans-serif']
            },
            colors: {
                white: 'hsl(0, 0%, 100%)',
                purple: {
                    300: 'hsl(270, 3%, 87%)',
                    700: 'hsl(279, 6%, 55%)',
                    900: 'hsl(278, 68%, 11%)',
                },
                warning: 'hsl(0, 100%, 66%)'
            },
            backgroundImage: {
                'gradient-main': "url('/assets/bg-main-desktop.png')",
                'gradient-main-mobile': "url('/assets/bg-main-mobile.png')",
                'card-front': "url('/assets/bg-card-front.png')",
                'card-back': "url('/assets/bg-card-back.png')",
            }
        }
    },
    plugins: [],
};
