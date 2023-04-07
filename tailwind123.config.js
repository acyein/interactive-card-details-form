tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'primary': ['Space Grotesk', 'sans-serif']
            },
            colors: {
                white: 'hsl(0, 0%, 100%)',
                violet: {
                    300: 'hsl(270, 3%, 87%)',
                    700: 'hsl(279, 6%, 55%)',
                    900: 'hsl(278, 68%, 11%)',
                },
                warning: 'hsl(0, 100%, 66%)'
            },
            backgroundImage: {
                'gradient': './assets/img/bg-main-desktop.png',
                'gradient-mobile': './assets/img/bg-main-mobile.png',
                'card-front': './assets/img/bg-card-front.png',
                'card-back': './assets/img/bg-card-back.png',
            }
        }
    }
}