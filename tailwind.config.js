/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Cores customizadas em HSL
            colors: {
                primary: {
                    DEFAULT: 'hsl(220, 90%, 56%)',
                    hover: 'hsl(220, 90%, 48%)',
                    light: 'hsl(220, 90%, 96%)',
                    dark: 'hsl(220, 90%, 40%)',
                },
                neutral: {
                    950: 'hsl(220, 20%, 8%)',
                    900: 'hsl(220, 20%, 10%)',
                    800: 'hsl(220, 18%, 18%)',
                    700: 'hsl(220, 15%, 25%)',
                    600: 'hsl(220, 12%, 40%)',
                    500: 'hsl(220, 10%, 50%)',
                    400: 'hsl(220, 10%, 65%)',
                    300: 'hsl(220, 10%, 80%)',
                    200: 'hsl(220, 12%, 88%)',
                    100: 'hsl(220, 15%, 95%)',
                    50: 'hsl(220, 20%, 98%)',
                },
            },
            // Fontes customizadas
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
                display: ['Outfit', 'Inter', 'sans-serif'],
                mono: ['Courier New', 'monospace'],
            },
            // Espaçamentos customizados
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            // Container máximo
            maxWidth: {
                'container': '1200px',
            },
            // Box shadows customizadas
            boxShadow: {
                'xs': '0 1px 2px rgba(0, 0, 0, 0.05)',
                'smooth': '0 4px 6px rgba(0, 0, 0, 0.07)',
                'md': '0 6px 12px rgba(0, 0, 0, 0.08)',
            },
            // Transições customizadas
            transitionDuration: {
                '400': '400ms',
            },
            // Border radius customizado
            borderRadius: {
                'sm': '0.5rem',
                'base': '0.75rem',
            },
        },
    },
    plugins: [],
}
