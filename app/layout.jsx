import '@styles/globals.css';

export const metadata = {
    title: 'Md Jahirul Islam | Backend Developer',
    description: 'Python Backend Developer Portfolio - Crafting production-grade APIs with FastAPI and Django',
    icons: {
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="75" font-size="75" fill="%2358a6ff">J</text></svg>',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
